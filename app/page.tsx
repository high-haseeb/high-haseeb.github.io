import Adjectives from "@/components/ui/common/Adjectives";
import Navbar from "@/components/ui/common/Navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen select-none bg-brBlack p-16 text-brWhite">
      <Navbar />
      <div className="text-[15rem] font-bold leading-[0.85] mt-32">
        <Adjectives />
        {/* <br /> */}
        <div className="font-black">HASEEB</div>
        {/* <br /> */}
        <div className="text-4xl">taking tech to new highs!</div>
      </div>
    </main>
  );
}
