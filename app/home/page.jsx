"use client";
import { Model } from "@/components/skull";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Home() {
  return (
    <div className="h-screen w-screen bg-gray-400">
      <Canvas camera={{ position: [0, 0, -20] }}>
        <Suspense fallback={null}>
          <OrbitControls />
          <Environment preset="park" />
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;
