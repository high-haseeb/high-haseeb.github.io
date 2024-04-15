/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./../../public/models/3.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Curve001.geometry} material={materials.SVGMat} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Curve002.geometry} material={materials.SVGMat} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/3.glb')
