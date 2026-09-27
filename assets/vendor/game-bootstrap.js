import * as THREE from "./three.module.js";
import { GLTFLoader } from "./loaders/GLTFLoader.js";

window.THREE = THREE;
window.GLTFLoader = GLTFLoader;
const gameScript = document.createElement("script");
gameScript.src = "game.js";
gameScript.defer = true;
document.head.appendChild(gameScript);
