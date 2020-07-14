import * as THREE from 'three';

const testScene = () => {
  let container;
  let stats;

  let camera;
  let scene;
  let renderer;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.z = 2;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const ambient = new THREE.AmbientLight(0xe2c7ff);
    const light1 = new THREE.DirectionalLight(0xffe6f7, 0.5);
    light1.position.set(1, 1, 10);
    const light2 = new THREE.DirectionalLight(0xffe6f7, 1);
    light2.position.set(0, -1, 0);

    scene.add(ambient);
    scene.add(light1);
    scene.add(light2);
    // geometry

    const vector = new THREE.Vector4();

    const instances = 50000;

    const positions = [];
    const offsets = [];
    const colors = [];
    const orientationsStart = [];
    const orientationsEnd = [];

    positions.push(0.025, -0.025, 0);
    positions.push(-0.025, 0.025, 0);
    positions.push(0, 0, 0.025);

    // instanced attributes

    for (let i = 0; i < instances; i++) {
      // offsets

      offsets.push(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      );

      // colors

      colors.push(Math.random(), Math.random(), Math.random(), Math.random());

      // orientation start

      vector.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      );
      vector.normalize();

      orientationsStart.push(vector.x, vector.y, vector.z, vector.w);

      // orientation end

      vector.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      );
      vector.normalize();

      orientationsEnd.push(vector.x, vector.y, vector.z, vector.w);
    }

    const geometry = new THREE.InstancedBufferGeometry();
    geometry.instanceCount = instances; // set so its initalized for dat.GUI, will be set in first draw otherwise

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    geometry.setAttribute(
      'offset',
      new THREE.InstancedBufferAttribute(new Float32Array(offsets), 3)
    );
    geometry.setAttribute(
      'color',
      new THREE.InstancedBufferAttribute(new Float32Array(colors), 4)
    );
    geometry.setAttribute(
      'orientationStart',
      new THREE.InstancedBufferAttribute(new Float32Array(orientationsStart), 4)
    );
    geometry.setAttribute(
      'orientationEnd',
      new THREE.InstancedBufferAttribute(new Float32Array(orientationsEnd), 4)
    );

    // material

    const material = new THREE.MeshPhongMaterial({
      color: 0xaaaaaa,
      specular: 0xffffff,
      shininess: 250,
      side: THREE.DoubleSide,
      wireframe: false,
      vertexColors: true
    });

    //

    const mesh = new THREE.Mesh(geometry, material);
    console.log(mesh)
    scene.add(mesh);

    //

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  //

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    const time = Date.now();

    const object = scene.children[0];

    object.rotation.y = time * 0.0005;
    // object.material.uniforms.time.value = time * 0.005;
    // object.material.uniforms.sineTime.value = Math.sin(
    //   object.material.uniforms.time.value * 0.05
    // );

    renderer.render(scene, camera);
  }
};
export default testScene;
