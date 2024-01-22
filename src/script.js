

// import "./style.css";

// import * as dat from "dat.gui";

//get around the scene using the mouse//
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";
// import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { InteractionManager } from 'three.interactive';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// Scene & renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff); // white
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);
// Canvas

//Variables
var positionX = -35;
var letterThickness = 0.4;

// work models
var positionYrow1 = -97;
var positionYrow2 = -120;

var positionXColumn1 = -20;
var positionXColumn2 = 0;
var positionXColumn3 = 20;

//contact models
var positionYContact = -160;

//border
var borderX = 0.02;


// /* 3D models
//   */
//fractal




const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
console.log(dracoLoader)


const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);


//
// loader.load(
//   'envelope/brief.glb',
//   (gltf) => {
//     console.log(gltf)
//     gltf.scene.scale.set(2, 2, 2);
//     scene.add(gltf.scene);
//   }
// )

let tomatoObject = null;

loader.load(
  'tomato/tomato.glb',
  (tomato) => {
    tomatoObject = tomato.scene;
    tomato.scene.scale.set(100, 100, 100);
    tomato.scene.rotateX(Math.PI / 3); // Adjust the angle as needed
    tomato.scene.position.set(positionXColumn1, positionYrow1 + 2, 0);
    scene.add(tomato.scene);

    // Add event listener only if tomatoObject is not null
    if (tomatoObject) {
      tomatoObject.addEventListener('click', () => openPopup("tomatoObject"));
      interactionManager.add(tomatoObject);
    }
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded tom');
  },
  (error) => {
    console.log(error);
  }
);



//Blender
let blenderObject = null;

loader.load(
  'blender/blenderCom.glb',
  function (blender) {
    blenderObject = blender.scene;
    blender.scene.scale.set(0.01, 0.01, 0.01);
    blender.scene.position.set(positionXColumn2, positionYrow1, 0);

    scene.add(blenderObject);

    // Add event listener and interaction manager only if blenderObject is not null
    if (blenderObject) {
      blenderObject.addEventListener('click', () => openPopup("blenderObject"));
      interactionManager.add(blenderObject);
    }

  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened");
  }
);



const fbxLoader = new FBXLoader()
let envelopeObject = null;

loader.load(
  'envelope/brief.glb',
  (envelope) => {
    envelopeObject = envelope.scene;
    envelope.scene.scale.set(3, 3, 3);
    envelope.scene.rotateY(Math.PI / -2);
    envelope.scene.position.set(positionXColumn1, positionYrow2, 0);

    scene.add(envelopeObject);

    // Add event listener and interaction manager only if envelopeObject is not null
    if (envelopeObject) {
      envelopeObject.addEventListener('click', () => openPopup("envelopeObject"));
      interactionManager.add(envelopeObject);
    }

  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded brief');
  },
  (error) => {
    console.log(error);
  }
);

let fractalObject = null;

loader.load(
  'fractal/fractal23.glb',
  (fractal) => {
    fractalObject = fractal.scene;
    fractal.scene.scale.set(80, 80, 60);
    fractal.scene.rotateY(Math.PI / 8);
    fractal.scene.position.set(20, -93, 0);

    scene.add(fractalObject);

    // Add event listener and interaction manager only if fractalObject is not null
    if (fractalObject) {
      fractalObject.addEventListener('click', () => openPopup("fractalObject"));
      interactionManager.add(fractalObject);
    }

  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded fractal');
  },
  (error) => {
    console.log(error);
  }
);


//three model
let threeObject = null;

loader.load(
  'three/threeJs.glb',
  (three) => {
    threeObject = three.scene;
    three.scene.scale.set(0.1, 0.1, 0.1);
    three.scene.rotateY(Math.PI / -2015);
    three.scene.position.set(positionXColumn2 - 1, positionYrow2, 0);

    scene.add(threeObject);

    // Add event listener and interaction manager only if threeObject is not null
    if (threeObject) {
      threeObject.addEventListener('click', () => openPopup("threeObject"));
      interactionManager.add(threeObject);
    }

  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded tree');
  },
  (error) => {
    console.log(error);
  }
);


//pen
let insulinObject = null;

loader.load(
  'insulin/insulinpen.glb',
  (insulin) => {
    insulinObject = insulin.scene;
    insulin.scene.scale.set(0.35, 0.35, 0.35);
    insulin.scene.rotateZ(Math.PI / -4);
    insulin.scene.rotateX(Math.PI / 2);
    insulin.scene.position.set(positionXColumn3 - 1, positionYrow2, 0);

    scene.add(insulinObject);

    // Add event listener and interaction manager only if insulinObject is not null
    if (insulinObject) {
      insulinObject.addEventListener('click', () => openPopup("insulinObject"));
      interactionManager.add(insulinObject);
    }

  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded  pen');
  },
  (error) => {
    console.log(error);
  }
);



