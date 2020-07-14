import * as THREE from 'three';
import triangleMaker from './triangles';
import generateButterfly from './butterflies';

const butterflyAnimation = () => {
  // create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // create camera
  const fov = 70;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.01;
  const far = 3500;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 1000);

  // create lights
  const ambient = new THREE.AmbientLight(0xe2c7ff);
  const light1 = new THREE.DirectionalLight(0xffe6f7, 0.5);
  light1.position.set(1, 1, 10);
  const light2 = new THREE.DirectionalLight(0xffe6f7, 1);
  light2.position.set(0, -1, 0);

  scene.add(ambient);
  // scene.add(light1);
  // scene.add(light2);

  // create renderer
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // const mesh = triangleMaker();
  // scene.add(mesh);

  const butterflyMeshes = new Array(10);
  for (let i = 0; i < butterflyMeshes.length; i += 1) {
    const position = Math.random() * (i + 1 - i) - i;
    butterflyMeshes[i] = generateButterfly(scene, position);
  }

  // create raycaster and mouse
  // const raycaster = new THREE.Raycaster();
  // const mouse = new THREE.Vector2();

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

  // const setMousePosition = e => {
  //   e.preventDefault();
  //   mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  //   mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  // };
  // document.addEventListener('mousemove', setMousePosition);

  // animate objects
  const animate = time => {
    time *= 0.001;
    // update raycaster intersects
    // raycaster.setFromCamera(mouse, camera);
    // const intersects = raycaster.intersectObject(mesh);
    // if (intersects.length > 0 && intersects.length < 40) {
    //   // TODO: disperse object
    // }
    butterflyMeshes.forEach((butterfly, i) => {
      const speed = 1 + i * 0.1;
      const rot = time * speed;
      butterfly.rotation.x = rot;
      butterfly.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

export default butterflyAnimation;
// TODO: orbit control;

// TODO: tweenmax
// TODO: shader
