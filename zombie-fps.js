"use strict";

class ZombieFirstPerson {
  constructor(THREE, scene, camera, canvas, controls) {
    this.THREE = THREE;
    this.camera = camera;
    this.canvas = canvas;
    this.controls = controls;
    this.keys = new Set();
    this.position = new THREE.Vector3();
    this.step = new THREE.Vector3();
    this.direction = new THREE.Vector3();
    this.ray = new THREE.Ray();
    this.hitPoint = new THREE.Vector3();
    this.zombieBounds = new THREE.Box3();
    this.recoil = 0;
    this.flashUntil = 0;
    this.tracerUntil = 0;
    this.walkPhase = 0;
    this.mouseSway = new THREE.Vector2();
    this.unlockedPointer = null;
    this.fpsCapture = document.getElementById("fpsCapture");
    this.reticle = document.getElementById("fpsReticle");
    this.heading = document.getElementById("fpsHeading");
    this.threat = document.getElementById("fpsThreat");
    this.cover = [
      new THREE.Box3(new THREE.Vector3(-2.35, 0, -2.15), new THREE.Vector3(2.35, 3.05, 2.22)),
      new THREE.Box3(new THREE.Vector3(-3.64, 0, -0.72), new THREE.Vector3(-2.49, 1.24, 1.85)),
      new THREE.Box3(new THREE.Vector3(2.49, 0, -0.72), new THREE.Vector3(3.64, 1.24, 1.53)),
    ];
    this.weaponScene = new THREE.Scene();
    this.weaponCamera = new THREE.PerspectiveCamera(56, 1, 0.03, 5);
    this.weaponScene.add(new THREE.HemisphereLight(0xc6deea, 0x1b201b, 1.35));
    const weaponLight = new THREE.DirectionalLight(0xc8deef, 2.4);
    weaponLight.position.set(-1, 2, 1);
    this.weaponScene.add(weaponLight);
    this.weapon = this.createViewModel();
    this.weapon.scale.setScalar(0.80);
    this.weaponScene.add(this.weapon);

    this.flashlight = new THREE.SpotLight(0xd5e7f2, 92, 24, Math.PI / 6, 0.85, 2);
    scene.add(this.flashlight, this.flashlight.target);
    const tracerGeometry = new THREE.BufferGeometry();
    tracerGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
    this.tracer = new THREE.Line(tracerGeometry, new THREE.LineBasicMaterial({
      color: 0xffd496, transparent: true, depthWrite: false,
    }));
    this.tracer.frustumCulled = false;
    this.tracer.visible = false;
    scene.add(this.tracer);
    this.flashLight = new THREE.PointLight(0xffbb66, 0, 4, 2);
    scene.add(this.flashLight);
    this.reset();
    this.bindControls();
  }

  reset() {
    this.position.set(-6, 1.68, 8.5);
    this.yaw = -0.56;
    this.pitch = -0.04;
    this.walkPhase = 0;
    this.recoil = 0;
    this.flashUntil = 0;
    this.tracerUntil = 0;
    this.keys.clear();
    this.mouseSway.set(0, 0);
    this.unlockedPointer = null;
    this.updateCamera(0);
  }

  get locked() {
    return document.pointerLockElement === this.canvas;
  }

  capture() {
    if (!this.controls.canMove() || this.locked || !this.canvas.requestPointerLock) return;
    try {
      const request = this.canvas.requestPointerLock();
      request?.catch(() => {});
    } catch (_error) {
      // Hover and arrow look remain available if the browser denies capture.
    }
  }

  release() {
    this.keys.clear();
    this.unlockedPointer = null;
    if (this.locked) document.exitPointerLock();
  }

