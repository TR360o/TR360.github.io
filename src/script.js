// import "./style.css";

// import * as dat from "dat.gui";

//get around the scene using the mouse//
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";
// import GUI from "lil-gui";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

// Debug
// const gui = new GUI();
// Scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(50);
// camera.position.setX(-3);

renderer.render(scene, camera);

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture1 = textureLoader.load("../static/textures/matcaps/16.png");
matcapTexture1.colorSpace = THREE.SRGBColorSpace;
const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture1 });

const matcapTexture2 = textureLoader.load("../static/textures/matcaps/14.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;

/**
 * Fonts
 */
const textGroup = new THREE.Group();
textGroup.position.y = 0;
textGroup.position.z = 0;
textGroup.position.x = 0;
scene.add(textGroup);

const textGroup2 = new THREE.Group();
textGroup.position.y = 0;
textGroup.position.z = 0;
textGroup.position.x = 0;
scene.add(textGroup2);

const textGroup3 = new THREE.Group();
textGroup.position.y = 0;
textGroup.position.z = 0;
textGroup.position.x = 0;
scene.add(textGroup3);

const fontLoader = new FontLoader();
fontLoader.load("/fonts/Varela_Round_Regular.json", (font) => {
  const textGeometryH1 = new TextGeometry("Welcome t    my space", {
    font: font,
    size: 5,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.3,
    bevelOffset: 0,
    bevelSegments: 4,
  });

  textGeometryH1.center();

  const textMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture1,
  });

  const textH1 = new THREE.Mesh(textGeometryH1, textMaterial);
  textGroup.add(textH1);

  const textGeometryH2 = new TextGeometry("I'm Thika, a Multimedia Design student", {
    font: font,
    size: 2,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 0.3,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 4,
  });

  const textMaterialH2 = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture2,
  });

  const textH2 = new THREE.Mesh(textGeometryH2, textMaterialH2);
  textH2.position.copy(textH1.position);
  textH2.position.y = -10;
  textGeometryH2.center();

  textGroup.add(textH2);
});

/**
 * Object
 */
// Donuts
const donutGeometry = new THREE.SphereGeometry(0.2, 48, 48);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const numberOfDonuts = 200;

for (let i = 0; i < numberOfDonuts; i++) {
  const donut = new THREE.Mesh(donutGeometry, starMaterial);

  // Adjust the range of positions for x, y, and z coordinates
  donut.position.x = (Math.random() - 0.5) * 600;
  donut.position.y = (Math.random() - 0.5) * 600;
  donut.position.z = (Math.random() - 0.5) * 600;

  donut.rotation.x = Math.random() * Math.PI;
  donut.rotation.y = Math.random() * Math.PI;

  // Increase the scale of the donuts
  const scale = Math.random() * 2; // Adjust the factor based on your preference
  donut.scale.set(scale, scale, scale);

  scene.add(donut);
}

// Torus
const geometry = new THREE.TorusGeometry(1.3, 0.8, 20, 16);
const textMaterialH1 = new THREE.MeshMatcapMaterial({
  matcap: matcapTexture1,
});
const torus = new THREE.Mesh(geometry, textMaterialH1);
torus.position.x = 1;
textGroup.add(torus);

const triangleGemetery = new THREE.TorusGeometry(2, 1, 14, 3);
const triangle = new THREE.Mesh(triangleGemetery, textMaterialH1);
triangle.position.y = -15;
triangle.position.x = 0;
triangle.position.z = 0;
triangle.rotation.z = Math.PI / 1.2;
textGroup.add(triangle);


//Group 2 About me

const fontLoader2 = new FontLoader();
fontLoader2.load("/fonts/Varela_Round_Regular.json", (font) => {
  const textGeometryH1 = new TextGeometry("About Me", {
    font: font,
    size: 2.5,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.3,
    bevelOffset: 0,
    bevelSegments: 4,
  });



  const textMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture1,
  });

  const textH1 = new THREE.Mesh(textGeometryH1, textMaterial);
  textH1.position.y = -35;
  textH1.position.x = -25;

  textGroup2.add(textH1);


});

// Group3 works

const fontLoader3 = new FontLoader();
fontLoader2.load("/fonts/Varela_Round_Regular.json", (font) => {
  const textGeometryH3 = new TextGeometry("Works", {
    font: font,
    size: 2.5,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.3,
    bevelOffset: 0,
    bevelSegments: 4,
  });



  const textMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture1,
  });

  const textH1 = new THREE.Mesh(textGeometryH3, textMaterial);
  textH1.position.y = -75;
  textH1.position.x = 2;
  // const rotationAngle = Math.PI / -6;
  // textH1.rotation.y = rotationAngle;
  textGroup3.add(textH1);


});

const thikaTexture = new THREE.TextureLoader().load("/assets/thikaCube.png");
var cgeometry = new THREE.BoxGeometry(15, 15, 0.8);
var material = new THREE.MeshBasicMaterial({ map: thikaTexture });
var cube = new THREE.Mesh(cgeometry, material);
textGroup2.add(cube);

cube.position.y = -47;


var pgeometry = new THREE.BoxGeometry(5, 5, 5);
var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
var pCube = new THREE.Mesh(pgeometry, material);
pCube.position.x = 300;
pCube.position.y = -78;
textGroup3.add(pCube);

const blocks = [];
for (let i = 0; i < 6; i++) {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const block = new THREE.Mesh(geometry, material);
  block.position.x = (i % 3) * 2 - 2; // Distribute blocks along the x-axis
  block.position.y = Math.floor(i / 3) * 2 - 2; // Distribute blocks along the y-axis
  block.position.y += -80; // Adjust the initial y position to -80


  blocks.push(block);
  scene.add(block);
  console.log(blocks)
}
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
/**
 * Animate
 */
