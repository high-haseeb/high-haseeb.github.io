import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Skyline({ innerRef }) {
  const { nodes, materials } = useGLTF("/N-Skyline.glb");
  return (
    <group dispose={null} ref={innerRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tires.geometry}
        material={materials.Tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Car.geometry}
        material={materials.Car}
      />
    </group>
  );
}

useGLTF.preload("/N-Skyline.glb");
