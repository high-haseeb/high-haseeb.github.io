"use client";
import { Skyline } from "@/models/skyline";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { VectorRepresentation } from "@/helpers/vectorVisualizer";

// const STEER_STRENGTH = 40;
// steering should only change the direction of the movement vector
// or rotate it along the y axis

const MOVE_STRENGTH = 500;

export const Player = forwardRef((props, ref) => {
  const upVec = new THREE.Vector3(0, 0, 1);
  useImperativeHandle(ref, () => ({
    moveLeftward() {
      steer();
    },
    moveRightward() {
      steer();
    },
    moveForward() {
      vehicleRef.current.getWorldDirection(upVec);
      impulseDir.set(upVec.x, 0, upVec.z);
      move();
    },
    moveBackward() {
      vehicleRef.current.getWorldDirection(upVec);
      impulseDir.set(-upVec.x, 0, -upVec.z);
      move();
    },
    reset() {
      if (playerRef.current === undefined) return;
      playerRef.current.setLinvel(zeroVec, true);
      playerRef.current.setAngvel(zeroVec, true);
      playerRef.current.setTranslation(zeroVec, true);
    },
    log() {
      impulseDir.setZ(1);
      applyLocalImpulse();
    },
  }));

  const steer = () => {
    // impulseDir => original vector
    const angle = Math.PI / 40; // angle => 45 degrees
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationY(angle);
    // upVec.applyMatrix4(rotationMatrix)
    console.log(upVec)
  };

  const move = () => {
    console.log(impulseDir)
    playerRef.current.applyImpulse(
      impulseDir.multiplyScalar(MOVE_STRENGTH),
      true,
    );
    impulseDir.copy(zeroVec); // reset
  };

  const playerRef = useRef(null);
  const vehicleRef = useRef(null);
  const impulseDir = new THREE.Vector3(0, 0, 0);
  const frontPoint = new THREE.Vector3(0, 0, 2);
  const torqueDir = new THREE.Vector3(0, 0, 0);
  const zeroVec = new THREE.Vector3(0, 0, 0);
  const [onFloor, setOnFloor] = useState(true);
  const colliderRef = useRef();
  const [vehicleSize, setVehicleSize] = useState(new THREE.Vector3(0, 0, 0));

  const handleCollision = ({ other }) => {
    console.log(other.rigidBodyObject.name);
    setOnFloor(true);
  };

  return (
    <RigidBody
      name="player"
      restitution={0}
      friction={9}
      density={0.09}
      scale={3}
      ref={playerRef}
      onCollisionEnter={handleCollision}
      position={[0, 5, 0]}
      colliders={"cuboid"}
      debug
    >
      <axesHelper args={[15]} />
      <Skyline rotation={[0, Math.PI, 0]} innerRef={vehicleRef} />
    </RigidBody>
  );
});
