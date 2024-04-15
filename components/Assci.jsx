import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
const DEG2RAD = Math.PI / 180;

export function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/assci.glb");

  useFrame((_state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.01;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, -35 * DEG2RAD, 0]}
    >
      <mesh
        geometry={nodes.Logo.geometry}
        position={[-0.092, 1.277, 0.013]}
        rotation={[-0.924, -0.503, -2.191]}
      >
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/assci.glb");
