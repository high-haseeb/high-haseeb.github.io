import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const DEG2RAD = Math.PI / 180;

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assci.gltf");
  const { actions } = useAnimations(animations, group);
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  useFrame((state) => {
    if (group.current) {

      group.current.rotation.y += 0.01;
      const minRotationX = -30 * DEG2RAD; // Define lower bound
      const maxRotationX =  30 * DEG2RAD; // Define upper bound


      group.current.rotation.x = clamp(
        group.current.rotation.x + state.pointer.y * 0.05,
        minRotationX,
        maxRotationX,
      );
    }
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, -35 * DEG2RAD, 0]}
    >
      <mesh
        name="Curve"
        geometry={nodes.Curve.geometry}
        // material={materials["Beu Metal"]}
        material={new THREE.MeshStandardMaterial()}
        position={[-0.092, 0.043, 0.013]}
        rotation={[-0.924, -0.503, -2.191]}
        scale={0.844}
      />
      <mesh
        name="Curve001"
        geometry={nodes.Curve001.geometry}
        material={new THREE.MeshStandardMaterial()}
        position={[-0.092, 0.043, 0.013]}
        rotation={[-0.924, -0.503, -2.191]}
        scale={0.844}
      />
    </group>
  );
}

useGLTF.preload("/assci.gltf");
