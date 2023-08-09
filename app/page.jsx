import FactsTable from "@/components/nutrietionFacs";
import { Code, Arrow, Heart, Tea, IconWrapper, Title } from "/components/Icons";
import Link from "next/link";
import BarCode from "@/components/bar-code";

export default function Home() {
  return (
    <div className="w-screen h-screen lg:flex justify-center items-center bg-black">
      <div className="bg-black w-auto  p-4 flex flex-col ">
        <div className="flex w-auto justify-around items-start">
          <Link href="/home">
            <IconWrapper children={Code()} title={"Can Code"} />
          </Link>
          <IconWrapper children={Arrow()} title={"The only way is up"} />
          <IconWrapper children={Heart()} title={"Fragile Heart"} />
          <IconWrapper children={Tea()} title={"Drinks only Tea"} />
        </div>
        <Title args={"lg:text-9xl"} />
        <div className=" flex items-center justify-around">
          <BarCode />
          <div className="text-center">
            <p className="text-whiteC font-bold tracking-tighter text-6xl">
              100% <br />{""}
              <p className="text-4xl font-normal tracking-normal">ORGANIC</p>
            </p>
          </div>
        </div>
      </div>
      <FactsTable args={"w-auto "} />
    </div>
  );
}
