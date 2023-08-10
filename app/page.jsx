import FactsTable from "@/components/Facts";
import { Code, Arrow, Heart, Tea, IconWrapper, Title } from "/components/Icons";
import Link from "next/link";
import Details from "@/components/details";

export default function Home() {
  return (
    <>
      <div className={"w-screen relative h-screen p-4 bg-blackC "}>
        <div className="flex justify-center ">
          <div className=" md:flex justify-center bg-blackC w-[830px] items-top p-4 border-whiteC border-4 rounded-md ">
            <div className=" flex flex-col md:mr-8 w-auto ">
              <div className="flex w-auto justify-around items-start mb-4">
                <Link href="/home">
                  <IconWrapper children={Code()} title={"Can Code"} />
                </Link>
                <IconWrapper children={Arrow()} title={"The only way is up"} />
                <IconWrapper children={Heart()} title={"Fragile Heart"} />
                <IconWrapper children={Tea()} title={"Drinks only Tea"} />
              </div>
              <Title args={"md:text-9xl"} />
            </div>
            <div className="md:flex-col justify-between items-center md:w-auto">
              <div className=" border-whiteC mb-4">
                <Details args={""} />
              </div>
              <FactsTable args={""} />
            </div>
          </div>
        </div>
      </div>
      <div
        id="texture"
        className="mt-[-80px]"
      ></div>
    </>
  );
}
