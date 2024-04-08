"use client"
import React, { useRef, useEffect } from 'react'
import { Puddle } from "@/components/fluid/puddle"
import { Canvas } from '@react-three/fiber';
import Scene from '@/components/AssciExperience';

const FluidSim = () => {
  const puddleEl = useRef();
  useEffect(() => {
    if (!puddleEl.current) return;
    let puddle = new Puddle(puddleEl.current);
    puddle.setNodeSize(24)
    puddle.setupGrid(); // To initialize the puddle
    puddle.setNodeStyle("ascii");  // nodeStyle one of ["water", "party", "ascii", "base"]  // Default "base"
puddle.setDampeningRatio(0.4); // Default 0.8  between 0 and 1
  },[])
      return (
      <div className='bg-[#181818] w-screen h-screen overflow-hidden p-0 m-0'>
      <Scene/>
      <div ref={puddleEl} className='w-screen h-screen absolute top-0 left-0 p-0 m-0' />
      </div>
      )
}

      export default FluidSim
