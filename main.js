import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


console.log(THREE)

// Crear una escena
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)




//ratio + camaron
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// Crear un renderizador

const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// nuevo cordigo, sive para cargar el modelo 3d
// Cargar el modelo glTF
const loader = new GLTFLoader();
const url = 'models/LOGOBLEN.glb'; // Reemplaza 'your-model-url' con la URL de tu modelo glTF en Google Drive

loader.load(url, (gltf) => {
    
    scene.add(gltf.scene);

//renderizacion
renderer.render(scene, camera)

})
