import FactsTable from "@/components/nutrietionFacs";
import { Code, Arrow, Heart, Tea, IconWrapper, Title } from "/components/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black w-screen h-full p-4">
      <div className="grid grid-cols-4 grid-rows-5 gap-4 auto-rows-fr place-items-start justify-items-center">
        <Link href='/home'><IconWrapper children={Code()} title={"Can Code"} /></Link>
        <IconWrapper children={Arrow()} title={"Up"} />
        <IconWrapper children={Heart()} title={"Fragile"} />
        <IconWrapper children={Tea()} title={"Needs tea"} />
        <Title args={"row-span-2 col-span-4"} />
        <FactsTable args={'row-span-3 col-span-4'}/>
      </div>
    </div>
  );
}
