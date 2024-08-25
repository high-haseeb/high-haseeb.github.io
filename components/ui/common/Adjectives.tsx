"use client";
import React, { useEffect, useState } from "react";
import adjectives from "@/components/ui/common/AdjectivesStore"

const Adjectives = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleMouseEnter = () => {
    setCurrentWordIndex((currentWordIndex + 1) % adjectives.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, currentWordIndex < 4 ?1000: 5000);
    return () => clearInterval(intervalId);
  }, [adjectives.length, currentWordIndex]);

  return (
    <div
      className="relative h-[8rem] max-h-[8rem] cursor-pointer overflow-y-hidden font-meditative text-9xl italic"
      onClick={handleMouseEnter}
    >
      <div className="-translate-y-[1rem]">
        {adjectives.map((word, index) => {
          const prevIndex =
            (currentWordIndex - 1 + adjectives.length) % adjectives.length;
          return (
            <div
              key={index}
              className={`absolute left-0 top-0 transition-transform duration-500 ${index === currentWordIndex ? "translate-y-0" : index === prevIndex ? "-translate-y-full" : "translate-y-full opacity-0"}`}
            >
              {word}-
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adjectives;
