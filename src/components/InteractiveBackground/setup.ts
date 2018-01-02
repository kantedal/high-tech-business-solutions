// // requestAnim shim layer by Paul Irish

// window.requestAnimationFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           function(
//             /* function */ callback,
//             /* DOMElement */ element){
//             window.setTimeout(callback, 1000 / 60);
//           };
// })();


// //set the scene size
// var WIDTH = window.innerWidth / 2,
// HEIGHT = window.innerHeight / 2;
// //set some camera attributes
// var VIEW_ANGLE = 90,
// ASPECT = WIDTH / HEIGHT,
// NEAR = 0.1,
// FAR = 10000;
// //get the DOM element to attach to
// //assume we've got jQuery to hand
// var $container = $('#container');
// //create a WebGL renderer, camera
// //and a scene
// var renderer = new THREE.WebGLRenderer();
// var camera =
// new THREE.PerspectiveCamera(
//   VIEW_ANGLE,
//   ASPECT,
//   NEAR,
//   FAR);
// var scene = new THREE.Scene();
// //the camera starts at 0,0,0
// //so pull it back
// camera.position.z = 1;
// camera.position.y = 0;
// scene.add(camera);
// //start the renderer
// //attach the render-supplied DOM element
// $container.append(renderer.domElement);
// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);



// function loadMesh(){
// //--------- MY MATERIAL --------//
// var vShader = $('vertexshader');
// var fShader = $('fragmentshader');
// shaderMaterial = new THREE.ShaderMaterial( {

//   uniforms: uniforms,
//   vertexShader: document.getElementById( 'vertexShader' ).textContent,
//   fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
//   wireframe: false

// } );

// mesh = new THREE.Mesh(
//   new THREE.PlaneGeometry( 5, 5, 32, 32 ),
//   shaderMaterial
// );
// mesh.rotation.z = (Math.PI);
// //add the sphere to the scene
// scene.add(mesh);
// }

// var shaderMaterial;
// var mesh;
// var clock = new THREE.Clock();
// var mouse = new THREE.Vector2(0,0);

// var uniforms = {

//   resolution:   { value: new THREE.Vector2( window.innerWidth, window.innerHeight) },
//   mouse:   { value: new THREE.Vector2( 1, 0) },
//   time:       { value: 1.0 },
// };

// loadMesh();

// (function animloop(){
//     requestAnimFrame(animloop);

//     camera.updateMatrixWorld();
//     var delta = clock.getDelta();
//     uniforms.time.value += delta;
//     uniforms.mouse.value = mouse;
//     renderer.render(scene, camera);
// })();