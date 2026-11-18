"use strict";

// Shared colors, body proportions, facial shapes, and accessories for the horde.
const ZOMBIE_LOOKS = [
  { height: 1.08, build: 1.09, face: "long", headwear: "bare", shirt: 0xb4c9b1, pants: 0x8797a6, skin: 0xd0baba },
  { height: 0.94, build: 0.98, face: "angular", headwear: "cap", shirt: 0x6c9dd1, pants: 0xc4af89, skin: 0xb49071, patch: 0xb0b0a0 },
  { height: 1.01, build: 1.20, face: "square", headwear: "buzz", shirt: 0xd47451, pants: 0x858e8b, skin: 0xe4caba },
  { height: 1.12, build: 0.90, face: "narrow", headwear: "beanie", shirt: 0x9e9eae, pants: 0x8c9bab, skin: 0xc4a58a },
  { height: 0.98, build: 1.14, face: "round", headwear: "thinning", shirt: 0x809594, pants: 0xa7a598, skin: 0x987960, patch: 0x9c9e88 },
  { height: 1.04, build: 0.94, face: "angular", headwear: "bare", shirt: 0xb9aaa0, pants: 0x8f9fbd, skin: 0xd5c8b2 },
  { height: 0.92, build: 0.91, face: "narrow", headwear: "buzz", shirt: 0xaf83ad, pants: 0xb0aaa2, skin: 0x947f72 },
  { height: 1.02, build: 1.10, face: "square", headwear: "cap", shirt: 0x9db18b, pants: 0x9aa189, skin: 0xb8a78f },
  { height: 1.07, build: 1.00, face: "round", headwear: "beanie", shirt: 0xc3aa79, pants: 0x858f9d, skin: 0xe1c3ac, patch: 0xbcbc9c },
  { height: 0.97, build: 0.95, face: "long", headwear: "thinning", shirt: 0xb3a3a0, pants: 0xa6a0ac, skin: 0xa88373 },
];

const ZOMBIE_FACE_SHAPES = {
  // Width at the jaw and crown, head length, and depth of the facial profile.
  long:    [0.93, 0.98, 1.10, 1.03],
  angular: [1.05, 0.94, 0.95, 1.07],
  square:  [1.23, 1.11, 0.98, 0.98],
  narrow:  [0.86, 0.94, 1.06, 0.94],
  round:   [1.10, 1.13, 0.94, 1.02],
};

function chooseZombieLook(zombies) {
  const occupied = new Set(zombies.map((zombie) => zombie.look));
  const available = ZOMBIE_LOOKS.map((_, index) => index).filter((index) => !occupied.has(index));
  return available.length ? available[Math.floor(Math.random() * available.length)] : 0;
}

class ZombieAppearance {
  constructor(THREE, template) {
    this.THREE = THREE;
    this.headGeometry = new WeakMap();
    this.materials = new WeakMap();
    this.fabricMaps = new WeakMap();
    this.accessories = new Map();
    this.bindInverse = new Map();
    template.updateMatrixWorld(true);
    for (const name of ["Head", "Spine"]) {
      const bone = template.getObjectByName(name);
      if (bone) this.bindInverse.set(name, bone.matrixWorld.clone().invert());
    }
  }

  apply(model, lookIndex, zombieId) {
    const look = ZOMBIE_LOOKS[lookIndex] || ZOMBIE_LOOKS[0];
    const variation = ((zombieId * 37) % 17 - 8) * 0.002;
    const height = look.height + variation;
    model.scale.set(height * (look.build - variation), height, height);
    model.userData.lookIndex = lookIndex;
    model.traverse((mesh) => {
      if (!mesh.isMesh) return;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      if (mesh.isSkinnedMesh) {
        mesh.frustumCulled = false;
        // All of these parts are rigidly weighted to Head, including the eyes and teeth.
        const skinIndex = mesh.geometry.getAttribute("skinIndex");
        const skinWeight = mesh.geometry.getAttribute("skinWeight");
        if (skinIndex && skinWeight && skinWeight.getX(0) > 0.999 &&
            mesh.skeleton.bones[skinIndex.getX(0)]?.name === "Head") {
          mesh.geometry = this.faceGeometry(mesh.geometry, look.face);
        }
      }
      if (mesh.material && !Array.isArray(mesh.material)) mesh.material = this.clothingMaterial(mesh.material, look);
    });
    const kit = this.accessories.get(look) || this.buildAccessories(look);
    for (const [boneName, part] of kit) model.getObjectByName(boneName)?.add(part.clone());
  }

  clothingMaterial(material, look) {
    const slot = {
      "Pallid dead skin": "skin",
      "Torn gray work shirt": "shirt",
      "Weathered trousers": "pants",
    }[material.name];
    if (!slot) return material;
    let variants = this.materials.get(material);
    if (!variants) {
      variants = new Map();
      this.materials.set(material, variants);
    }
    const tint = look[slot];
    if (!variants.has(tint)) {
      const variant = material.clone();
      variant.color.setHex(tint);
      if (slot !== "skin" && material.map) variant.map = this.fabricMap(material.map);
      variants.set(tint, variant);
    }
    return variants.get(tint);
  }

  fabricMap(source) {
    if (this.fabricMaps.has(source)) return this.fabricMaps.get(source);
    const canvas = document.createElement("canvas");
    const image = source.image;
    if (!image?.width || !image?.height) return source;
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    if (!context) return source;
    context.drawImage(image, 0, 0);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    for (let index = 0; index < pixels.data.length; index += 4) {
      const grain = Math.min(255, pixels.data[index] * 0.42 + pixels.data[index + 1] * 1.08 + pixels.data[index + 2] * 0.26);
      pixels.data[index] = pixels.data[index + 1] = pixels.data[index + 2] = grain;
    }
    context.putImageData(pixels, 0, 0);
    const map = source.clone();
    map.source = new this.THREE.Source(canvas);
    map.needsUpdate = true;
    this.fabricMaps.set(source, map);
    return map;
  }

