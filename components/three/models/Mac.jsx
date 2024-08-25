import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Mac = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/Mac128k.glb');

  return (
    <group {...props} dispose={null} ref={ref}>
      <group name="Mac128k" position={[0, 0.488, -0.025]} scale={1.213}>
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.m_Mac128k} />
        <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.m_Outline} />
      </group>
    </group>
  );
});

useGLTF.preload('/models/Mac128k.glb');

export default Mac;
