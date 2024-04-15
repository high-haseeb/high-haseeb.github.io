"use client";
import React, { useRef, useEffect } from "react";
import { Puddle } from "@/components/fluid/puddle";
import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/AssciExperience"), {
  ssr: false,
  loading: () => <p>loading....</p>,
});

const FluidSim = () => {
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden p-0 m-0">
      <Scene/>
    </div>
  );
};

export default FluidSim;
