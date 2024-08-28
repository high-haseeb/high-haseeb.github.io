import Scene from "@/components/three/Scene";
import Adjectives from "@/components/ui/common/Adjectives";
import Navbar from "@/components/ui/common/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative h-screen w-screen select-none overflow-y-scroll bg-brBlack text-brWhite">
      <Navbar />
      <div className="fixed z-10 p-16 w-1/2">
        <div className="pointer-events-auto z-10 mt-32 text-[15rem] font-bold leading-[0.85]">
          <Adjectives />
          <div className="font-black">HASEEB</div>
          <div className="text-4xl">taking tech to new highs!</div>
        </div>
      </div>

      <div className="w-screen h-screen"></div>

      <Footer />
    </main>
  );
}
