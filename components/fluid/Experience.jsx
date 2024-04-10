"use client";
import ASCIIEffect from "@/utils/asciiShader";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Center, Environment } from "@react-three/drei";
import { Model } from "./Assci";

export default function Scene() {
  const asciiEffect = React.useMemo(() => new ASCIIEffect(), []);
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <Center>
          <Model />
        </Center>
        <ambientLight/>
        <Environment preset="city" />
        <EffectComposer>
          {/* <primitive object={asciiEffect} /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
}
