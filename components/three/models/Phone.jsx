import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Phone(props) {
  const { nodes, materials } = useGLTF('/models/Phone.glb')
  return (
    <group {...props} dispose={null}>
      <group name="PhoneBase" position={[0, 0.18, 0]} scale={0.9}>
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.m_Phone} />
        <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials.m_Outline} />
        <group name="Phone" position={[0, 0.232, -0.133]}>
          <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials.m_Phone} />
          <mesh name="Sphere002_1" geometry={nodes.Sphere002_1.geometry} material={materials.m_Outline} />
        </group>
        <group name="PhoneKeypad" position={[-0.095, 0.027, 0.394]} rotation={[-2.65, 0, 0]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.m_Phone} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.m_Outline} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Phone.glb')
