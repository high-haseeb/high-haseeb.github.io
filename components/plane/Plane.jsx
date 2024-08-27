import React, { useEffect, useRef, useState } from "react";

const Plane = () => {
  return (
    <div className="">
      <div className="text-6xl p-4">Plane Game</div>
      <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0">
        <Canvas finalTarget={100} />
      </div>
      <div className="text-sm absolute bottom-4 right-10">Made with ☕ & 🧡 by high-haseeb</div>
    </div>
  );
};
const Canvas = ({ finalTarget }) => {
  const [target, setTarget] = useState(0);
  const [color, setColor] = useState("#00ffff");
  const canvasRef = useRef(null);
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
    const data = Array.from({ length: numPoints }, (_, i) => Math.pow(1.5, i / 10));
    const maxValue = Math.max(...data);

    let offset = 0;
    const speed = 0.4;
    const planeA = new Image();
    const planeB = new Image();
    const planeC = new Image();
    planeA.src = "/images/plane0.png";
    planeB.src = "/images/plane1.png";
    planeC.src = "/images/plane2.png";

    const aspectRatio = planeA.height / planeA.width;
    const img_w = 200;
    const img_h = img_w * aspectRatio;
    let img;
    const drawGraph = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(padding, padding + graphHeight - (data[0] / maxValue) * graphHeight);

      for (let i = 0; i < offset; i++) {
        const x = padding + ((i % numPoints) / (numPoints - 1)) * graphWidth;
        const y = padding + graphHeight - (data[i] / maxValue) * graphHeight;

        ctx.lineTo(x, y);

        if (i > 0) {
          const prevX = padding + (((i - 1) % numPoints) / (numPoints - 1)) * graphWidth;
          const prevY = padding + graphHeight - (data[i - 1] / maxValue) * graphHeight;

          const dx = x - prevX;
          const dy = y - prevY;
          const angle = Math.atan2(dy, dx);

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);
          if (i % 3 === 0) {
            img = planeA;
          } else if (i % 3 === 1) {
            img = planeB;
          } else {
            img = planeC;
          }
          ctx.drawImage(img, -10, -img_h, img_w, img_h);
          ctx.restore();
        }
      }

      ctx.strokeStyle = "red";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.lineTo(padding + ((offset % numPoints) / (numPoints - 1)) * graphWidth, canvas.height - padding);
      ctx.lineTo(padding, canvas.height - padding);
      ctx.closePath();
      ctx.fillStyle = "rgba(217, 0, 0, 0.3)";
      ctx.fill();

      offset += speed;
      setTarget(offset);
      if (offset > 10) {
        setColor("#ff00ff");
      }
      if (offset > numPoints) {
        offset = 0;
      }
    };

    const animate = () => {
      drawGraph();
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation
  }, []);
  return (
    <div className="w-1/2 h-1/2 relative overflow-hidden">
      <img src="/images/bg.svg" className="w-[200%] h-[200%] top-0 -left-1/2 absolute animate-slowSpin" />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: `radial-gradient(ellipse at center, ${color}55, ${color}09, transparent )`, transition: 'background'}}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl z-50">{target.toFixed(2)}x</div>
      <canvas className="w-full h-full absolute top-0 left-0 z-10" ref={canvasRef} />
    </div>
  );
};
const Loader = () => {
  return (
    <img
      src="/images/path5.svg"
      width={100}
      height={100}
      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-1/4 animate-propeller"
    />
  );
};

export default Plane;
