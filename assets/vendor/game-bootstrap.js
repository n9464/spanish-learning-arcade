import * as THREE from "./three.module.js";
import { GLTFLoader } from "./loaders/GLTFLoader.js";
import * as SkeletonUtils from "./utils/SkeletonUtils.js";

window.THREE = THREE;
window.GLTFLoader = GLTFLoader;
window.SkeletonUtils = SkeletonUtils;
const gameScript = document.createElement("script");
gameScript.src = "game.js";
gameScript.defer = true;
document.head.appendChild(gameScript);
