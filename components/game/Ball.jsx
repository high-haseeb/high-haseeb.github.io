import React, { useEffect, useRef, useState } from "react";
import * as drei from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export const Ball = ({name}) => {
  const initialPos = new THREE.Vector3(0, 10, 0);
  const [_sub, getKeys] = drei.useKeyboardControls();
  const [onFloor, setOnFloor] = useState(true);
  const ballRef = useRef(null);

  const impulseStrength = 400;

  const impulse = new THREE.Vector3(0, 0, 0);
  const torque = new THREE.Vector3(0, 0, 0);

  // gets the key pressed and sets impulse and torque dir
  const userInput = () => {
    const keyboardInput = getKeys();
    switch (true) {
      case keyboardInput.forward:
        impulse.setZ(-1);
        torque.setX(-1);
        break;
      case keyboardInput.backward:
        impulse.setZ(1);
        torque.setX(1);
        break;
      case keyboardInput.leftward:
        impulse.setX(-1);
        torque.setZ(1);
        break;
      case keyboardInput.rightward:
        impulse.setX(1);
        torque.setZ(-1);
        break;
      case keyboardInput.reset:
        reset();
        break;
      case keyboardInput.jump && onFloor:
        impulse.y = 20;
        setOnFloor(false);
        break;

      default:
        break;
    }
  };

  const meshRef = useRef(null);
  const { camera } = useThree();
  const frustum = new THREE.Frustum();
  const matrix = new THREE.Matrix4().multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(matrix);
 

  var meshPosition = new THREE.Vector3();
  var rigidPosition = new THREE.Vector3();
  useFrame((state, _delta) => {
    rigidPosition = ballRef.current.translation()
    meshPosition.x = rigidPosition.x
    meshPosition.y = rigidPosition.y
    meshPosition.z = rigidPosition.z
    

    if (ballRef.current) {
      if (!frustum.containsPoint(meshPosition)) {
        console.log("Out of view");
      }
    }
    userInput();
    push();
  });

  const push = () => {
    // apply impulse and reset imulseDir vec

    ballRef.current.applyImpulse(impulse.multiplyScalar(impulseStrength), true);
    impulse.set(0, 0, 0);

    // apply torque and reset torqueDir vec
    ballRef.current.applyTorqueImpulse(
      torque.multiplyScalar(impulseStrength),
      true
    );
    torque.set(0, 0, 0);
  };

  const handleCollision = ({ _manifold, target, other }) => {
    setOnFloor(true);
    // if (other.rigidBodyObject) {
      // console.log(
        // target.rigidBodyObject.name,
        // "collided with",
        // other.rigidBodyObject.name
      // );
    // }
  };

  const reset = () => {
    ballRef.current.setTranslation(initialPos, true); // reset translation
    ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true); // reset linear velocity
    ballRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true); // reset linear velocity
  };
  return (
    <>
      <RigidBody
        name={name}
        colliders="cuboid"
        restitution={0.1}
        position={initialPos}
        onCollisionEnter={handleCollision}
        ref={ballRef}
      >
        <mesh onClick={push} castShadow={true} ref={meshRef}>
          <boxGeometry args={[10, 5, 5]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </RigidBody>
    </>
  );
};
