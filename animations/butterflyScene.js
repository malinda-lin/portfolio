import * as THREE from 'three';
import triangleMaker from './triangles';
import generateButterflies from './butterflies';

const butterflyAnimation = () => {
  // create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // create renderer
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // create camera
  const camera = new THREE.PerspectiveCamera(
    27,
    window.innerWidth / window.innerHeight,
    0.01,
    3500
  );
  camera.position.set(0, 0, 1000);

  // create lights
  scene.add(new THREE.AmbientLight(0xe2c7ff));

  const light1 = new THREE.DirectionalLight(0xffe6f7, 0.5);
  light1.position.set(1, 1, 10);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight(0xffe6f7, 1);
  light2.position.set(0, -1, 0);
  scene.add(light2);

  const mesh = triangleMaker();
  scene.add(mesh);

  const butterflyMesh = generateButterflies();

  scene.add(butterflyMesh);
  // create raycaster and mouse
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // set listeners
  const onWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // changing window size requires update to camera aspect
    camera.aspect = width / height;
    // updateProjectMatrix is called if camera props are changed
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };
  window.addEventListener('resize', onWindowResize, false);

  const setMousePosition = e => {
    e.preventDefault();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };
  document.addEventListener('mousemove', setMousePosition);


  // animate objects
  function animate() {
    window.requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    butterflyMesh.rotation.x = time * 0.25;
    butterflyMesh.rotation.y = time * 0.55;

    // update raycaster intersects
    // raycaster.setFromCamera(mouse, camera);
    // const intersects = raycaster.intersectObject(mesh);
    // if (intersects.length > 0 && intersects.length < 40) {
    //   // TODO: disperse object
    // }

    renderer.render(scene, camera);
  }
  animate();
};

export default butterflyAnimation;
