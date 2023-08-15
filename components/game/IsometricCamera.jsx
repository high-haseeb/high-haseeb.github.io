import { useEffect, useRef, useCallback } from "react";
import { useHelper, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export default function IsometricCamera({ mainCamera }) {
  const { cameraRef } = useRef(null);
  const d = 100;
  useThree(({camera}) => {
    camera.position.set(d, d, d);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  })
  useHelper(cameraRef, THREE.CameraHelper, "red");
  const aspect = window.innerWidth / window.innerHeight;
  return (
    <OrthographicCamera
      makeDefault={mainCamera}
      zoom={5}
      top={d}
      bottom={-d}
      left={-d * aspect}
      right={d * aspect}
      near={1}
      far={2000}
      position={[0, 0, 200]}
      ref={cameraRef}
    />
  );
}
