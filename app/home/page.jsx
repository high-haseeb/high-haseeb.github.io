"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
// import { ASCIIEffect } from "@/utils/asciiShader";
import { OrbitControls, Environment } from "@react-three/drei";
import dynamic from 'next/dynamic'

const ASCIIEffect = dynamic(
  () => import('@/utils/asciiShader'),
  { ssr: false }
)
export default function Scene() {
  const asciiEffect = React.useMemo(() => new ASCIIEffect(), []);
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 0, -30] }}>
        <OrbitControls />
        <Environment preset={"sunset"} />
        <Donut/>
        <EffectComposer>
          <primitive object={asciiEffect} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
function Donut() {
  const torusRef = useRef();
  useFrame((state, delta) => {
    torusRef.current.rotation.y += delta;
    torusRef.current.rotation.x += delta;
  })
  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[10, 3, 13, 100]} />
      <meshPhysicalMaterial />
    </mesh>
  )
}
