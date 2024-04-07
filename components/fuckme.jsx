import ASCIIEffect from "@/utils/asciiShader";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Model } from "./Assci";

export default function Scene() {
  const asciiEffect = React.useMemo(() => new ASCIIEffect(), []);
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <OrbitControls />
        <Model />

        <Environment preset="forest" />
        <EffectComposer>
          <primitive object={asciiEffect} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
