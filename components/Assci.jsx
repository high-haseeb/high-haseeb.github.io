import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assci.gltf')
  const { actions } = useAnimations(animations, group)
  useFrame(() => {
    if (group.current){
      group.current.rotation.y += 0.01
    }
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0, 1.234, 0]}>
          <mesh name="Curve" geometry={nodes.Curve.geometry} material={materials['Beu Metal']} position={[-0.092, 0.043, 0.013]} rotation={[-0.924, -0.503, -2.191]} scale={0.844} />
          <mesh name="Curve001" geometry={nodes.Curve001.geometry} material={materials['Beu Metal']} position={[-0.092, 0.043, 0.013]} rotation={[-0.924, -0.503, -2.191]} scale={0.844} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assci.gltf')
