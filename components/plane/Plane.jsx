import React, { useEffect, useRef, useState } from "react";

const Plane = () => (
  <div className="">
    <div className="p-4 text-6xl">Plane Game</div>
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <PlaneGame finalTarget={300} speed={0.1} />
    </div>
    <div className="absolute bottom-4 right-10 text-sm">
      Made with ☕ & 🧡 by high-haseeb
    </div>
  </div>
);

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
    let maxValue = canvas.height /2 ;
    let offset = 0;
    let hasReachedEnd = false;
    let localTarget = 0;

    const planeImages = [new Image(), new Image(), new Image()];
    planeImages[0].src = "/images/plane0.png";
    planeImages[1].src = "/images/plane1.png";
    planeImages[2].src = "/images/plane2.png";

    const aspectRatio = planeImages[0].height / planeImages[0].width;
    const img_w = canvas.width / 4;
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
        setTimeout(() => setHasReached(true), 2000);
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
    <div className="relative h-1/2 w-full overflow-hidden md:h-1/2 md:w-1/2">
      <div
        className="absolute left-0 top-0 h-full w-full"
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

const Loader = () => (
  <img
    src="/images/prop.svg"
    width={100}
    height={100}
    className="absolute left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 animate-propeller"
  />
);

export default Plane;
