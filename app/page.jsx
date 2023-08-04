"use client";
import Headline from "@/components/headline";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Headline/>
      <div className="h-screen w-full bg-blackC flex items-center justify-center">
        <h1 className="p-5 font-bold text-whiteC text-8xl text-center w-full">
          {" "}
          testing lazy git! does this thing actually work or is is just some farad
        </h1>
      </div>
    </div>
  );
}
