import FactsTable from "@/components/Facts";
import { Code, Arrow, Heart, Tea, IconWrapper, Title } from "/components/Icons";
import Link from "next/link";
import Details from "@/components/details";

export default function Home() {
  return (
    <div className="w-screen  md:flex justify-center items-top bg-black p-4 ">
      <div className="bg-black flex flex-col md:mr-8">
        <div className="flex w-auto justify-around items-start">
          <Link href="/home">
            <IconWrapper children={Code()} title={"Can Code"} />
          </Link>
          <IconWrapper children={Arrow()} title={"The only way is up"} />
          <IconWrapper children={Heart()} title={"Fragile Heart"} />
          <IconWrapper children={Tea()} title={"Drinks only Tea"} />
        </div>
        <Title args={""} />
      </div>
      <div className="flex-col justify-center items-center md:w-1/3">
        <Details args={""}/>
        <FactsTable args={"w-auto"} />
      </div>
    </div>
  );
}
