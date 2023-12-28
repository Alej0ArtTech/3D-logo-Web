import * as THREE from 'three';
console.log(THREE)

// Crear una escena
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


// Crear una cámara

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)


// Crear un renderizador
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Cargar el modelo 3D
const canvas = document.querySelector('canvas.webgl')


//renderizacion
renderer.render(scene, camera)



// Animación y renderizado
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