  faceGeometry(geometry, face) {
    let variants = this.headGeometry.get(geometry);
    if (!variants) {
      variants = new Map();
      this.headGeometry.set(geometry, variants);
    }
    if (variants.has(face)) return variants.get(face);

    const shaped = geometry.clone();
    const [jaw, crown, length, depth] = ZOMBIE_FACE_SHAPES[face];
    const positions = shaped.getAttribute("position");
    const normals = shaped.getAttribute("normal");
    const normal = new this.THREE.Vector3();
    for (let index = 0; index < positions.count; index += 1) {
      const y = positions.getY(index);
      const upper = this.THREE.MathUtils.smoothstep(y, 1.66, 1.79);
      const width = jaw + (crown - jaw) * upper;
      positions.setXYZ(index, positions.getX(index) * width, 1.63 + (y - 1.63) * length,
        -0.055 + (positions.getZ(index) + 0.055) * depth);
      if (normals) {
        normal.set(normals.getX(index) / width, normals.getY(index) / length, normals.getZ(index) / depth).normalize();
        normals.setXYZ(index, normal.x, normal.y, normal.z);
      }
    }
    shaped.computeBoundingSphere();
    variants.set(face, shaped);
    return shaped;
  }

  buildAccessories(look) {
    const THREE = this.THREE;
    const kit = [];
    const add = (boneName, parts) => {
      const inverse = this.bindInverse.get(boneName);
      if (!inverse) return;
      const group = new THREE.Group();
      group.name = "Zombie " + (boneName === "Head" ? look.headwear : "workwear patch");
      group.applyMatrix4(inverse);
      group.add(...parts);
      kit.push([boneName, group]);
    };
    const cloth = (color) => new THREE.MeshStandardMaterial({
      color, roughness: 0.97, side: THREE.DoubleSide,
    });

    if (look.headwear !== "bare") {
      const color = { buzz: 0x15120e, thinning: 0x332a22, cap: 0x223844, beanie: 0x2c2921 }[look.headwear];
      const material = cloth(color);
      const parts = [];
      const onHead = (mesh) => {
        mesh.geometry = this.faceGeometry(mesh.geometry, look.face);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parts.push(mesh);
      };
      onHead(new THREE.Mesh(this.crown(look.headwear), material));
      if (look.headwear === "cap") {
        onHead(new THREE.Mesh(this.capVisor(), material));
      }
      if (look.headwear === "beanie") {
        const cuff = new THREE.TorusGeometry(1, 0.08, 6, 32);
        cuff.rotateX(Math.PI / 2);
        cuff.scale(0.111, 0.087, 0.111);
        cuff.translate(0, 1.782, -0.053);
        onHead(new THREE.Mesh(cuff, cloth(0x423c32)));
      }
      add("Head", parts);
    }

    if (look.patch) {
      const patch = new THREE.Mesh(new THREE.BoxGeometry(0.057, 0.026, 0.004), cloth(look.patch));
      patch.position.set(-0.091, 1.365, -0.146);
      patch.rotation.y = 0.22;
      add("Spine", [patch]);
    }
    this.accessories.set(look, kit);
    return kit;
  }

  crown(style) {
    const isHair = style === "buzz" || style === "thinning";
    const positions = [];
    const indices = [];
    const columns = 32;
    const rows = 12;
    for (let row = 0; row <= rows; row += 1) {
      const gradient = Math.max(0.001, row / rows) * Math.PI / 2;
      for (let col = 0; col < columns; col += 1) {
        const angle = col * 2 * Math.PI / columns;
        const forward = Math.max(0, -Math.sin(angle));
        const edge = isHair
          ? 1.742 + forward * 0.062 + (style === "thinning" ? forward * 0.018 * Math.sin(col * 0.8) : 0)
          : (style === "beanie" ? 1.778 : 1.784) + forward * 0.004;
        const top = isHair ? 1.901 : style === "beanie" ? 1.933 : 1.922;
        const radiusX = isHair ? 0.107 : 0.117;
        const radiusZ = isHair ? 0.105 : 0.116;
        const ripple = style === "beanie" ? 1 + Math.cos(angle * 16) * 0.017 : 1;
        positions.push(Math.cos(angle) * Math.sin(gradient) * radiusX * ripple,
          edge + (top - edge) * Math.cos(gradient),
          -0.050 + Math.sin(angle) * Math.sin(gradient) * radiusZ * ripple);
        if (row < rows) {
          const here = row * columns + col;
          const next = row * columns + (col + 1) % columns;
          indices.push(here, next, here + columns, next, next + columns, here + columns);
        }
      }
    }
    return this.meshGeometry(positions, indices);
  }

  capVisor() {
    const positions = [];
    const indices = [];
    for (let index = 0; index <= 16; index += 1) {
      const across = index / 8 - 1;
      const middle = 1 - across * across;
      positions.push(across * 0.102, 1.790 - 0.01 * middle, -0.102 - 0.063 * middle,
        across * 0.107, 1.785 - 0.018 * middle, -0.124 - 0.132 * middle ** 0.7);
      if (index < 16) {
        const start = index * 2;
        indices.push(start, start + 1, start + 2, start + 1, start + 3, start + 2);
      }
    }
    return this.meshGeometry(positions, indices);
  }

  meshGeometry(positions, indices) {
    const geometry = new this.THREE.BufferGeometry();
    geometry.setAttribute("position", new this.THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  }
}
