import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Crear una escena
const scene = new THREE.Scene();

// Crear una cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cargar el modelo 3D
const loader = new GLTFLoader();
const url = 'https://drive.google.com/uc?export=download&id=1ZF7GIu-IvqbJq3GtJtThqqxALDZO3oJr'; // Reemplaza con la URL de tu archivo GLTF en Google Drive
loader.load(url, function (gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});

// Animación y renderizado
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