  bindControls() {
    const moveKeys = new Set(["KeyW", "KeyA", "KeyS", "KeyD", "ShiftLeft", "ShiftRight",
      "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
    document.addEventListener("keydown", (event) => {
      if (!this.controls.canMove() || event.ctrlKey || event.metaKey || event.altKey ||
          event.target.closest("input, select, textarea")) return;
      if (moveKeys.has(event.code)) {
        this.keys.add(event.code);
        event.preventDefault();
      } else if (event.code === "KeyF" && !event.repeat) {
        this.controls.target();
        event.preventDefault();
      }
    });
    document.addEventListener("keyup", (event) => this.keys.delete(event.code));
    window.addEventListener("blur", () => {
      this.keys.clear();
      this.unlockedPointer = null;
    });
    let wasLocked = false;
    document.addEventListener("pointerlockchange", () => {
      this.keys.clear();
      this.unlockedPointer = null;
      if (wasLocked && !this.locked) this.controls.lostMouse();
      wasLocked = this.locked;
    });
    document.addEventListener("mousemove", (event) => {
      if (this.locked && this.controls.canMove()) this.look(event.movementX, event.movementY);
    });
    this.canvas.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" || this.locked) return;
      const previous = this.unlockedPointer;
      this.unlockedPointer = { x: event.clientX, y: event.clientY };
      if (previous && this.controls.canMove()) {
        this.look(event.clientX - previous.x, event.clientY - previous.y);
      }
    });
    this.canvas.addEventListener("pointerleave", () => { this.unlockedPointer = null; });
    let drag = null;
    this.canvas.addEventListener("pointerdown", (event) => {
      if (!this.controls.canMove() || event.button !== 0) return;
      if (event.pointerType === "mouse") {
        this.updateCamera(0);
        this.controls.target();
        return;
      }
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
      this.canvas.setPointerCapture(event.pointerId);
    });
    this.canvas.addEventListener("pointermove", (event) => {
      if (drag?.id !== event.pointerId || !this.controls.canMove() || this.locked) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
      drag.moved = true;
      this.look(dx * 1.5, dy * 1.5);
      drag.x = event.clientX;
      drag.y = event.clientY;
    });
    this.canvas.addEventListener("pointerup", (event) => {
      if (drag?.id !== event.pointerId) return;
      if (!drag.moved && this.controls.canMove()) this.controls.target();
      drag = null;
    });
    this.canvas.addEventListener("lostpointercapture", () => { drag = null; });
    this.fpsCapture.addEventListener("click", () => this.capture());
    document.getElementById("fpsTouchTarget").addEventListener("click", this.controls.target);
    document.getElementById("fpsTouchPause").addEventListener("click", this.controls.pause);
    for (const button of document.querySelectorAll("[data-move]")) {
      const code = button.dataset.move;
      button.addEventListener("pointerdown", (event) => {
        if (!this.controls.canMove()) return;
        event.preventDefault();
        button.setPointerCapture(event.pointerId);
        this.keys.add(code);
      });
      button.addEventListener("lostpointercapture", () => this.keys.delete(code));
    }
  }

  look(dx, dy) {
    this.yaw -= dx * 0.0027;
    this.pitch = this.THREE.MathUtils.clamp(this.pitch - dy * 0.0027, -1.34, 1.34);
    this.mouseSway.x = this.THREE.MathUtils.clamp(this.mouseSway.x + dx * 0.0013, -0.12, 0.12);
    this.mouseSway.y = this.THREE.MathUtils.clamp(this.mouseSway.y + dy * 0.0013, -0.09, 0.09);
  }

  canStand(x, z) {
    if (Math.hypot(x, z) > 26) return false;
    return !this.cover.some((box) =>
      x > box.min.x - 0.31 && x < box.max.x + 0.31 &&
      z > box.min.z - 0.31 && z < box.max.z + 0.31);
  }

  updateCamera(delta) {
    let walking = false;
    if (this.controls.canMove()) {
      const pressed = (code) => Number(this.keys.has(code));
      this.look((pressed("ArrowRight") - pressed("ArrowLeft")) * delta * 740,
        (pressed("ArrowDown") - pressed("ArrowUp")) * delta * 580);
      // The viewport edge lets mouse-look keep turning even in an embedded browser.
      if (!this.locked && this.unlockedPointer && delta > 0) {
        const { x, y } = this.unlockedPointer;
        const rect = this.canvas.getBoundingClientRect();
        const edge = 28;
        const edgeTurn = (value, start, end) => {
          if (value < start + edge) return (value - start - edge) / edge;
          if (value > end - edge) return (value - end + edge) / edge;
          return 0;
        };
        this.look(edgeTurn(x, rect.left, rect.right) * delta * 680, edgeTurn(y, rect.top, rect.bottom) * delta * 440);
      }
      const forward = pressed("KeyW") - pressed("KeyS");
      const strafe = pressed("KeyD") - pressed("KeyA");
      if (forward || strafe) {
        const sprint = this.keys.has("ShiftLeft") || this.keys.has("ShiftRight");
        const distance = delta * (sprint ? 5.7 : 3.7);
        this.step.set(strafe, 0, -forward).normalize().multiplyScalar(distance);
        this.step.applyAxisAngle(this.camera.up, this.yaw);
        const x = this.position.x + this.step.x;
        const z = this.position.z + this.step.z;
        if (this.canStand(x, this.position.z)) { this.position.x = x; walking = true; }
        if (this.canStand(this.position.x, z)) { this.position.z = z; walking = true; }
      }
    }
    if (walking) this.walkPhase += delta * 10.5;
    this.recoil *= Math.exp(-delta * 15);
    this.mouseSway.multiplyScalar(Math.exp(-delta * 11));
    const bob = walking ? Math.sin(this.walkPhase) * 0.024 : 0;
    this.camera.position.copy(this.position);
    this.camera.position.y += bob;
    this.camera.rotation.set(this.pitch + this.recoil * 0.045, this.yaw, 0, "YXZ");
    this.camera.updateMatrixWorld();
    this.camera.getWorldDirection(this.direction);
    this.flashlight.position.copy(this.camera.position);
    this.flashlight.target.position.copy(this.camera.position).addScaledVector(this.direction, 10);
    this.weapon.position.set(0.27 + bob * 0.48, -0.29 + bob * 0.62, -0.69 + this.recoil * 0.1);
    this.weapon.rotation.set(
      -0.035 + this.recoil * 0.15 - this.mouseSway.y,
      0.23 - this.mouseSway.x,
      -0.04 - this.mouseSway.x * 0.27,
    );
  }

