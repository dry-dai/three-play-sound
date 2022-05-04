//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor("#3EC9CD");
document.getElementById("3js").appendChild(renderer.domElement);
// document.body.appendChild(renderer.domElement);

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 200;
// camera.position.y = 50;

//light
const pointLight1 = new THREE.PointLight(0xffffff, 0.9); //blue
pointLight1.position.set(0, -100, 20);

const pointLight2 = new THREE.PointLight(0xffffff, 0.9); //purple
pointLight2.position.set(0, 300, -120);

// pointLight1.castShadow = true;
const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2); //sky,ground,Lightness
scene.add(pointLight1, pointLight2, hemiLight);

//mouse control
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// -------------------Sphere Function-----------------------------------------
const whiteColor = new THREE.Color(0xffffff);
const pinkColor = new THREE.Color(0xf08eff);
const blackColor = new THREE.Color(0x1e1e1e);
const darkpinkColor = new THREE.Color(0xe74aff);

function createSphere(
  rotationFactor_x,
  rotationFactor_y,
  rotationFactor_z,
  position,
  color,
  hoverColor,
  soundURL,
  index
) {
  const sphere_geometry = new THREE.SphereGeometry(6, 32, 16);
  const sphere_material = new THREE.MeshPhysicalMaterial({
    clearcoat: 1.0,
    metalness: 0.7,
    // roughness: 1.0,
    color: color,

    // clearcoat: 1.0,
    // clearcoatRoughness: 0.1,
    // metalness: 0.9,
    // roughness: 0.5,
    // color: color,
  });
  const sphere = new THREE.Mesh(sphere_geometry, sphere_material);

  sphere.name = "sphere" + index;
  sphere.scale.y = 0.63;
  sphere.rotation.x = rotationFactor_x;
  sphere.rotation.y = rotationFactor_y;
  sphere.rotation.z = rotationFactor_z;
  sphere.position.set(position.x, position.y, position.z);
  scene.add(sphere);

  const domEvent = new THREEx.DomEvents(camera, renderer.domElement);
  domEvent.addEventListener(sphere, "mouseover", (event) => {
    sphere.scale.set(1.2, 0.6, 1.2);
    sphere.material.color = hoverColor;
  });

  domEvent.addEventListener(sphere, "mouseout", (event) => {
    sphere.scale.set(1, 0.5, 1);
    sphere.material.color = color;
  });

  //Add Audio
  const listener1 = new THREE.AudioListener();
  camera.add(listener1);
  // create a global audio source
  const sound1 = new THREE.Audio(listener1);
  // load a sound and set it as the Audio object's buffer
  const audioLoader1 = new THREE.AudioLoader();
  audioLoader1.load(soundURL, function (buffer) {
    sound1.setBuffer(buffer);
    // sound.setLoop( true );
    sound1.setVolume(0.5);
    const domEvent = new THREEx.DomEvents(camera, renderer.domElement);
    domEvent.addEventListener(sphere, "click", (event) => {
      sound1.play();
      console.log("sphere" + index);
    });
  });
}

createSphere(
  1.2, //xRotation
  0, //yRotation
  0,
  { x: -12, y: -39, z: 1.6 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/33.mp3", //soundURL
  1 //index
);

createSphere(
  1,
  0,
  0,
  { x: -54, y: 13, z: 0.35 },
  whiteColor,
  pinkColor,
  "./assets/31.mp3",
  2
);

createSphere(
  0.3, //xRotation
  0, //yRotation
  0.6,
  { x: 24, y: -32, z: 2 }, //position Object
  blackColor, //defaultColor
  darkpinkColor, //hoverColor
  "./assets/23.mp3", //soundURL
  3 //index
);

createSphere(
  0.8, //xRotation
  0, //yRotation
  0,
  { x: 6.8, y: 55, z: 0 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/28.mp3", //soundURL
  4 //index
);

createSphere(
  1.4, //xRotation
  0, //yRotation
  0,
  { x: -35, y: 48, z: 3 }, //position Object
  blackColor, //defaultColor
  darkpinkColor, //hoverColor
  "./assets/21.mp3", //soundURL
  5 //index
);

createSphere(
  0.6, //xRotation
  0, //yRotation
  0.4, //zRotation
  { x: -25, y: 55, z: 1.6 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/29.mp3", //soundURL
  6 //index
);

createSphere(
  1.3, //xRotation
  0, //yRotation
  0, //zRotation
  { x: -50, y: 26, z: -0.6 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/30.mp3", //soundURL
  7 //index
);

createSphere(
  1.3, //xRotation
  0, //yRotation
  0, //zRotation
  { x: -38, y: -25, z: 1 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/32.mp3", //soundURL
  8 //index
);

createSphere(
  1.3, //xRotation
  0, //yRotation
  0, //zRotation
  { x: -34, y: -36, z: 0 }, //position Object
  blackColor, //defaultColor
  darkpinkColor, //hoverColor
  "./assets/22.mp3", //soundURL
  9 //index
);

createSphere(
  1.3, //xRotation
  0, //yRotation
  0, //zRotation
  { x: 9, y: -46, z: 1.2 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/34.mp3", //soundURL
  10 //index
);

createSphere(
  1.8, //xRotation
  0, //yRotation
  0, //zRotations
  { x: 44, y: -18, z: 0 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/35.mp3", //soundURL
  11 //index
);

createSphere(
  0.6, //xRotation
  0, //yRotation
  1.4, //zRotations
  { x: 56, y: -1, z: 0 }, //position Object
  blackColor, //defaultColor
  darkpinkColor, //hoverColor
  "./assets/24.mp3", //soundURL
  12 //index
);

createSphere(
  0.6, //xRotation
  0, //yRotation
  1.6, //zRotations
  { x: 46, y: 10, z: 0.5 }, //position Object
  whiteColor, //defaultColor
  pinkColor, //hoverColor
  "./assets/36.mp3", //soundURL
  13 //index
);

//-----------------------------Hoop---------------------------------------------------
let mat = new THREE.MeshPhysicalMaterial({
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  metalness: 0.9,
  roughness: 1.0,
  color: 0x222222,
});
const loaderFBX = new THREE.FBXLoader();
loaderFBX.load("assets/hoop.fbx", function (object) {
  model = object.children[0];
  // model.position.set(0, 0, 0);
  model.scale.setScalar(1);
  model.material = mat;
  scene.add(model);
});
//load earring
// const mat = new THREE.MeshPhongMaterial({
//   color: 0x666666,
//   emissive: 0xff0000,
// });
// const fbxLoader = new THREE.FBXLoader();
// fbxLoader.load(
//   "assets/hoop.fbx",
//   (object) => {
//     object.traverse(function (child) {
//       if (child instanceof THREE.MeshPhongMaterial) {
//         child.material.map = mat;
//         child.material.needsUpdate = true;
//         // if (child.material) {
//         //   child.material.transparent = false;
//         // }
//       }
//     });
//     // object.scale.set(0.01, 0.01, 0.01);
//     scene.add(object);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// const mtlLoader = new THREE.MTLLoader();
// mtlLoader.load("assets/hoop1.mtl", (materials) => {
//   materials.preload();
//   console.log(materials);
//   console.log("test");
//   const ring = new THREE.OBJLoader();
//   ring.setPath("./assets/");
//   ring.setMaterials(materials);
//   ring.load("hoop.obj", function (object) {
//     object.position.set(0, 0, 0);
//     scene.add(object);
//   });
// });

//Animate
let speed = 0.008;
let speed2 = 0.2;

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();
