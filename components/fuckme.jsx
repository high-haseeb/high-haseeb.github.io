import ASCIIEffect from "@/utils/asciiShader";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  Center
} from "@react-three/drei";
import { Model } from "./Assci";

export default function Scene() {
  const asciiEffect = React.useMemo(() => new ASCIIEffect(), []);
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <Center>
          <Model />
        </Center>
        {/* <Environment preset="city" /> */}
        <ambientLight intensity={1.3}/>
        <MouseLight />
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
    ref.current.position.x = pointer.x
    ref.current.position.y = pointer.y
  });
  return (
    <pointLight ref={ref} color={"purple"} position={[0, 0, 1]} intensity={4} />
  );
};
