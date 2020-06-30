import * as THREE from 'three';

const triangleMaker = () => {
  const triangles = 100;

  const geometry = new THREE.BufferGeometry();

  const positions = new Float32Array(triangles * 3 * 3);
  const normals = new Float32Array(triangles * 3 * 3);
  const colors = new Float32Array(triangles * 3 * 3);

  const color = new THREE.Color();

  const n = 1000;
  const n2 = n / 2; // triangles spread in the cube
  const d = 120;
  const d2 = d / 2; // individual triangle size

  const pA = new THREE.Vector3();
  const pB = new THREE.Vector3();
  const pC = new THREE.Vector3();

  const cb = new THREE.Vector3();
  const ab = new THREE.Vector3();

  // assign points to each triangle
  for (let i = 0; i < positions.length; i += 9) {
    // positions

    // get random center point
    const x = Math.random() * n - n2;
    const y = Math.random() * n - n2;
    const z = Math.random() * n - n2;

    // get a, b, c points from center point
    const ax = x + Math.random() * d - d2;
    const ay = y + Math.random() * d - d2;
    const az = z + Math.random() * d - d2;

    const bx = x + Math.random() * d - d2;
    const by = y + Math.random() * d - d2;
    const bz = z + Math.random() * d - d2;

    const cx = x + Math.random() * d - d2;
    const cy = y + Math.random() * d - d2;
    const cz = z + Math.random() * d - d2;

    // assign random points to each triangle vertice a, b, c
    positions[i] = ax;
    positions[i + 1] = ay;
    positions[i + 2] = az;

    positions[i + 3] = bx;
    positions[i + 4] = by;
    positions[i + 5] = bz;

    positions[i + 6] = cx;
    positions[i + 7] = cy;
    positions[i + 8] = cz;

    // flat face normals

    pA.set(ax, ay, az);
    pB.set(bx, by, bz);
    pC.set(cx, cy, cz);

    cb.subVectors(pC, pB);
    ab.subVectors(pA, pB);
    cb.cross(ab);

    cb.normalize();

    const nx = cb.x;
    const ny = cb.y;
    const nz = cb.z;

    normals[i] = nx;
    normals[i + 1] = ny;
    normals[i + 2] = nz;

    normals[i + 3] = nx;
    normals[i + 4] = ny;
    normals[i + 5] = nz;

    normals[i + 6] = nx;
    normals[i + 7] = ny;
    normals[i + 8] = nz;

    // colors

    const vx = x / n + 0.7;
    const vy = y / n + 0.7;
    const vz = z / n + 0.7;

    color.setRGB(vx, vy, vz);

    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;

    colors[i + 3] = color.r;
    colors[i + 4] = color.g;
    colors[i + 5] = color.b;

    colors[i + 6] = color.r;
    colors[i + 7] = color.g;
    colors[i + 8] = color.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  geometry.computeBoundingSphere();

  const material = new THREE.MeshPhongMaterial({
    color: 0xaaaaaa,
    specular: 0xffffff,
    shininess: 250,
    side: THREE.DoubleSide,
    wireframe: false,
    vertexColors: true
  });

  const triangleCluster = new THREE.Mesh(geometry, material);
  return triangleCluster;
};

export default triangleMaker;
