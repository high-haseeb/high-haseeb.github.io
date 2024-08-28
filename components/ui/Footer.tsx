import React from "react";

const Footer = () => {
  return (
    <div className="font-boring h-screen w-screen bg-[#EBCF35] p-10 text-9xl font-[900] leading-[0.9] text-[#181818] tracking-tight z-50 relative">
      <div className="w-3/4 text-pretty">
        ANY QUESTIONS OR THOUGHTS? OR MAYBE YOU WANT TO SAY HELLO?
      </div>
      <div className="text-5xl leading-tighter tracking-tight mt-20">
        Contact me via email on <br />
        <span className="">haseebkhalidorigianal@gmail.com</span> or <br/>
        via mobile on +92 03038023397
      </div>
      <div className="italic text-xl tracking-tight absolute bottom-4 right-10">made with  🧡 by high-haseeb</div>
    </div>
  );
};

export default Footer;