  obstructionDistance() {
    let distance = Infinity;
    for (const box of this.cover) {
      if (this.ray.intersectBox(box, this.hitPoint)) {
        distance = Math.min(distance, this.ray.origin.distanceTo(this.hitPoint));
      }
    }
    return distance;
  }

  aim(zombies, visuals) {
    this.ray.set(this.camera.position, this.direction);
    let nearest = Math.min(40, this.obstructionDistance());
    let target = null;
    for (const zombie of zombies) {
      const root = visuals.get(zombie.id)?.root;
      if (!root || zombie.exploding || Math.hypot(root.position.x, root.position.z) > 29) continue;
      const { x, y, z } = root.position;
      this.zombieBounds.min.set(x - 0.43, y + 0.06, z - 0.43);
      this.zombieBounds.max.set(x + 0.43, y + 2.22, z + 0.43);
      if (!this.ray.intersectBox(this.zombieBounds, this.hitPoint)) continue;
      const distance = this.ray.origin.distanceTo(this.hitPoint);
      if (distance < nearest) {
        nearest = distance;
        target = zombie;
      }
    }
    return target;
  }

  canFireAt(root) {
    this.step.copy(root.position);
    this.step.y += 1.35;
    this.step.sub(this.camera.position);
    const distance = this.step.length();
    this.ray.set(this.camera.position, this.step.normalize());
    return distance < 40 && distance < this.obstructionDistance();
  }

