"use client";

export default function Home() {
  const apiCall = async () => {
    const res = await fetch("/api/user");
    const jsonData = await res.json();
    console.log(jsonData);
  };
  return (
    <div className="h-screen w-full bg-orange-400 flex items-center justify-center">
      <h1 className="p-5 font-bold bg-red-600 text-lime-400 text-8xl text-center w-full">
        {" "}
        Hello next js
      </h1>
      <button onClick={apiCall}>CLICK ME</button>
    </div>
  );
}
