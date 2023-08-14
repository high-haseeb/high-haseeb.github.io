import { RigidBody } from "@react-three/rapier";
import React from "react";

export const Floor = () => {
  return (
    <RigidBody
      name="fucking floor"
      type="fixed"
      position={[0, -5, 0]}
      friction={0}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <mesh>
        <boxGeometry args={[50, 50, 0.1]} />
        <meshToonMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
};
export const Lighting = () => {
  return (
    <>
      <directionalLight
        color="white"
        intensity={0.8}
        position={[0, 5, 0]}
        castShadow
      />
      <ambientLight color="white" intensity={0.4} />
    </>
  );
};
