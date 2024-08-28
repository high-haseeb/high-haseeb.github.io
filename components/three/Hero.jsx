"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Detailed, Environment, Text, Loader } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  ToneMapping,
} from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

function Smiley({ index, z, speed, color }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useGLTF("/models/SmileyFace.glb");

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z,
      );
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin),
    );
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  return (
    <group
      name="SmileyFace"
      position={[-0.042, 0.451, 0]}
      ref={ref}
      scale={3.0}
    >
      <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry}>
        <meshPhysicalMaterial {...materials["m_Smiley-v2"]} color={color} />
      </mesh>
      <mesh
        name="Cylinder003_1"
        geometry={nodes.Cylinder003_1.geometry}
        material={materials.m_Outline}
      />
    </group>
  );
}

function Mac({ index, z, speed, color }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useGLTF("/models/Mac128k.glb");

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z,
      );
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin),
    );
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  return (
    <group name="Mac" position={[0, 0.488, -0.025]} ref={ref} scale={3.0}>
      <mesh name="Cube009" geometry={nodes.Cube009.geometry}>
        <meshPhysicalMaterial {...materials.m_Mac128k} color={color} />
      </mesh>
      <mesh
        name="Cube009_1"
        geometry={nodes.Cube009_1.geometry}
        material={materials.m_Outline}
      />
    </group>
  );
}
function Cap({ index, z, speed, color }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useGLTF("/models/CapV2.glb");

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z,
      );
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin),
    );
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  return (
    <group name="Cap" position={[0, 0.164, -0.004]} ref={ref} scale={3.0}>
      <mesh name="Sphere007" geometry={nodes.Sphere007.geometry}>
        <meshPhysicalMaterial {...materials["m_Cap-v2"]} color={color} />
      </mesh>
      <mesh
        name="Sphere007_1"
        geometry={nodes.Sphere007_1.geometry}
        material={materials.m_Outline}
      />
    </group>
  );
}
function Phone({ index, z, speed, color }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useGLTF("/models/Phone.glb");

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z,
      );
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin),
    );
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  return (
    <group name="PhoneBase" position={[0, 0.18, 0]} scale={4} ref={ref}>
      <mesh name="Cube007" geometry={nodes.Cube007.geometry}>
        <meshPhysicalMaterial {...materials.m_Phone} color={color} />
      </mesh>
      <mesh
        name="Cube007_1"
        geometry={nodes.Cube007_1.geometry}
        material={materials.m_Outline}
      />
      <group name="Phone" position={[0, 0.232, -0.133]}>
        <mesh name="Sphere002" geometry={nodes.Sphere002.geometry}>
          <meshPhysicalMaterial {...materials.m_Phone} color={color} />
        </mesh>
        <mesh
          name="Sphere002_1"
          geometry={nodes.Sphere002_1.geometry}
          material={materials.m_Outline}
        />
      </group>
      <group
        name="PhoneKeypad"
        position={[-0.095, 0.027, 0.394]}
        rotation={[-2.65, 0, 0]}
      >
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials.m_Phone}
        />
        <mesh
          name="Cube008_1"
          geometry={nodes.Cube008_1.geometry}
          material={materials.m_Outline}
        />
      </group>
    </group>
  );
}

export default function Bananas({
  speed = 1,
  count = 40,
  depth = 80,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {

const colors = [
  "#FF6F61", // Coral
  "#6B5B95", // Deep Purple
  "#88B04B", // Olive Green
  "#F7CAC9", // Vintage Pink
  "#92A8D1", // Pale Blue
  "#F4A460", // Sandy Brown
  "#C94C4C", // Redwood
  "#F3E5AB", // Pale Gold
  "#B565A7", // Orchid
  "#FFD662", // Mustard Yellow
];
  // const colors = ["#00aaff", "#aa00ff", "#ff00aa", "#ffaa00", "#aaff00"];
  const randColor = () =>
    colors[Math.floor(Math.random() * (colors.length - 1))];
  return (
    <><Loader/>
    <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }} className="h-full w-full" >
      <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />
      {Array.from({ length: count }, (_, i) => {
        const z = Math.round(easing(i / count) * depth);
        const props = { key: i, index: i, z, speed, color: randColor() };

        return i % 4 === 0 ? (
          <Phone {...props} />
        ) : i % 4 === 1 ? (
          <Cap {...props} />
        ) : i % 4 === 2 ? (
          <Mac {...props} />
        ) : (
          <Smiley {...props} />
        );
      })}
      <Environment preset="city" />
      <ResponsiveText/>
      <EffectComposer disableNormalPass multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
      </EffectComposer>
    </Canvas></>
  );
}

const ResponsiveText = () => {
  const { viewport } = useThree();
  const { width } = viewport;

  // Calculate a responsive font size or scale
  const fontSize = width / 7; // Adjust this factor to fine-tune the size

  return (
    <Text
      font="fonts/NimbusSans-Bold.ttf"
      position={[0, 0, 4]}
      scale={[fontSize, fontSize, fontSize]} // Apply responsive scale
    >
      HASEEB
    </Text>
  );
};
