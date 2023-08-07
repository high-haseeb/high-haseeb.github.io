import Headline from "@/components/headline";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-screen bg-purple-200">
        <Box />
        <Title />
      </div>
    </div>
  );
}
function Box() {
  return (
    <div>
      <span
        class="material-symbols-outlined md-48"
      >
        code
      </span>
    </div>
  );
}
function Title() {
  return (
    <div className="bg-blackC w-auto font-inter font-bold text-whiteC flex flex-col items-start justify-center border-t-4 border-b-4 border-gold leading-none">
      <h4 className="font-normal text-xs tracking-tighter mt-1">
        PRODUCT DESCRIPTION
      </h4>
      <h1 className=" tracking-tighter  text-9xl mb-[-15px]">Haseeb </h1>
      <h1 className=" tracking-tighter text-9xl flex">
        Khalid
        <span className="text-6xl justify-self-start">&#174;</span>
      </h1>
    </div>
  );
}
