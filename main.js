import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

import { blueLine } from "./addLine.js";
import { makeCube } from "./cuber.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.set( 0, 0, 0  );
// camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

// const light = new THREE.AmbientLight( 0xffffff ); // soft white light
// scene.add( light );
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

const loader = new GLTFLoader();
let obj = {}

loader.load( "./public/arrow.glb", function ( gltf ) {
    console.log("Loaded")
    let man = gltf.scene;
    obj.man = man;
	scene.add( man );

}, undefined, function ( error ) {

	console.error( error );

} );
// scene.add( blueLine() )
// const cube = makeCube()
// scene.add( cube )
camera.position.z = 2;


function animate() {
	renderer.render( scene, camera );
    try {
        obj.man.rotation.x += 0.005;
        obj.man.rotation.y += 0.1;
        obj.man.rotation.z += 0.005;
    } catch (error) {
        
    }
}
renderer.setAnimationLoop( animate );
