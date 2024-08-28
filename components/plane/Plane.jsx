import React, { useEffect, useRef, useState } from "react";

const Plane = () => (
  <div className="font-inter h-screen w-screen bg-black p-2 md:p-10">
    <div className="flex h-full w-full flex-col overflow-scroll rounded-3xl border border-white">
      <StatusBar />
      <div className="flex h-auto w-full flex-grow flex-col md:flex-row">
        <Players />
        <div className="flex h-full w-full flex-col md:w-3/4">
          <PlaneGame finalTarget={100} speed={0.5} />
          <div className="flex h-1/4 w-full flex-col gap-4 md:flex-row">
            <Bet />
            <Bet />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-4 right-10 text-sm">
      Made with ☕ & 🧡 by high-haseeb
    </div>
  </div>
);
const StatusBar = () => {
  return (
    <div className="flex h-10 w-full items-center justify-between bg-[#1B1C1D] px-10">
      <div className="flex items-center justify-center gap-4 text-2xl text-red-400">
        <div className="font-black italic">AVIATOR</div>
        <div className="flex items-center justify-center rounded-3xl bg-[#E69308] px-4 py-1 text-sm font-light text-black">
          {" "}
          How to play ?
        </div>
      </div>
      <div className="flex gap-4">
        <div className="font-bold text-green-500">
          400.00
          <span className="ml-2 text-xs font-normal text-gray-200">USD</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-gray-200"
        >
          <path d="M74-184v-136h812v136H74Zm0-228v-136h812v136H74Zm0-229v-136h812v136H74Z" />
        </svg>
      </div>
    </div>
  );
};

