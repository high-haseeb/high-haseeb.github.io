import Bananas from "@/components/three/Hero";
import Footer from "@/components/ui/Footer";
import MousePointer from "@/components/ui/MousePointer";

export default function Home() {
  return (
    <main className="relative h-[200vh] w-screen select-none font-boring">
      <MousePointer/>
      <div className="z-10 bg-brBlack fixed h-screen">
        <div className="w-screen h-screen"><Bananas count={100}/></div>
      </div>
        <div className="h-screen w-screen"></div>

      <Footer />
    </main>
  );
}
