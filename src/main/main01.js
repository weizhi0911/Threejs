// import * THREE from 'three'

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // 创建场景
// var scene = new THREE.Scene();

// // 创建相机
// var  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

// var controls = new THREE.OrbitControls( camera );

// //controls.update() must be called after any manual changes to the camera's transform
// camera.position.set( 0, 20, 100 );
// controls.update();

// function animate() {

//   requestAnimationFrame( animate );

//   // required if controls.enableDamping or controls.autoRotate are set to true
//   controls.update();

//   renderer.render( scene, camera );

// }