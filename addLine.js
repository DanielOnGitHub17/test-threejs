import * as THREE from "three";

// create a blue LineBasicMaterial



function blueLine(){
    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    const points = [];
    points.push( new THREE.Vector3( 0, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 20, 0 ) );
    points.push( new THREE.Vector3( 20, -10, 0 ) );
    points.push( new THREE.Vector3( 0, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    return line;
};

export { blueLine };