"use client";
import React from "react";
import dynamic from "next/dynamic"
import {usePathname } from "next/navigation"

const Scene = dynamic(() => import("@/components/fluid/Experience"), {
  ssr: false,
  loading: () => <p>loading....</p>,
});

const ModelVeiwer = () => {
  const pathname = usePathname();
  console.log(pathname.at(pathname.length - 1))
  
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden p-0 m-0">
      <Scene modelId={pathname.at(pathname.length - 1)}/>
    </div>
  );
};

export default ModelVeiwer;