const PlaneGame = ({ finalTarget, speed }) => {
  const [target, setTarget] = useState(0);
  const [color, setColor] = useState("#00ffff");
  const [hasReached, setHasReached] = useState(false);
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const style = getComputedStyle(canvas);
    canvas.width = parseInt(style.width, 10);
    canvas.height = parseInt(style.height, 10);

    // Graph parameters
    const padding = 40;
    const graphHeight = canvas.height - padding * 2;
    const graphWidth = canvas.width - padding * 2;
    const numPoints = 100;

    let pow = 2.0;
    let planeImgIndex = 0;
    let data = Array.from({ length: numPoints }, (_, i) =>
      Math.pow(pow, i / 10),
    );
    let maxValue = canvas.height * 0.8;
    let offset = 0;
    let hasReachedEnd = false;
    let localTarget = 0;

    const planeImages = [new Image(), new Image(), new Image()];
    planeImages[0].src = "/images/plane0.png";
    planeImages[1].src = "/images/plane1.png";
    planeImages[2].src = "/images/plane2.png";
    const bgMusic = new Audio("/bg.mpeg");
    bgMusic.play();
    const flewSound = new Audio("/flew.mpeg");
    flewSound.loop = false;

    const aspectRatio = planeImages[0].height / planeImages[0].width;
    const img_w = canvas.width / 7;
    const img_h = img_w * aspectRatio;

    const drawGraph = () => {
      planeImgIndex += 0.1;
      if (localTarget <= finalTarget) {
        localTarget += speed;
        setTarget(localTarget);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(
          padding,
          padding + graphHeight - (data[0] / maxValue) * graphHeight,
        );

        if (hasReachedEnd) {
          maxValue += Math.sin(timeRef.current) * 0.9;
          timeRef.current += 0.01;
        }

        for (let i = 0; i < offset; i++) {
          const x = padding + ((i % numPoints) / (numPoints - 1)) * graphWidth;
          const y = padding + graphHeight - (data[i] / maxValue) * graphHeight;

          ctx.lineTo(x, y);

          if (i > 0 && x + img_w >= graphWidth + padding) {
            hasReachedEnd = true;
            setColor("#ff0000");
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.save();
          ctx.translate(x, y);

          const img = planeImages[Math.floor(planeImgIndex % 3)];
          ctx.drawImage(img, -10, -img_h, img_w, img_h);
          ctx.restore();
        }

        ctx.strokeStyle = "red";
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.lineTo(
          padding + ((offset % numPoints) / (numPoints - 1)) * graphWidth,
          canvas.height - padding,
        );
        ctx.lineTo(padding, canvas.height - padding);
        ctx.closePath();
        ctx.fillStyle = "rgba(217, 0, 0, 0.3)";
        ctx.fill();

        if (!hasReachedEnd) {
          offset += 0.4;
        }
      } else {
        bgMusic.pause();
        flewSound.play();
        setTimeout(() => {
          bgMusic.play();
          flewSound.pause();
          setHasReached(true);
        }, 2000);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        // ctx.translate(x, y);
        const img = planeImages[Math.floor(planeImgIndex % 3)];
        ctx.drawImage(img, -10, -img_h, img_w, img_h);
        setColor("#000000");
        ctx.restore();
      }
    };

    const animate = () => {
      drawGraph();
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="relative h-1/2 w-full overflow-hidden rounded-lg md:h-3/4 md:w-full">
      <div
        className="absolute left-0 top-0 z-10 h-full w-full"
        style={{
          background: `radial-gradient(ellipse at center, ${color}55, ${color}09, transparent )`,
          transition: "background",
        }}
      />
      <canvas
        className="absolute left-0 top-0 z-10 h-full w-full"
        ref={canvasRef}
      />
      {hasReached ? (
        <Loader />
      ) : (
        <>
          <div
            className={`absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-6xl text-white md:text-9xl ${target >= finalTarget ? "text-red-500" : ""}`}
          >
            <span className="text-lg md:text-5xl">
              {target >= finalTarget && "Flew Away"}
            </span>
            {target.toFixed(2)}x
          </div>
          <img
            src="/images/bg.svg"
            className="absolute -left-1/2 top-0 h-[200%] w-[200%] animate-slowSpin"
          />
        </>
      )}
    </div>
  );
};
const Players = () => {
  return (
    <div className="mt-auto h-full w-full p-4 text-white md:w-1/4">
      <div className="flex h-full w-full flex-col items-center justify-start gap-4 rounded-lg bg-[#1B1C1D] p-2 pt-4">
        <div className="flex h-6 w-2/3 items-center justify-between rounded-3xl bg-black/40 text-sm">
          <div className="flex w-1/3 items-center justify-center rounded-3xl bg-[#2C2D30] p-1">
            All Bets
          </div>
          <div className="flex w-1/3 items-center justify-center rounded-3xl text-gray-500">
            My Bets
          </div>
          <div className="flex w-1/3 items-center justify-center rounded-3xl text-gray-500">
            Top
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <div>ALL BETS</div>
            <div>100</div>
          </div>
          <div className="rounded-3xl border border-gray-500 px-2 text-sm text-gray-500">
            Previous hand
          </div>
        </div>
        <div className="flex max-h-[44rem] w-full flex-col overflow-y-scroll">
          <table className="border-separate border-spacing-y-1">
            <tr className="w-full text-xs text-gray-500">
              <td>User</td>
              <td>Bet USD</td>
              <td className="text-right">Cash Out USD</td>
            </tr>
            {Array.from({ length: 50 }).map((_, i) => (
              <User key={i} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
const Bet = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded bg-[#1B1C1D] text-white md:w-1/2">
      <div className="mt-6 flex h-6 w-2/3 items-center justify-between rounded-3xl bg-black/40 text-sm">
        <div className="flex w-1/2 items-center justify-center rounded-3xl bg-[#2C2D30] p-1">
          Bet
        </div>
        <div className="flex w-1/2 items-center justify-center rounded-3xl text-gray-500">
          Auto
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-between gap-4 md:justify-center">
        <div className="flex">
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-0 rounded-2xl font-bold text-white md:h-20 md:w-40">
            <div className="flex w-full items-center justify-center rounded-2xl bg-black/40">
              1.00
            </div>
            <div className="flex w-full">
              <div className="flex w-1/2 items-center justify-center rounded-2xl bg-[#181818]">
                {" "}
                1{" "}
              </div>
              <div className="flex w-1/2 items-center justify-center rounded-2xl bg-[#181818]">
                {" "}
                2{" "}
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex w-1/2 items-center justify-center rounded-2xl bg-[#181818]">
                {" "}
                3{" "}
              </div>
              <div className="flex w-1/2 items-center justify-center rounded-2xl bg-[#181818]">
                {" "}
                4{" "}
              </div>
            </div>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-green-500 font-bold text-white md:h-20 md:w-40">
            <div>BET</div>
            <div>1.00 usd</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const User = () => {
  return (
    <tr className="h-10 w-full bg-black/40 text-gray-400">
      <td className="rounded-l-3xl pl-2">
        <div className="flex items-center justify-start gap-2">
          <div className="h-8 w-8 rounded-full bg-yellow-200" />
          <div className="text-sm">d***k</div>
        </div>
      </td>
      <td>100.00</td>
      <td className="rounded-r-3xl pr-2 text-right">10</td>
    </tr>
  );
};

const Loader = () => (
  <img
    src="/images/prop.svg"
    width={100}
    height={100}
    className="absolute left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 animate-propeller"
  />
);

export default Plane;
