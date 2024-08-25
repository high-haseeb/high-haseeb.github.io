import Scene from "@/components/three/Scene";
import Adjectives from "@/components/ui/common/Adjectives";
import Navbar from "@/components/ui/common/Navbar";

export default function Home() {
  return (
    <main className="relative h-screen w-screen select-none bg-brBlack p-16 text-brWhite">
      <Navbar />
      <div className="z-10 mt-32 text-[15rem] font-bold leading-[0.85] pointer-events-auto">
        <Adjectives />
        <div className="font-black">HASEEB</div>
        <div className="text-4xl">taking tech to new highs!</div>
      </div>
        <div className="absolute left-0 top-0 z-10 h-screen w-screen pointer-events-none">
          <Scene />
        </div>
    </main>
  );
}
