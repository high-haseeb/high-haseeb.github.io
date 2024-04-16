"use client";
import ASCIIEffect from "@/utils/asciiShader";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { PresentationControls } from "@react-three/drei";
import { useRouter } from "next/router";

export default function Scene({ modelId }) {
  const asciiEffect = React.useMemo(
    () =>
      new ASCIIEffect({
        characters: [
          ...`@MBHENR#KWXDFPQASUZbdehx*8Gm&04LOVYkpq5Tagns69owz$CIu23Jcfry%1v7l+it[] {}?j|()=~!-/<>"^_';,:\`. `,
        ].reverse(),
      }),
    [],
  );

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <Model modelId={modelId} />
        <ambientLight />
        <directionalLight position={[-4, 0, 0]} intensity={10} />
        <directionalLight position={[4, 0, 0]} intensity={10} />
        <directionalLight position={[0, 0, 4]} intensity={10} />
        {/* <OrbitControls enableZoom={false} /> */}
        {/* <Environment preset="studio" /> */}
        <ambientLight intensity={4} />
        <EffectComposer>
          <primitive object={asciiEffect} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

const Model = ({ modelId }) => {
  const [ModelComponent, setModelComponent] = useState(null);
  useEffect(() => {
    import(`@/components/models/${modelId}`)
      .then((module) => {
        console.log(module.default);
        setModelComponent(() => module.default);
      })
      .catch((e) => console.log("error loading model", e));
  }, [modelId]);
  const modelRef = useRef(null);
  useFrame(() => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y += 0.005;
  });
  return (
    <PresentationControls>
      <group ref={modelRef}>
        {ModelComponent && <ModelComponent scale={0.5} />}
      </group>
    </PresentationControls>
  );
};
