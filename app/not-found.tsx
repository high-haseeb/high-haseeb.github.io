import Navbar from "@/components/ui/common/Navbar";
import Scene from "@/components/three/Scene";

export default function Home() {
  return (
    <main className="bg-brBlack text-brWhite h-screen w-screen p-16  select-none">
      <Navbar />

        <div className="absolute left-0 top-0 z-10 h-screen w-screen pointer-events-none">
          <Scene />
        </div>
        <div className="text-[15rem] font-bold leading-[0.85] mt-32">
        <div className="font-meditative text-9xl italic">404-</div>
          <div className="font-black">Not found</div>
          <div className="text-4xl">This page went a little too high and got lost in the clouds. ☁️</div>
        </div>
      </main>
  );
}
