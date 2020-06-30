import * as THREE from 'three';

const generateButterflies = () => {
  const butterflies = 1;

  const x = 0;
  const y = 0;
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

  // const extrudeSettings = {
  //   amount: 8,
  //   bevelEnabled: true,
  //   bevelSegments: 2,
  //   steps: 2,
  //   bevelSize: 1,
  //   bevelThickness: 1
  // };
  // const geometry = new THREE.ExtrudeBufferGeometry(
  //   butterflyShape,
  //   extrudeSettings
  // );
  const geometry = new THREE.ShapeBufferGeometry(butterflyShape);
  const material = new THREE.MeshPhongMaterial({
    color: 0x000000,
    specular: 0xffffff,
    shininess: 250,
    side: THREE.DoubleSide,
    wireframe: false,
    vertexColors: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

export default generateButterflies;
