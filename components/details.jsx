import React from "react";
import BarCode from "./bar-code";

export default function Details({ args }) {
  return (
    <div className="flex ">
      <div
        className={`grid grid-cols-3 grid-rows-2 gap-x-4 place-items-center ${args}`}
      >
        <Ingredeints args={"row-span-2 place-self-start"} />
        <Organic args={""} />
        <div className="text-xl tracking-tight flex-col font-bold leading-[1] ">
          <div className="">contents</div>
          <div className="">may very</div>
          <div className="">in mood</div>
        </div>
        <BarCode args={""} />
        <Recycle/>
      </div>
    </div>
  );
}
function Ingredeints({ args }) {
  return (
    <div className={`${args}`}>
      <div className="text-xs text-left leading-[1] mt-4">
        <span className="font-bold">COMPATIBLE TECHNOLIGIES:</span> c, cpp, javascript, react, next, node.js,
        embeded systems, python, computer vision, html, css, tailwindcss,
        three.js, react three fiber, react-spring
      </div>
    </div>
  );
}
function Organic({ args }) {
  return (
    <div className={`text-center  w-auto ${args}`}>
      <div className="text-4xl font-bold tracking-tighter ">
        100% <br />
        {""}
      </div>
      <div className=" text-2xl font-bold tracking-tight">
        ORGANIC
      </div>
    </div>
  );
}
function Recycle() {
  return (
    <div className=" flex-col  justify-center items-center w-[80px]">
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="code" className="dark:fill-whiteC fill-blackC">
          <g id="AJ_Recycling_Symbol 1">
            <g id="layer1">
              <g id="g3535">
                <path
                  id="path2742"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.4945 46.5646L81.097 36.4307L88.535 51.0805C90.3321 59.0842 80.4857 62.0211 72.5797 61.5441L64.4945 46.5646Z"
                />
                <path
                  id="path2743"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M60.7213 57.0282L51.9899 72.779L60.7213 88.75L60.9373 82.3618H68.9149C71.826 82.6186 75.5984 80.6722 77.0001 77.8459L87.2418 58.6803C83.8637 62.0951 79.5198 62.976 74.5211 62.976H61.0448L60.7213 57.0282Z"
                />
                <path
                  id="path2751"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.2116 37.6088L24.4823 27.6972L33.4073 13.9412C39.3845 8.45172 46.6773 15.8215 50.1057 23.1152L41.2116 37.6088Z"
                />
                <path
                  id="path2752"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.9977 35.9005L69.7142 36.0555L79.142 20.5032L73.5708 23.4114L69.6987 16.2848C68.5061 13.56 65.0099 11.134 61.9099 11.2543L40.5393 11.4083C45.1002 12.7684 47.9628 16.2207 50.3895 20.6869L56.9305 32.7246L51.9977 35.9005Z"
                />
                <path
                  id="path2753"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6802 36.7882L16.8638 40.838L11.9852 50.1838C9.54579 54.4943 13.7364 58.6922 16.4065 60.1537C19.035 61.5925 23.1144 61.7633 26.9261 61.711L33.7868 50.4959L38.9696 53.2994L29.9748 36.6322L11.6802 36.7882Z"
                />
                <path
                  id="path2754"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4425 58.4404L23.5715 79.0013C25.8084 81.8572 30.0263 82.5326 34.3963 82.429H46.1357V62.9572L23.8767 62.8012C20.4211 63.0096 15.8982 62.2828 12.4425 58.4404Z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p className="text-xs text-center mt-[-6px] w-[80px]">Biodegradeable</p>
    </div>
  );
}
