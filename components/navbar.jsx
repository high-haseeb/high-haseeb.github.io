"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-blackC flex justify-between h-12 items-center text-center">
        <Link href={"./"} className=" flex-grow text-2xl font-bold italic text-whiteC">
          high-haseeb
        </Link>
      <Link href={"./home"} className="text-whiteC text-3xl font-bold mx-9">
        about
      </Link>
    </div>
  );
}

export default Navbar;
