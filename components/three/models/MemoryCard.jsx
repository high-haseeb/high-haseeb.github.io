import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MemoryCard(props) {
  const { nodes, materials } = useGLTF('/models/MemoryCard.glb')
  return (
    <group {...props} dispose={null}>
      <group name="MemoryCard" position={[-0.029, 0.415, 0]} scale={0.921}>
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.m_MemoryCard} />
        <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.m_Outline} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/MemoryCard.glb')
