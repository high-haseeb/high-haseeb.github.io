import ASCIIEffect from "@/utils/asciiShader";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Center, Environment, Sphere } from "@react-three/drei";
import { Model } from "./Assci";

export default function Scene() {
  const characters = [... "@MBHENR#KWXDFPQASUZbdehx*8Gm&04LOVYkpq5Tagns69owz$CIu23Jcfry%1v7l+it[] {}?j|()=~!-/<>\"^_';,:`. " ]
  characters.reverse()
  const asciiEffect = React.useMemo(() => new ASCIIEffect({characters}), []);
  return (
    <div className="w-screen h-screen bg-black">
      {/* <script src="./../components/fluid/WebGL-Fluid-Simulation/dat.gui.min.js"></script> */}
        <script src="./../components/fluid/WebGL-Fluid-Simulation/script.js"></script>
    </div>
  );
}
// {/* <Canvas> */}
// {/*   <Center> */}
// {/*     <Model /> */}
// {/*   </Center> */}
// {/*   {/* <Lighting /> */} */}
// {/*   {/* <ambientLight intensity={1}/> */} */}
// {/*   {/* <directionalLight  */} */}
// {/*   <Environment preset="city"/> */}
// {/*   {/* <PointerLight /> */} */}
// {/*   <EffectComposer> */}
// {/*     <primitive object={asciiEffect} /> */}
// {/*   </EffectComposer> */}
// {/* </Canvas> */}

const PointerLight = () => {
  const lightRef = useRef(null);
  useFrame(({ pointer }) => {
    if (!lightRef.current) return;
    lightRef.current.position.set(pointer.x * 2, pointer.y * 2, 1);
  });
  return <pointLight color={"white"} intensity={2} ref={lightRef} />;
};

const Lighting = () => {
  const light_one = useRef(null);
  const light_two = useRef(null);
  useFrame(({ clock }) => {
    if (!light_one || !light_two) return;
    let time = clock.getElapsedTime();
    light_one.current.position.x = Math.sin(time) * 4;
    light_two.current.position.x = Math.cos(time) * 4;

    light_one.current.position.y = Math.sin(time) * 4;
    light_two.current.position.y = Math.cos(time) * 4;

    light_one.current.position.z = Math.cos(time) * 4;
    light_two.current.position.z = Math.sin(time) * 4;
  });
  return (
    <>
      <spotLight color={"red"} intensity={5} ref={light_one} />
      <pointLight color={"yellow"} intensity={10} ref={light_two} />
      {/* <Sphere ref={light_one} /> */}
      {/* <Sphere ref={light_two} /> */}
    </>
  );
};
