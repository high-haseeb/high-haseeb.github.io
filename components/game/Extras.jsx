import { useHelper } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import * as THREE from 'three'
import { useBoxStore } from "@/components/store/boxStore";

export const Floor = ({ floorSize }) => {
  const removeBall = useBoxStore(state => state.removeBall)
  const destroyBall = (({_manifowld, target, other}) => {
    // removeBall(other.rigidBodyObject.name)
  })

  return (
    <RigidBody
      name="fucking floor"
      type="fixed"
      position={[0, -5 , 0]}
      friction={1}
      restitution={0}
      rotation={[Math.PI / 2, 0, 0]}
      onCollisionEnter={destroyBall}
    >
      <mesh receiveShadow={true}>
        <boxGeometry args={[floorSize, floorSize, 0.1]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>
    </RigidBody>
  );
};
export const Lighting = () => {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.SpotLightHelper, 'orange')
  return (
    <>
      <spotLight
        color="white"
        intensity={1}
        position={[0, 200, 0]}
        castShadow={true}
        ref={lightRef}
      />
      <ambientLight color="white" intensity={0.4}  />
    </>
  );
};