// Create a cube


// Set up camera position
camera.position.z = 5;

var scrollSpeed = 0.05;
var scrollX = 0;
var maxScrollX = 45; // Set your desired threshold

function onScroll() {
  scrollX = window.scrollY * scrollSpeed;
}


// Set initial camera position
const initialZPosition = 30;
camera.position.z = initialZPosition;

// Track total scroll distance
let totalScrollDistance = 0;

// Function to move the camera
function moveCamera() {
  const currentScrollY = window.scrollY;
  const scrollDistance = currentScrollY - totalScrollDistance;

  camera.position.z += scrollDistance * -0.01;
  camera.position.y -= scrollDistance * 0.05;

  totalScrollDistance = currentScrollY;
}

window.addEventListener('scroll', onScroll);

document.body.onscroll = moveCamera;
moveCamera();

const clock = new THREE.Clock();


const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  blocks.forEach(block => {
    block.rotation.x += 0.01;
    block.rotation.y += 0.01;
  });


  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  const speedMultiplier = 2;
  const amplitude = 0.005;

  triangle.position.y += Math.sin(elapsedTime * speedMultiplier) * amplitude;

  // Check if the scrollX is less than the maximum threshold
  if (scrollX < maxScrollX) {
    cube.position.x = 60 - scrollX;
  }


  const speedMultiplierp = 2;
  const amplitudep = 0.005;

  // Animate pCube based on scrollX
  pCube.position.x = Math.min(70, 90 - scrollX);
  pCube.position.y = -82 + Math.sin(elapsedTime * speedMultiplierp) * amplitudep;
};

tick();


// const scene = new THREE.Scene();
// //Geeft perspectief aan de scene//
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// //Zorgt er voor dat alles word gerendert op het canvas//
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#bg"),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// //Maakt het canvas de grootte van het beeldscherm//
// renderer.setSize(window.innerWidth, window.innerHeight);
// //Verandert het perspectief van de camera op de z en x-as
// camera.position.setZ(30);
// camera.position.setX(-3);
// // render == draw//
// renderer.render(scene, camera);

// Text loading

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

// const geometry = new THREE.TorusGeometry(4.8, 3.1, 5, 11);
// //Create material = wrapping paper for geometry//
// //A BasicMaterial doenst require light source//
// const material = new THREE.MeshStandardMaterial({
//   color: 0xff6347,
//   wireframe: true,
// });
// //Create mesh with geometry and material
// const torus = new THREE.Mesh(geometry, material);
// //Torus aan scene toevoegen
// scene.add(torus);

// //Rectangle
// const newRectangle = new THREE.BoxGeometry(2, 3, 1);
// const rectangleMaterial = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });
// const rectangle = new THREE.Mesh(newRectangle, rectangleMaterial);
// scene.add(rectangle);

// // Light and positioning

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);
// //lights everything up in the room//
// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// Helpers

//Shows position of light source as wireframe
// const lightHelper = new THREE.PointLightHelper(pointLight)

// //draws grid along the scene
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// const testgeometry = new THREE.BoxGeometry(2, 0.75, 1);
// const edges = new THREE.EdgesGeometry(testgeometry);
// const line = new THREE.LineSegments(
//   edges,
//   new THREE.LineBasicMaterial({ color: 0xffffff })
// );
// scene.add(line);

// // Add click event listener to window
// window.addEventListener("click", onClick, false);

// // Add scroll event listener to window
// window.addEventListener("wheel", onScroll, false);

// // Scroll event handler
// function onClick(event) {
//   // Check if the click occurred on the cube
//   const raycaster = new THREE.Raycaster();
//   const mouse = new THREE.Vector2();

//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects([line]);

//   if (intersects.length > 0) {
//     // Cube is clicked
//     console.log("Cube clicked!");

//     // Scroll down by 1000 pixels (adjust the value as needed)
//     window.scrollTo({
//       top: window.scrollY + 1000,
//       behavior: "smooth", // You can use 'auto' instead of 'smooth' for an instant scroll
//     });
//   }
// }

// function onScroll(event) {
//   // Add your scroll-down logic here
//   console.log("Scrolling down!");
// }
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

// line.position.z = -10;
// line.position.x = 0;
// line.position.y = -1.95;

// torus.position.z = -15;
// torus.position.x = 10;

// rectangle.position.z = -5;
// rectangle.position.x = -4;
// rectangle.position.y = 4;

//Setting position moon with setter function
// moon.position.z = 30;
// moon.position.setX(-10);

//Setting position thika
// jeff.position.z = -5;
// jeff.position.x = 2;

// Scroll Animation

// function moveCamera() {
//   //Calculating where the user is curently scrolled to
//   const t = document.body.getBoundingClientRect().top;

//   //rotation objects on axis
//   // moon.rotation.x += 0.05;
//   // moon.rotation.y += 0.075;
//   // moon.rotation.z += 0.05;

//   // jeff.rotation.y += 0.01;
//   // jeff.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// //Event handeler body onscroll document
// document.body.onscroll = moveCamera;
// moveCamera();

// // Animation Loop

// // infinit loop calls render automatically, game loop//
// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   rectangle.rotation.x += 0.01;
//   rectangle.rotation.y += 0.01;

//   // moon.rotation.x += 0.005;
//   // zorgt er voor dat veranderingen in de UI worden weergegeven//
//   // controls.update();
//   renderer.render(scene, camera);
// }

// animate();
