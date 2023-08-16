import { useKeyboardControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as Extras from "./Extras";
import IsometricCamera from "./IsometricCamera";
import { useFrame, useThree } from "@react-three/fiber";
import { Player } from "@/components/game/player";

function MainView({ viewRef }) {
  const playerRef = useRef(null);
  const [_, getKeys] = useKeyboardControls();
  useFrame(() => {
    const { forward, backward, leftward, rightward, jump, reset } = getKeys();
    if (leftward) playerRef.current.moveLeftward();
    if (rightward) playerRef.current.moveRightward();
    if (forward) playerRef.current.moveForward();
    if (backward) playerRef.current.moveBackward();
    // if (jump) playerRef.current.moveForward();

    if (reset) {
      playerRef.current.reset();
    }
  });
  return (
    <>
      <axesHelper args={[10]}/>
      <IsometricCamera mainCamera={true} />
      <Player ref={playerRef} />
      <Extras.Floor floorSize={100} />
      <Extras.Lighting />
    </>
  );
}

export default MainView;
