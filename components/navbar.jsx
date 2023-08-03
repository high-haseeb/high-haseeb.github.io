import React from "react";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

function Navbar() {
  const [springs, api] = useSpring(() => ({ from: { x: 0, y: 0 } }));
  const handleClick = () => {
    api.start({
      from: { x: 0, y: 0  },
      to: { x: 100, y: 100 },
    });
  };
  return (
    <div className="bg-blackC flex justify-between h-12 items-center">
      <animated.div style={{ ...springs }} onClick={handleClick}>
        <Link
          href={"./"}
          className="text-stone-300 text-2xl font-bold mr-30 ml-10 italic"
        >
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
