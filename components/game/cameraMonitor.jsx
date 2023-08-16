import React, { useEffect } from "react";
import { OrbitControls, View} from "@react-three/drei";
import { Floor, Lighting } from "./Extras";
import IsometricCamera from "./IsometricCamera";
import { useThree } from "@react-three/fiber";

export default function CameraMonitor({ viewRef }) {

  const {camera} = useThree();
  camera.position.z = 80
  camera.position.y = 20
  return (
    <View track={viewRef} index={1}>
      <OrbitControls makeDefault/>
      <axesHelper args={[10]} />
      <IsometricCamera mainCamera={false} />
      <color attach="background" args={["brown"]} />
      <Floor />
      <Lighting />
    </View>
  );
}
