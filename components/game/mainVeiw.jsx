import { OrbitControls, View } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Ball } from "./Ball";
import * as Extras from "./Extras";
import IsometricCamera from "./IsometricCamera";
import { useBoxStore } from "@/components/store/boxStore";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function MainView({ viewRef }) {
  const balls = useBoxStore((state) => state.balls);
  const increaseBalls = useBoxStore((store) => store.addBall);
  const removeBall = useBoxStore((store) => store.removeBall);
  useEffect(() => {
    console.log(balls);
  }, [balls]);

  return (
    <>
      <Html>
        <button onClick={increaseBalls}>add ball</button>
      </Html>
      <IsometricCamera mainCamera={true} />
        <Ball name={'lora'} />
      <Extras.Floor floorSize={100} />
      <Extras.Lighting />
    </>
  );
}

export default MainView;
