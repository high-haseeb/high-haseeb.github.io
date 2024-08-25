import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Books(props) {
  const { nodes, materials } = useGLTF('/models/Books.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Books" position={[-0.004, 0.207, -0.003]} scale={0.935}>
        <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials.m_Books} />
        <mesh name="Cube031_1" geometry={nodes.Cube031_1.geometry} material={materials.m_Outline} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Books.glb')
