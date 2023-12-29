import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

	


        //crear una scena y una camera	
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth)
        camera.position.z = 3
        scene.add(camera) 

        const renderer =new THREE.WebGLRenderer();
        document.body.appendChild(renderer.domElement);


        // Crear una forma

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        camera.position.z = 5;

        function animate(){
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            renderer.render(scene, camera);
        }

        animate();







//console.log(THREE)












// Crear un renderizador

/*const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

*/






// nuevo cordigo, sive para cargar el modelo 3d
// Cargar el modelo glTF
//const loader = new GLTFLoader();

//loader.load( 'models/LOGOBLEN2.gltf', function (gltf) {
 //   scene.add( gltf.scene );
//}, undefined, function ( error ) {

//	console.error( error );
//} )




//renderizacion
