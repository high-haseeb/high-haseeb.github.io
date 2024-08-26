"use client";
import { Center, Line, Environment, GizmoHelper, GizmoViewcube, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import useRobotStore from "@/components/robotics/sotre";
import React, { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { Vector3 } from "three";

const Page = () => {
  const { position, outOfReach, angles } = useRobotStore();
  return (
    <div className="w-screen h-screen bg-lime-200">
      <div className="absolute top-10 left-10 text-4xl">Inverse Kinematics</div>
      <div className="absolute bottom-20 right-10 text-4xl z-50">
        {outOfReach ? (
          <div className="text-red-400 text-5xl">Position Out of Reach</div>
        ) : (
          <div className="flex flex-col">
            position:
            <div>X: {position[0]}</div>
            <div>Y: {position[1]}</div>
            <div>Z: {position[2]}</div>
          </div>
        )}

        <div className="flex flex-col mt-4">
          angles:
          <div>theta 1: {angles[0]} rad</div>
          <div>theta 2: {angles[1]} rad</div>
          <div>theta 3: {angles[2]} rad</div>
        </div>
      </div>
      <Canvas className="w-full h-full">
        <Environment preset="city" />
        <OrbitControls />
          <GizmoHelper alignment="bottom-left">
          <GizmoViewcube/>
          </GizmoHelper>
          {/* <Path/> */}
        <Center>
          <Robot />
        </Center>
      </Canvas>
    </div>
  );
};
const Robot = () => {
  const { endEffectorX, endEffectorY, endEffectorZ } = useControls({
    endEffectorX: { value: 1, min: -5, max: 5 },
    endEffectorY: { value: 1, min: -5, max: 5 },
    endEffectorZ: { value: 0, min: -5, max: 5 },
  });

  const [computedAngles, setComputedAngles] = useState({ angle1: 0, angle2: 0, angle3: 0 });
  const { setAngles, setOutOfReach } = useRobotStore();

  useEffect(() => {
    const L1 = 1;
    const L2 = 1;
    const L3 = 1;

    const target = new Vector3(endEffectorX, endEffectorY, endEffectorZ);
    const x = target.y;
    const y = target.x;
    const z = target.z;

    const r = Math.sqrt(x * x + y * y);
    const d = Math.sqrt(r * r + z * z);
    if (d > L1 + L2 + L3 || d < Math.abs(L1 - L2 - L3)) {
      console.error("Target is out of reach");
      setOutOfReach(true);
      return;
    } else {
      setOutOfReach(false);
    }
    const theta1 = Math.atan2(y, x);
    const r2 = r - L1;
    const cosTheta3 = (r2 * r2 + z * z - L2 * L2 - L3 * L3) / (2 * L2 * L3);
    const theta3 = Math.atan2(Math.sqrt(1 - cosTheta3 * cosTheta3), cosTheta3);
    const k1 = L2 + L3 * Math.cos(theta3);
    const k2 = L3 * Math.sin(theta3);
    const theta2 = Math.atan2(z, r2) - Math.atan2(k2, k1);

    setAngles([theta1.toFixed(2), theta2.toFixed(2), theta3.toFixed(2)]);
    setComputedAngles({ angle1: theta1, angle2: theta2, angle3: theta3 });
  }, [endEffectorX, endEffectorY, endEffectorZ]);

  return (
    <group>
      <group position={[0, 0, 0]} rotation={[0, computedAngles.angle1, 0]}>
        <Solid rotation={[0, 0, 0]} color="orange" />
        <Link start={new Vector3(0, 0, 0)} end={new Vector3(0, 1, 0)} />
        <group position={[0, 1, 0]} rotation={[0, 0, computedAngles.angle2]}>
          <Solid rotation={[Math.PI / 2, 0, 0]} color="lime" />
          <Link start={new Vector3(0, 0, 0.7)} end={new Vector3(0, 2, 0.7)} />
          <group position={[0, 2, 0]} rotation={[0, 0, computedAngles.angle3]}>
            <Solid rotation={[Math.PI / 2, 0, 0]} color="brown" />
            <Link start={new Vector3(0, 0, 0)} end={new Vector3(-1, 2, 0)} log />
          </group>
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
    const { setPosition, addPathPoint } = useRobotStore();
    useFrame(() => {
      if (ref.current) {
        const target = end.clone().applyMatrix4(ref.current.matrixWorld);
        setPosition([target.x.toFixed(2), target.y.toFixed(2), target.z.toFixed(2)]);
        addPathPoint(target.clone());
      }
    });
  }

  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[0.2, 0.2, 1]} />
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

const Path = () => {
  const { pathPoints } = useRobotStore();

  return <Line points={pathPoints} color={"red"} />;
};

export default Page;

