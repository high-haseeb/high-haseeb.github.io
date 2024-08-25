"use client";
import { Center, Environment, OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Mac from "@/components/three/models/Mac";
import { Books } from "@/components/three/models/Books";
import { SmileyFace } from "@/components/three/models/SmileyFace";
import { Phone } from "@/components/three/models/Phone";
import Cap from "@/components/three/models/Cap";
// import { MemoryCard } from "@/components/three/models/MemoryCard";
import { EffectComposer, Pixelation, Sepia } from "@react-three/postprocessing";
import useHoveredLinkStore from "../stores/NavbarStore";
import { animated, useSpring } from "@react-spring/three";

const Scene = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas className="pointer-events-none h-full w-full bg-transparent" style={{pointerEvents: "none"}}>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        zoom={100}
        left={-windowDimensions.width / 2}
        right={windowDimensions.width / 2}
        top={windowDimensions.height / 2}
        bottom={-windowDimensions.height / 2}
        near={0.1}
        far={1000}
      />
      <Environment preset="city" />
      <Model />
      <EffectComposer>
        <Pixelation granularity={2} />
        <Sepia />
      </EffectComposer>
    </Canvas>
  );
};

const Model = () => {
  const groupRef = useRef<any>();
  const hoveredLink = useHoveredLinkStore((state) => state.hoveredLink);
  const [lastHoveredLink, setLastHoveredLink] = useState(hoveredLink);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -((clientY / window.innerHeight) * 2 - 1);
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const targetScale = hoveredLink === undefined ? 0 : 1.0;
  const { scale } = useSpring({
    scale: [targetScale, targetScale, targetScale],
    config: { tension: 380, friction: 60 },
  });
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta;
      groupRef.current.position.x = (mousePosition.x * viewport.width) / 2;
      groupRef.current.position.y = (mousePosition.y * viewport.height) / 2; 
    }
  });
  useEffect(() => {
    if (hoveredLink !== undefined) {
      setLastHoveredLink(hoveredLink);
    }
  }, [hoveredLink]);

  const RenderModel = () => {
    switch (lastHoveredLink) {
      case "home":
        return <Mac />;
      case "projects":
        return <SmileyFace />;
      case "about me":
        return <Cap />;
      case "blog":
        return <Books />;
      case "contact":
        return <Phone />;
      default:
        return null;
    }
  };
  return (
    // @ts-ignore
    <animated.group ref={groupRef} scale={scale}>
      <Center>{RenderModel()}</Center>
    </animated.group>
  );
};

export default Scene;
