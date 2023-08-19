import React from "react";
import prisma from "@/lib/prisma";
import UserForm from "@/components/UserForm";

async function Page() {
  const users = await prisma.user.findMany();

  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex flex-col justify-center items-center text-5xl font-bold text-stone-300 bg-black">
        <div className="text-3xl text-stone-400">our visitors:</div>
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
        <UserForm />
      </div>
    </div>
  );
}

export default Page;
