import React, { useState } from "react";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

function Navbar() {
  const [click, toggle] = useState(true);
  const springs = useSpring({
    from: { color: "hotpink", x: 0 },
    color: click ? "hotpink" : "lime",
    x: click ? 0 : 1,
    config: { duration: 1000 },
  });
  return (
    <div className="bg-blackC flex justify-between h-12 items-center">
      <animated.div
        style={{
          color:springs.color,
          scale: springs.x.to({
            range: [1, 0],
            output: [1, 2],
          }),
        }}
        onClick={() => toggle(!click)}
      >
        <Link href={"./"} className=" text-2xl font-bold mr-30 ml-10 italic">
          high-haseeb
        </Link>
      </animated.div>
      <Link href={"./home"} className="text-whiteC text-3xl font-bold mx-9">
        about
      </Link>
    </div>
  );
}

export default Navbar;
