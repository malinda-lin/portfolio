import * as THREE from 'three';

const generateButterflyGeometry = () => {
  const n = 1000;
  const n2 = n / 4; // triangles spread in the cube

  const x = Math.random() * n - n2;
  const y = Math.random() * n - n2;
  console.log(x, y);
  // 431.92384102292135 283.6886675516288
  // 456.88764558238074 -241.5396065011557
  // 592.0000364933877 527.1370688285137
  const butterflyShape = new THREE.Shape();

  butterflyShape.moveTo(x, y + 3);
  // right side
  butterflyShape.bezierCurveTo(x + 6, y - 6, x + 45, y + 45, x + 64, y + 36);
  butterflyShape.bezierCurveTo(x + 75, y + 25, x + 53, y + 7, x + 33, y - 17);
  butterflyShape.bezierCurveTo(x + 33, y - 17, x + 50, y - 43, x + 41, y - 57);
  butterflyShape.bezierCurveTo(x + 32, y - 65, x + 4, y - 27, x, y - 47);
  // left side
  butterflyShape.bezierCurveTo(x - 4, y - 27, x - 32, y - 65, x - 41, y - 57);
  butterflyShape.bezierCurveTo(x - 50, y - 43, x - 33, y - 17, x - 33, y - 17);
  butterflyShape.bezierCurveTo(x - 53, y + 7, x - 75, y + 25, x - 64, y + 36);
  butterflyShape.bezierCurveTo(x - 45, y + 45, x - 6, y - 7, x, y + 3);

  return butterflyShape;
};

const geometry = new THREE.ShapeBufferGeometry(generateButterflyGeometry());
// const material
const wireMaterial = new THREE.LineBasicMaterial({color: 0xf4cccc, linewidth: 12});
const material = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: 0xffffff,
  shininess: 250,
  side: THREE.DoubleSide,
  wireframe: false,
  vertexColors: true
});

const generateButterfly = (scene, yPosition) => {
  const wireframe = new THREE.LineSegments(geometry, wireMaterial);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.add(wireframe);
  mesh.position.y = yPosition;
  scene.add(mesh);
  return mesh;
};

export default generateButterfly;
