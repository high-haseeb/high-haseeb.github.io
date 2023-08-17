import * as THREE from 'three'

export const VectorRepresentation = ({ vector }) => {
  const origin = new THREE.Vector3(0, 0, 0);
  const direction = vector.clone().normalize();
  const length = 10;

  return (
    <group>
      <arrowHelper args={[direction, origin, length, 0xff0000]} />
    </group>
  );
};
