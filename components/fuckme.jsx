import ASCIIEffect from "@/utils/asciiShader";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene() {
  const asciiEffect = React.useMemo(() => new ASCIIEffect(), []);
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 0, -30] }}>
        <OrbitControls />
        <Donut />
        <Environment preset="city" />
        <EffectComposer>
          <primitive object={asciiEffect} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
function Donut() {
  let torusRef = useRef();
  useFrame((state, delta) => {
    torusRef.current.rotation.y += delta;
  });
  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[10, 3, 16, 100]} position={[0, 0, 0]} />
      <meshPhysicalMaterial />
    </mesh>
  );
}
