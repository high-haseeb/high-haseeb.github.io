import { Code, Arrow, Heart, Tea, IconWrapper, Title } from "/components/Icons";
export default function Home() {
  return (
    <div className="bg-black w-screen h-screen p-4">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 place-items-start justify-items-center">
        <IconWrapper children={Code()} title={"Can Code"} />
        <IconWrapper children={Arrow()} title={"Up"} />
        <IconWrapper children={Heart()} title={"Fragile"} />
        <IconWrapper children={Tea()} title={"Needs tea"} />
        <Title args={"row-span-2 col-span-4"} />
      </div>
    </div>
  );
}