  updateHud(aimed, locked, threatRoot) {
    this.reticle.classList.toggle("on-target", Boolean(aimed || locked));
    if (this.controls.canMove() && !this.locked && this.canvas.requestPointerLock) {
      this.fpsCapture.hidden = false;
    } else {
      this.fpsCapture.hidden = true;
    }
    const degrees = (Math.round(-this.yaw * 180 / Math.PI) % 360 + 360) % 360;
    const cardinal = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(degrees / 45) % 8];
    const heading = `${cardinal} ${String(degrees).padStart(3, "0")}°`;
    if (this.heading.textContent !== heading) this.heading.textContent = heading;
    let warning = "";
    if (threatRoot) {
      const dx = threatRoot.position.x - this.position.x;
      const dz = threatRoot.position.z - this.position.z;
      const bearing = -Math.atan2(dx, -dz) - this.yaw;
      const angle = Math.atan2(Math.sin(bearing), Math.cos(bearing));
      const direction = Math.abs(angle) < 0.35 ? "↑" : Math.abs(angle) > 2.65 ? "↓" : angle > 0 ? "←" : "→";
      warning = `${direction} Threat · ${Math.round(Math.hypot(dx, dz))} m`;
    }
    if (this.threat.textContent !== warning) this.threat.textContent = warning;
  }

  createViewModel() {
    const T = this.THREE;
    const weapon = new T.Group();
    const steel = new T.MeshStandardMaterial({ color: 0x343f42, roughness: 0.39, metalness: 0.72 });
    const dark = new T.MeshStandardMaterial({ color: 0x202728, roughness: 0.72, metalness: 0.26 });
    const grip = new T.MeshStandardMaterial({ color: 0x454a38, roughness: 0.94 });
    const glove = new T.MeshStandardMaterial({ color: 0x30342c, roughness: 0.98 });
    const add = (geometry, material, x, y, z) => {
      const mesh = new T.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      weapon.add(mesh);
      return mesh;
    };
    const box = (w, h, d, material, x, y, z) => add(new T.BoxGeometry(w, h, d), material, x, y, z);
    const tube = (radius, length, material, x, y, z) => {
      const mesh = add(new T.CylinderGeometry(radius, radius, length, 12), material, x, y, z);
      mesh.rotation.x = Math.PI / 2;
      return mesh;
    };
    box(0.15, 0.15, 0.46, steel, 0, 0, 0.01);
    box(0.135, 0.046, 0.53, dark, 0, 0.083, -0.02);
    box(0.135, 0.12, 0.35, grip, 0, -0.005, -0.36);
    box(0.112, 0.20, 0.16, dark, 0, -0.145, -0.10).rotation.x = 0.18;
    box(0.1, 0.15, 0.12, grip, 0, -0.119, 0.19).rotation.x = -0.29;
    box(0.116, 0.125, 0.30, dark, 0, -0.02, 0.34);
    tube(0.028, 0.30, steel, 0, 0.005, -0.61);
    tube(0.040, 0.11, dark, 0, 0.005, -0.75);
    tube(0.038, 0.19, dark, -0.085, -0.038, -0.41);
    for (let i = 0; i < 7; i += 1) {
      box(0.151, 0.025, 0.018, steel, 0, 0.056, -0.16 - i * 0.05);
    }
    for (const x of [-0.033, 0.033]) box(0.016, 0.075, 0.065, steel, x, 0.115, -0.44);
    const armGeometry = new T.CapsuleGeometry(0.05, 0.36, 6, 9);
    add(armGeometry, grip, 0.11, -0.25, 0.26).rotation.set(-0.95, 0, 0.20);
    add(armGeometry, grip, -0.11, -0.22, -0.16).rotation.set(0.95, 0, -0.24);
    const hand = new T.SphereGeometry(0.075, 12, 8);
    add(hand, glove, 0.018, -0.113, 0.176).scale.set(0.78, 1.15, 1.11);
    add(hand, glove, -0.028, -0.08, -0.37).scale.set(0.98, 0.73, 1.22);
    this.muzzle = add(new T.IcosahedronGeometry(0.073, 0),
      new T.MeshBasicMaterial({ color: 0xffe2a4, toneMapped: false }), 0, 0.005, -0.84);
    this.muzzle.scale.set(0.65, 0.65, 2.8);
    return weapon;
  }

  fire(root, now) {
    this.recoil = 1;
    this.flashUntil = now + 65;
    this.tracerUntil = now + 100;
    const start = this.hitPoint.copy(this.camera.position).addScaledVector(this.direction, 0.7);
    start.y -= 0.19;
    this.flashLight.position.copy(start);
    const points = this.tracer.geometry.attributes.position;
    points.setXYZ(0, start.x, start.y, start.z);
    points.setXYZ(1, root.position.x, root.position.y + 1.35, root.position.z);
    points.needsUpdate = true;
    this.playShot();
  }

  playShot() {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    const context = this.audioContext ??= new Audio();
    if (!this.shotSound) {
      const sound = context.createBuffer(1, context.sampleRate * 0.19, context.sampleRate);
      const samples = sound.getChannelData(0);
      let bass = 0;
      for (let index = 0; index < samples.length; index += 1) {
        const t = index / sound.sampleRate;
        const noise = Math.random() * 2 - 1;
        bass = 0.86 * bass + noise * 0.14;
        samples[index] = noise * Math.exp(-t * 82) * 0.62 + bass * Math.exp(-t * 20);
      }
      this.shotSound = sound;
    }
    const source = context.createBufferSource();
    const volume = context.createGain();
    source.buffer = this.shotSound;
    volume.gain.value = 0.21;
    source.connect(volume).connect(context.destination);
    if (context.state === "suspended") context.resume().catch(() => {});
    source.start();
  }

  updateEffects(now) {
    this.muzzle.visible = now < this.flashUntil;
    this.flashLight.intensity = this.muzzle.visible ? 10 * (this.flashUntil - now) / 65 : 0;
    this.tracer.visible = now < this.tracerUntil;
    if (this.tracer.visible) this.tracer.material.opacity = (this.tracerUntil - now) / 100;
  }

  renderWeapon(renderer) {
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(this.weaponScene, this.weaponCamera);
    renderer.autoClear = true;
  }
}
