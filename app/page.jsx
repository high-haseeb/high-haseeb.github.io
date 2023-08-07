import { Code, Arrow, Heart, Tea, IconWrapper, Title } from "/components/Icons";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex justify-center bg-black">
      <div className="grid grid-cols-1 grid-rows-4 w-2/5">
        <div className="flex justify-around bg-blackC py-8">
          <Link href="/home">
            <IconWrapper children={Arrow()} title={"Side Up"} />
          </Link>
          <IconWrapper children={Code()} title={"Code"} />
          <IconWrapper children={Heart()} title={"Handle"} />
          <IconWrapper children={Tea()} title={"Tea"} />
        </div>
        <div className="col-span-4 row-span-3">
          <Title className="" />
        </div>
      </div>
    </div>
  );
}
