
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/skull.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tengkorakpolySurface5skull_bone_group1.geometry}
        // material={nodes.tengkorakpolySurface5skull_bone_group1.material}
      >
        <meshBasicMaterial/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.group1_tengkorakpolySurface5skull_bonepolySurface33.geometry
        }
        material={
          nodes.group1_tengkorakpolySurface5skull_bonepolySurface33.material
        }
        material-color={'gold'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.group1_tengkorakskull_bonepolySurface8polySurface32.geometry
        }
        material={
          nodes.group1_tengkorakskull_bonepolySurface8polySurface32.material
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1_tengkorakskull_bonepolySurface8.geometry}
        material={nodes.group1_tengkorakskull_bonepolySurface8.material}
      />
    </group>
  );
}

useGLTF.preload("/skull.gltf");

