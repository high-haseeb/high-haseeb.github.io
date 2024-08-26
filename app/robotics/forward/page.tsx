"use client";
import { Center, Environment, GizmoHelper, GizmoViewcube, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import useRobotStore from "@/components/robotics/sotre";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";

const Page = () => {
  const { position } = useRobotStore();
  return (
    <div className="w-screen h-screen bg-lime-200">
      <div className="absolute top-10 left-10 text-4xl">Forward Kinematics</div>
      <div className="absolute bottom-20 right-10 text-4xl z-50">
        position:
        <div className="flex flex-col">
          <div>X: {position[0]}</div>
          <div>Y: {position[1]}</div>
          <div>Z: {position[2]}</div>
        </div>
      </div>
      <Canvas className="w-full h-full">
        <Environment preset="city" />
        <OrbitControls />
        <GizmoHelper alignment="bottom-left">
          <GizmoViewcube />
        </GizmoHelper>
        <Center>
          <Robot />
        </Center>
      </Canvas>
    </div>
  );
};
const Robot = () => {
  const { anglea, angleb, anglec } = useControls({
    anglea: { value: 0, min: 0, max: Math.PI },
    angleb: { value: 0, min: 0, max: Math.PI },
    anglec: { value: 0, min: 0, max: Math.PI },
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, anglea, 0]}>
      <Solid rotation={[0, 0, 0]} color="orange"></Solid>
      <Link start={new THREE.Vector3(0, 0, 0)} end={new THREE.Vector3(0, 1, 0)} />
      <group position={[0, 1, 0]} rotation={[0, 0, angleb]}>
        <Solid rotation={[Math.PI / 2, 0, 0]} color="lime"></Solid>

        <Link start={new THREE.Vector3(0, 0, 0.7)} end={new THREE.Vector3(0, 2, 0.7)} />
        <group position={[0, 2, 0]} rotation={[0, 0, anglec]}>
          <Solid rotation={[Math.PI / 2, 0, 0]} color="brown"></Solid>
          <Link start={new THREE.Vector3(0, 0, 0)} end={new THREE.Vector3(-1, 2, 0)} log />
        </group>
      </group>
    </group>
  );
};
const Link = ({ start, end, log = false }: { start: THREE.Vector3; end: THREE.Vector3; log?: boolean }) => {
  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (ref.current) {
      const length = start.distanceTo(end);
      ref.current.scale.set(1, length, 1);

      const middle = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      ref.current.position.set(middle.x, middle.y, middle.z);

      const direction = new THREE.Vector3().subVectors(end, start).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const axis = new THREE.Vector3().crossVectors(up, direction).normalize();
      const angle = Math.acos(up.dot(direction));

      ref.current.setRotationFromAxisAngle(axis, angle);
    }
  }, [start, end]);

  if (log) {
    const target = new THREE.Vector3();
    const { setPosition } = useRobotStore();
    useFrame(() => {
      if (ref.current) {
        ref.current.getWorldPosition(target);
        setPosition([target.x.toFixed(2), target.y.toFixed(2), target.z.toFixed(2)]);
      }
    });
  }

  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[0.3, 0.3, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};
const Solid = ({ rotation, color = "lime" }: { rotation: [number, number, number]; color: string }) => {
  const ref = useRef<Mesh>(null);
  return (
    <mesh ref={ref} rotation={rotation}>
      <cylinderGeometry args={[0.5, 0.5, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
export default Page;
