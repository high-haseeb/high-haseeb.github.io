import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Floor, Lighting } from "./Extras";
import IsometricCamera from "./IsometricCamera";
import { useThree } from "@react-three/fiber";

export default function CameraMonitor({ viewRef }) {
  const {camera} = useThree()
  useEffect(() => {
    camera.zoom = -10
  }, [])
  return (
    <View track={viewRef} index={1}>
      <OrbitControls />
      <IsometricCamera />
      <color attach="background" args={["brown"]} />
      <Floor />
      <Lighting />
    </View>
  );
}
