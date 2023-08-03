"use client";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="h-screen w-full bg-blackC flex items-center justify-center">
        <h1 className="p-5 font-bold text-whiteC text-8xl text-center w-full">
          {" "}
          Hello next js
        </h1>
      </div>
    </div>
  );
}
