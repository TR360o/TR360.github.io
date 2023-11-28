//to do
//addCubes fixen

// import "./style.css";
import * as THREE from "three";
//get around the scene using the mouse//
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Setup scene

const scene = new THREE.Scene();
//Geeft perspectief aan de scene//
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//Zorgt er voor dat alles word gerendert op het canvas//
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
//Maakt het canvas de grootte van het beeldscherm//
renderer.setSize(window.innerWidth, window.innerHeight);
//Verandert het perspectief van de camera op de z en x-as
camera.position.setZ(30);
camera.position.setX(-3);
// render == draw//
renderer.render(scene, camera);

// function addCubes() {
//   const geometry = new THREE.BoxGeometry(1, 1, 1);
//   const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe: true,
//   });
//   const cube = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(5));

//   cube.position.set(x, y, z);
//   scene.add(cube);
// }

// //draw sddCubes in scene
// Array(50).fill().forEach(addCubes);

// // randomly change position of cubes in addCubes onClick
// document.addEventListener("click", addCubes);

// Torus

const geometry = new THREE.TorusGeometry(4.8, 3.1, 5, 11);
//Create material = wrapping paper for geometry//
//A BasicMaterial doenst require light source//
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  wireframe: true,
});
//Create mesh with geometry and material
const torus = new THREE.Mesh(geometry, material);
//Torus aan scene toevoegen
scene.add(torus);

//Rectangle
const newRectangle = new THREE.BoxGeometry(2, 3, 1);
const rectangleMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const rectangle = new THREE.Mesh(newRectangle, rectangleMaterial);
scene.add(rectangle);

// Light and positioning

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
//lights everything up in the room//
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

//Shows position of light source as wireframe
// const lightHelper = new THREE.PointLightHelper(pointLight)

// //draws grid along the scene
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

//genereerd sterren
function addStar() {
  //radius staat tussen haakjes//
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  // randFloatSpread genereert random getallen tussen de -100 en 100
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(90));

  //random nummers pakken om de positie van de ster te zetten
  star.position.set(x, y, z);
  scene.add(star);
}

// Aantal sterren dat word gegenereerd
Array(400).fill().forEach(addStar);

const testgeometry = new THREE.BoxGeometry(2, 0.75, 1);
const edges = new THREE.EdgesGeometry(testgeometry);
const line = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0xffffff })
);
scene.add(line);

// Add click event listener to window
window.addEventListener("click", onClick, false);

// Add scroll event listener to window
window.addEventListener("wheel", onScroll, false);

// Scroll event handler
function onClick(event) {
  // Check if the click occurred on the cube
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([line]);

  if (intersects.length > 0) {
    // Cube is clicked
    console.log("Cube clicked!");

    // Scroll down by 1000 pixels (adjust the value as needed)
    window.scrollTo({
      top: window.scrollY + 1000,
      behavior: "smooth", // You can use 'auto' instead of 'smooth' for an instant scroll
    });
  }
}

function onScroll(event) {
  // Add your scroll-down logic here
  console.log("Scrolling down!");
}
// Background
//-------------------------------------------------------------------
//Texture inladen
// LET OP1 hier can je ook call back functie neer zetten zodat je weet wanneer de afb klaar is met laden.
// Bvb voor laad balkje etc
// const spaceTexture = new THREE.TextureLoader().load("space.jpg");
// zet img als achtergrond van scene
//-------------------------------------------------------------------
// const spaceTexture = new THREE.TextureLoader().load("space.jpg");
// scene.background = spaceTexture;

// cube

//laad foto als texture
// const jeffTexture = new THREE.TextureLoader().load("jeff.png");

// // cube die thika heet met foto mesh
// const jeff = new THREE.Mesh(
//   new THREE.BoxGeometry(3, 3, 3),
//   new THREE.MeshBasicMaterial({ map: jeffTexture })
// );
// scene.add(jeff);

// Moon

//Laad de texture voor moon en de normal map
// const moonTexture = new THREE.TextureLoader().load("moon.jpg");
// const normalTexture = new THREE.TextureLoader().load("normal.jpg");

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//     normalMap: normalTexture,
//   })
// );

// scene.add(moon);

line.position.z = -10;
line.position.x = 0;
line.position.y = -1.95;

torus.position.z = -15;
torus.position.x = 10;

rectangle.position.z = -5;
rectangle.position.x = -4;
rectangle.position.y = 4;

//Setting position moon with setter function
// moon.position.z = 30;
// moon.position.setX(-10);

//Setting position thika
// jeff.position.z = -5;
// jeff.position.x = 2;

// Scroll Animation

function moveCamera() {
  //Calculating where the user is curently scrolled to
  const t = document.body.getBoundingClientRect().top;

  //rotation objects on axis
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

  // jeff.rotation.y += 0.01;
  // jeff.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

//Event handeler body onscroll document
document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

// infinit loop calls render automatically, game loop//
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  rectangle.rotation.x += 0.01;
  rectangle.rotation.y += 0.01;

  // moon.rotation.x += 0.005;
  // zorgt er voor dat veranderingen in de UI worden weergegeven//
  // controls.update();
  renderer.render(scene, camera);
}

animate();
