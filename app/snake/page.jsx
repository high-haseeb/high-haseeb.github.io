"use client";
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Stats, OrbitControls} from "@react-three/drei";

import { Physics } from "@react-three/rapier";
import useRefs from "react-use-refs";

import CameraMonitor from "@/components/game/cameraMonitor";
import MainView from "@/components/game/mainVeiw";

export default function Page() {
  const map = useMemo(() => {
    return [
      { name: "forward", keys: ["KeyW"] },
      { name: "backward", keys: ["KeyS"] },
      { name: "leftward", keys: ["KeyA"] },
      { name: "rightward", keys: ["KeyD"] },
      { name: "jump", keys: ["Space"] },
      { name: "reset", keys: ["KeyR"] },
    ];
  }, []);
  const [container, view1, view2] = useRefs();
  return (
    <div className="w-screen h-screen bg-gray-500 relative" ref={container}>
      <div ref={view1} className="w-[50vw] h-screen absolute " />
      <div ref={view2} className="w-[50vw] h-screen ml-[50vw] absolute" />
      <Canvas eventSource={container} className="absolute w-screen h-screen">
        <Stats />
        <axesHelper args={[10]} />
        <KeyboardControls map={map}>
          <Physics gravity={[0, -60, 0]}>
            {/* <CameraMonitor viewRef={view1} /> */}
            <MainView viewRef={view2} />
          </Physics>
        </KeyboardControls>
      </Canvas>
    </div>
  );
}
