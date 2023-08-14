import { useEffect, useRef } from "react";
import { useHelper, OrthographicCamera } from "@react-three/drei";
import * as THREE from 'three'

export default function IsometricCamera({ mainCamera }) {
  const cameraRef = useRef(null);
  const { current: camera } = cameraRef;

  useEffect(() => {
    console.log("isometric camera mounted");
    camera.position.set(20, 20, 20);
    camera.rotation.order = "YXZ";
    camera.rotation.y = -Math.PI / 4;
    camera.rotation.x = Math.atan(-1 / Math.sqrt(2));
  }, []);

  useHelper(cameraRef, THREE.CameraHelper, "red");
  const aspect = window.innerWidth / window.innerHeight;
  const d = 20;

  return (
    <OrthographicCamera
      makeDefault={mainCamera ? true : false}
      args={[-d * aspect, d * aspect, d, -d, 1, 1000]}
      ref={cameraRef}
    />
  );
}
