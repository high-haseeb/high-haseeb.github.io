import ASCIIEffect from "@/utils/asciiShader";
import React, { useRef, useState } from "react";
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
        <Environment preset="city" />
        {/* <directionalLight position={[1, 1, 1]} color={'blue'} /> */}
        {/* <pointLight position={[-1, 1, 1]} color={'green'} /> */}
        <PointerLight/>
        <EffectComposer>
          <primitive object={asciiEffect} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

const PointerLight = () => {
  const lightRef = useRef(null)
  useFrame(({pointer}) => {
    // if(!lightRef.current) return;
    // console.log(pointer)
    lightRef.current.position.set(pointer.x*2, pointer.y*2, 1);
    // lightRef.current.position.y = pointer.y;
  })

  return(
  <pointLight  color={'lightblue'} intensity={2}  ref={lightRef}/>
  )
}
