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

export const Player = forwardRef((props, ref) => {
  const upVec = new THREE.Vector3(0, 0, 1);
  useImperativeHandle(ref, () => ({
    moveLeftward() {
      torqueDir.setY(1)
      move();
    },
    moveRightward() {
      torqueDir.setY(-1);
      move();
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
  }));

  const jump = () => {
    // playerRef.current.applyImpulse({x:0, y:3000, z:0}, true);
    // setOnFloor(false);
  };
  const move = () => {
    playerRef.current.applyImpulse(
      impulseDir.multiplyScalar(impulseStrength),
      true
    );
    playerRef.current.applyTorqueImpulse(
      torqueDir.multiplyScalar(torqueStrength),
      true
    );
    impulseDir.copy(zeroVec);
    torqueDir.copy(zeroVec);
  };

  const playerRef = useRef(null);
  const vehicleRef = useRef(null);
  const impulseDir = new THREE.Vector3(0, 0, 0);
  const torqueDir = new THREE.Vector3(0, 0, 0);
  const torqueStrength = 100;
  const impulseStrength = 500;
  const zeroVec = new THREE.Vector3(0, 0, 0);
  const [onFloor, setOnFloor] = useState(true);
  const colliderRef = useRef();
  const [vehicleSize, setVehicleSize] = useState(new THREE.Vector3(0, 0, 0));

  const handleCollision = ({ other }) => {
    console.log(other.rigidBodyObject.name);
    setOnFloor(true);
  };
  useEffect(async () => {
  }, []);

  return (
    <RigidBody
      name="player"
      restitution={0}
      friction={1}
      density={0.05}
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
