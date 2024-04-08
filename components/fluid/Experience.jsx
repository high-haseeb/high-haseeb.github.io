import ASCIIEffect from "@/utils/asciiShader";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Center, Environment } from "@react-three/drei";
import { Model } from "./Assci";
import * as THREE from 'three'

export default function Scene() {
  const asciiEffect = React.useMemo(() => new ASCIIEffect(), []);
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <Center>
          <Model />
        </Center>
        <EffectComposer>
          <primitive object={asciiEffect} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
const MouseLight = () => {
  const ref = useRef();
  useFrame(({ pointer }) => {
    ref.current.position.x = pointer.x;
    ref.current.position.y = pointer.y;
  });
  return (
    <group ref={ref}>
      <pointLight
        color={"purple"}
        position={[0, 0, 1]}
        intensity={1}
      />
      <pointLight
        color={"purple"}
        position={[0, 0, -1]}
        intensity={1}
      />
    </group>
  );
};
