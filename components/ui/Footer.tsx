import React from "react";

const Footer = () => {
  return (
    <div className="font-boring h-screen w-screen bg-[#EBCF35] p-3 md:p-10 text-[2.8rem] md:text-9xl font-extrabold leading-[0.9] md:leading-[0.9] text-[#181818] tracking-tight z-50 relative flex flex-col justify-between items-start">
      <div className="w-full md:w-3/4 text-pretty">
        ANY QUESTIONS OR THOUGHTS? OR MAYBE YOU WANT TO SAY HELLO?
      </div>
      <div className="text-lg md:text-5xl leading-tight md:leading-tighter tracking-tight mt-10 md:mt-20">
        Contact me via email on <br />
        <span>haseebkhalidoriginal@gmail.com</span> or <br />
        via mobile on +92 03038023397
      </div>
      {/* <div className="italic text-sm md:text-xl tracking-tight absolute bottom-4 right-4 md:right-10"> */}
      {/*   made with 🧡 by high-haseeb */}
      {/* </div> */}
    </div>
  );
};

export default Footer;
