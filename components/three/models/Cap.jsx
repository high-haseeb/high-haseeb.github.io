import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Cap = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/Cap.glb');
  
  return (
    <group {...props} dispose={null} ref={ref}>
      <group name="Capv2" position={[0, 0.164, -0.004]}>
        <mesh name="Sphere007" geometry={nodes.Sphere007.geometry} material={materials['m_Cap-v2']} />
        <mesh name="Sphere007_1" geometry={nodes.Sphere007_1.geometry} material={materials.m_Outline} />
      </group>
    </group>
  );
});

useGLTF.preload('/models/Cap.glb');

export default Cap;
