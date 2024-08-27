import React, { useEffect, useRef, useState } from "react";

const Plane = () => (
  <div className="">
    <div className="text-6xl p-4">Plane Game</div>
    <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0">
      <Canvas finalTarget={100} />
    </div>
    <div className="text-sm absolute bottom-4 right-10">Made with ☕ & 🧡 by high-haseeb</div>
  </div>
);

const Canvas = ({ finalTarget }) => {
  const [target, setTarget] = useState(0);
  const [color, setColor] = useState("#00ffff");
  const [hasReached, setHasReached] = useState(false);
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Graph parameters
    const padding = 40;
    const graphHeight = canvas.height - padding * 2;
    const graphWidth = canvas.width - padding * 2;
    const numPoints = 100;
    const speed = 0.4;

    let pow = 1.5;
    let planeImgIndex = 0;
    let data = Array.from({ length: numPoints }, (_, i) => Math.pow(pow, i / 10));
    let maxValue = Math.max(...data);
    let offset = 0;
    let hasReachedEnd = false;
    let localTarget = 0;

    const planeImages = [new Image(), new Image(), new Image()];
    planeImages[0].src = "/images/plane0.png";
    planeImages[1].src = "/images/plane1.png";
    planeImages[2].src = "/images/plane2.png";

    const aspectRatio = planeImages[0].height / planeImages[0].width;
    const img_w = 400;
    const img_h = img_w * aspectRatio;

    const normalizeSinValue = (value, min, max) => {
      const normalized = (Math.sin(value) + 1) / 2;
      return normalized * (max - min) + min;
    };

    const drawGraph = () => {
      planeImgIndex += 0.1;
      if (localTarget <= finalTarget) {
        localTarget += 0.4;
        setTarget(localTarget);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(padding, padding + graphHeight - (data[0] / maxValue) * graphHeight);

        if (hasReachedEnd) {
          timeRef.current += 0.01;
          data = Array.from({ length: numPoints }, (_, i) => Math.pow(normalizeSinValue(Math.sin(timeRef.current), 1.1, 2.0), i / 10));
          maxValue = Math.max(...data);
        }

        for (let i = 0; i < offset; i++) {
          const x = padding + ((i % numPoints) / (numPoints - 1)) * graphWidth;
          const y = padding + graphHeight - (data[i] / maxValue) * graphHeight;

          ctx.lineTo(x, y);

          if (i > 0 && x + img_w >= graphWidth + padding) {
            hasReachedEnd = true;
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

        ctx.lineTo(padding + ((offset % numPoints) / (numPoints - 1)) * graphWidth, canvas.height - padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.closePath();
        ctx.fillStyle = "rgba(217, 0, 0, 0.3)";
        ctx.fill();

        if (!hasReachedEnd) {
          offset += speed;
        }
      } else {
        setTimeout(() => setHasReached(true), 1000);
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
    <div className="w-1/2 h-1/2 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: `radial-gradient(ellipse at center, ${color}55, ${color}09, transparent )`, transition: "background" }}
      />
      <canvas className="w-full h-full absolute top-0 left-0 z-10" ref={canvasRef} />
      {hasReached ? (
        <Loader />
      ) : (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl z-50">{target.toFixed(2)}x</div>
          <img src="/images/bg.svg" className="w-[200%] h-[200%] top-0 -left-1/2 absolute animate-slowSpin" />
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
    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/4 animate-propeller"
  />
);

export default Plane;
