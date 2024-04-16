"use client"
import React from 'react'
import { useSearchParams  } from 'next/navigation'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import("@/components/fluid/Experience"), {
  ssr: false,
  loading: () => <p>loading....</p>,
});

const ModelVeiwer = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id')
  
  return (
    <div className="bg-[#181818] w-screen h-screen overflow-hidden p-0 m-0">
      <Scene modelId={id}/>
    </div>
  );
};

export default ModelVeiwer
