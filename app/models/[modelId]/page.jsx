"use client";
import React from "react";
import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/fluid/Experience"), {
  ssr: false,
  loading: () => <p>loading....</p>,
});

const ModelVeiwer = ({ params }) => {
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden p-0 m-0">
      <Scene modelId={params.modelId}/>
    </div>
  );
};

export default ModelVeiwer;
