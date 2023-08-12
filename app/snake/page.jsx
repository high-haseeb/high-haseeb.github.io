"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FirstPersonControls, PointerLockControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  Html,
  useKeyboardControls,
  KeyboardControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { RigidBody, Physics } from "@react-three/rapier";
import * as THREE from "three";

export default function Page() {
  const map = useMemo(() => {
    return [
      { name: "forward", keys: ["KeyW"] },
      { name: "backward", keys: ["KeyS"] },
      { name: "leftward", keys: ["KeyA"] },
      { name: "rightward", keys: ["KeyD"] },
      { name: "jump", keys: ["Space"] },
    ];
  }, []);
  return (
    <div className="w-screen h-screen bg-gray-500">
      <Canvas camera={{ position: [0, 0, 50] }}>
        <KeyboardControls map={map}>
          <Physics gravity={[0, -60, 0]}>
            <OrbitControls />
            {/* <PointerLockControls /> */}
            <Lighting />
            <Ball />
            <mesh >
              <sphereGeometry args={[5, 16, 16]} position={[0, 10, 0]}/>
              <meshToonMaterial color='green'/>
            </mesh>
            <Floor />
          </Physics>
        </KeyboardControls>
      </Canvas>
    </div>
  );
}

const Ball = () => {
  const [color, toggleColor] = useState(true);
  const initialPos = [0, 10, 0];
  const [pos, setPosition] = useState(initialPos);
  const [sub, getKeys] = useKeyboardControls();
  const [onFloor, setOnFloor] = useState(true);
  const ballRef = useRef();
  const impulseStrength = 400;
  const impulse = new THREE.Vector3(0, 0, 0);
  const torque = new THREE.Vector3(0, 0, 0);


  var ballPos = new THREE.Vector3(0, 0, 0);
  useFrame((state) => {

    ballPos = ballRef.current.translation()
    state.camera.position.set(ballPos.x, ballPos.y, ballPos.z + 50)


    const { forward, backward, leftward, rightward, jump } = getKeys();
    impulse.x = impulse.y = impulse.z = 0;
    torque.x = torque.y = torque.z = 0;

    if (forward) {
      impulse.z = -1;
      torque.x = -1;
    }
    if (backward) {
      impulse.z = 1;
      torque.x = 1;
    }
    if (rightward) {
      impulse.x = 1;
      torque.z = -1;
    }
    if (leftward) {
      impulse.x = -1;
      torque.z = 1;
    }
    if (jump && onFloor) {
      impulse.y = 1;
      ballRef.current.applyImpulse(
        impulse.setLength(impulseStrength * 20),
        true,
      );
      setOnFloor(false);
    }
    push();
  });
  const push = () => {
    if (ballRef.current) {
      impulse.normalize().setLength(impulseStrength);
      torque.normalize().setLength(impulseStrength);
      ballRef.current.applyImpulse(impulse, true);
      ballRef.current.applyTorqueImpulse(torque, true);
    }
  };
  const handleCollision = ({ manifold, target, other }) => {
    setOnFloor(true);
    if (other.rigidBodyObject) {
      console.log(
        target.rigidBodyObject.name,
        "collided with",
        other.rigidBodyObject.name,
      );
    }
  };

  return (
    <>
      <Html>
        <div className="">
          <button
            onClick={() => {
              ballRef.current.setTranslation({ x: 0, y: 10, z: 0 }, true);
            }}
            className="bg-teal-500 "
          >
            reset
          </button>
        </div>
      </Html>

      <RigidBody
        name="gota"
        colliders="cuboid"
        position={pos}
        ref={ballRef}
        onCollisionEnter={handleCollision}
      >
        <mesh onClick={push}>
          <boxGeometry args={[10, 5, 5]} />
          <meshToonMaterial color={color ? "lime" : "hotpink"} />
        </mesh>
      </RigidBody>

    </>
  );
};
const Floor = () => {
  return (
    <RigidBody
      name="fucking floor"
      type="fixed"
      position-y={-0.1}
      friction={0}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <mesh>
        <boxGeometry args={[1000, 1000, 0.1]} />
        <meshToonMaterial color="gold" />
      </mesh>
    </RigidBody>
  );
};
const Lighting = () => {
  const dirLight = useRef(null);
  // useHelper(dirLight, DirectionalLightHelper, 1, 'red');
  return (
    <>
      <directionalLight
        color="white"
        intensity={0.8}
        ref={dirLight}
        position={[0, 5, 0]}
        castShadow
      />
      <ambientLight color="white" intensity={0.4} />
    </>
  );
};
