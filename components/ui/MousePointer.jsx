"use client";
import React, { useState, useEffect } from "react";

const MousePointer = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCirclePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Delayed effect to move circle

  return (
    <div
      style={{
        position: "fixed",
        top: circlePosition.y,
        left: circlePosition.x,
        width: "30px",
        height: "30px",
        backgroundColor: "#FF6F61", // Circle color
        borderRadius: "50%",
        transform: "translate(-50%, -50%)", // Center the circle on mouse
        // transition: "top 0.1s ease, left 0.1s ease", // Smooth transition
        pointerEvents: "none", // Prevent interfering with other elements
        zIndex : 999,
      }}
    />
  );
};

export default MousePointer;
