import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SmileyFace(props) {
  const { nodes, materials } = useGLTF('/models/SmileyFace.glb')
  return (
    <group {...props} dispose={null}>
      <group name="SmileyFace" position={[-0.042, 0.451, 0]}>
        <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials['m_Smiley-v2']} />
        <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials.m_Outline} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/SmileyFace.glb')
