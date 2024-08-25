import Adjectives from "@/components/ui/common/Adjectives";
import Navbar from "@/components/ui/common/Navbar";

export default function Home() {
  return (
    <main className="bg-brBlack text-brWhite h-screen w-screen p-16  select-none">
      <Navbar />
        <div className="text-[15rem] font-bold leading-[0.85] mt-32">
        <div className="font-meditative text-9xl italic">404-</div>
          {/* <br /> */}
          <div className="font-black">Not found</div>
          {/* <br /> */}
          <div className="text-4xl">This page went a little too high and got lost in the clouds. ☁️</div>
        </div>
      </main>
  );
}