//tomato





// Create a raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Add a listener for mousemove event
document.addEventListener('mousemove', onMouseMove, false);

function onMouseMove(event) {
  // Calculate mouse coordinates in normalized device coordinates (NDC)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster with the mouse coordinates
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections
  const intersects = raycaster.intersectObjects(scene.children, true);

  // Reset opacity for all objects in the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.opacity = 0;
    }
  });

  // Set opacity to 1 for the intersected object (if any)
  if (intersects.length > 0) {
    const object = intersects[0].object;
    if (object.isMesh) {
      object.material.opacity = 1;
    }
  }
}
// Load Border Objects
function loadBorderObject(filePath, position, rotation) {
  fbxLoader.load(
    filePath,
    (object) => {
      object.scale.set(borderX, 0.1, 0.1);
      object.rotateY(rotation);
      object.position.copy(position);

      // Set initial opacity to 0
      object.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });

      // Add the object to the scene
      scene.add(object);
    },
    (xhr) => {
      // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      // console.log(error);
    }
  );
}

// Load Border Objects with different positions and rotations
const borderObjects = [
  { filePath: 'assets/border/border.fbx', position: new THREE.Vector3(-20, -93, 0), rotation: Math.PI / 2 },
  { filePath: 'assets/border/border.fbx', position: new THREE.Vector3(0, -93, 0), rotation: Math.PI / 2 },
  { filePath: 'assets/border/border.fbx', position: new THREE.Vector3(20, positionYrow2, 0), rotation: Math.PI / 2 },
  { filePath: 'assets/border/border.fbx', position: new THREE.Vector3(positionXColumn2, positionYrow2, 0), rotation: Math.PI / 2 },
  { filePath: 'assets/border/border.fbx', position: new THREE.Vector3(positionXColumn1, positionYrow2, 0), rotation: Math.PI / 2 },
  { filePath: 'assets/border/border.fbx', position: new THREE.Vector3(20, -93, 0), rotation: Math.PI / 2 },
  // Add more border objects as needed
];

// Load all border objects
borderObjects.forEach((border) => {
  loadBorderObject(border.filePath, border.position, border.rotation);
});

////////////////
///////////////////linkedin
//////////////////////
//////////////////////////
const objTextureLoader = new THREE.TextureLoader();
const objLoader = new OBJLoader();

const [texture, obj] = await Promise.all([
  objTextureLoader.loadAsync('assets/linked/linked.png'),
  objLoader.loadAsync(''),


]);

/////////////////////
///////////////////
///////////////// linkedin
/////////////////////
/////////////////////

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 5, 0)
scene.add(directionalLight)




/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture1 = textureLoader.load("/textures/matcaps/16.png");
matcapTexture1.colorSpace = THREE.SRGBColorSpace;
const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture1 });

const matcapTexture2 = textureLoader.load("/textures/matcaps/14.png");
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
const numberOfDonuts = 250;

for (let i = 0; i < numberOfDonuts; i++) {
  const donut = new THREE.Mesh(donutGeometry, starMaterial);

  // Adjust the range of positions for x, y, and z coordinates
  donut.position.x = (Math.random() - 0.5) * 600;
  donut.position.y = (Math.random() - 0.5) * 1500;
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
    size: 3,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: letterThickness,
    bevelSize: 0.23,
    bevelOffset: 0,
    bevelSegments: 4,
  });



  const textMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture1,
  });

  const textH1 = new THREE.Mesh(textGeometryH1, textMaterial);

  textH1.position.y = -35;
  textH1.position.x = positionX;

  textGroup2.add(textH1);


});

// Group3 works

const fontLoader3 = new FontLoader();
fontLoader2.load("/fonts/Varela_Round_Regular.json", (font) => {
  const textGeometryH3 = new TextGeometry("Works", {
    font: font,
    size: 3,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: letterThickness,
    bevelSize: 0.3,
    bevelOffset: 0,
    bevelSegments: 4,
  });



  const textMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture1,
  });

  const textH1 = new THREE.Mesh(textGeometryH3, textMaterial);
  textH1.position.y = -75;
  textH1.position.x = positionX;
  textGroup3.add(textH1);


});

const thikaTexture = new THREE.TextureLoader().load("/assets/thikaCube.png");
var cgeometry = new THREE.BoxGeometry(15, 15, 0.8);
var material = new THREE.MeshBasicMaterial({ map: thikaTexture });
var cube = new THREE.Mesh(cgeometry, material);
textGroup2.add(cube);

cube.position.y = -47;


fontLoader2.load("/fonts/Varela_Round_Regular.json", (font) => {
  const textGeometryH3 = new TextGeometry("contact", {
    font: font,
    size: 2.5,
    height: 0.4,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: letterThickness,
    bevelSize: 0.3,
    bevelOffset: 0,
    bevelSegments: 4,
  });



  const textMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture1,
  });

  const textH1 = new THREE.Mesh(textGeometryH3, textMaterial);
  textH1.position.y = -150;
  textH1.position.x = positionX;
  // const rotationAngle = Math.PI / -6;
  // textH1.rotation.y = rotationAngle;
  textGroup3.add(textH1);


});

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

  // camera.position.z += scrollDistance * -0.005;
  camera.position.y -= scrollDistance * 0.05;

  totalScrollDistance = currentScrollY;
}

window.addEventListener('scroll', onScroll);

document.body.onscroll = moveCamera;
moveCamera();




///

// 
const xhr = new XMLHttpRequest();

function openPopup(objectName) {
  const modal = document.querySelector("#modal");
  const modalContent = document.querySelector("#modal-content");

  // Make an AJAX request to fetch the specific object's content
  xhr.open("GET", "/" + objectName.toLowerCase() + ".html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = xhr.responseText;

      // Set modal content
      modalContent.innerHTML = response;

      // Add modal-open class to body when modal is shown
      document.body.classList.add('modal-open');

      // Show modal
      modal.showModal();
    }
  };
  xhr.send();
}

// Add an event listener to close the modal and remove modal-open class
modal.addEventListener('close', function () {
  // Remove modal-open class from body when modal is closed
  document.body.classList.remove('modal-open');
});


function loadObject(path, position, scale, clickHandler) {
  loader.load(
    path,
    function (loadedObject) {
      let object = loadedObject.scene;
      object.scale.set(scale.x, scale.y, scale.z);
      object.position.set(position.x, position.y, position.z);

      scene.add(object);

      // Register the object for raycasting
      interactionManager.add(object);

      // Update the interaction manager
      interactionManager.update();

      // Add a click event listener
      document.addEventListener('click', function (event) {
        handleObjectClick(object, clickHandler, event);
      });
    },
    function (xhr) {
      // console.log((xhr.loaded / xhr.total) * 100 + "% loaded link");
    },
    function (error) {
      // console.log("An error happened");
    }
  );
}

// Load LinkedIn object
loadObject(
  'linkedIn/link33.glb',
  { x: -40, y: positionYContact, z: 0 },
  { x: 1.5, y: 1.5, z: 0.75 },
  openLinkedIn
);

// Load Instagram object
loadObject(
  'instagram/insta2.glb',
  { x: -22, y: positionYContact, z: 0 },
  { x: 1.5, y: 1.5, z: 0.75 },
  openInstagram
);

// Load WhatsApp object
loadObject(
  'whats/whatsapp.glb',
  { x: -17, y: -152, z: 0 },
  { x: 1.5, y: 1.5, z: 1 },
  openPhoneNumber
);

// Function to handle click events for objects
function handleObjectClick(object, action, event) {
  // Update the raycaster with the current mouse position
  let mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Check for intersections
  raycaster.setFromCamera(mouse, camera); // Assuming 'camera' is your Three.js camera
  let intersects = raycaster.intersectObjects([object]);

  // If there is an intersection, perform the specified action
  if (intersects.length > 0) {
    action();
  }
}

// Function to open LinkedIn.com
function openLinkedIn() {
  window.open('https://www.linkedin.com', '_blank');
}

// Function to open Instagram.com
function openInstagram() {
  window.open('https://www.instagram.com/thika_rudolph?igsh=NmV2c2pqdHI4Ym53', '_blank');
}

// Function to open the callable telephone link
function openPhoneNumber() {
  // Replace '0613021018' with your actual phone number
  window.open('https://wa.me/31613021018?text=Hi%20there!%20Feel%20free%20to%20message%20me%20any%20time%20if%20you%20have%20any%20questions!', '_blank');
}



const clock = new THREE.Clock();

let currentIntersect = null


const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  raycaster.setFromCamera(mouse, camera);

  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)


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

  // cube.position.y = Math.sin(elapsedTime) * 2 + -47;
  const floatingAmplitude = 1;
  cube.position.y = Math.sin(elapsedTime * 0.5) * floatingAmplitude - 47;



}
tick();
