"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { produce } from "immer";

interface MousePosition {
  x: number;
  y: number;
}

const MouseEffect: React.FC = () => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="m-16">
      <GameOfLife />
    </div>
  );
};

// Define types for the grid

type Grid = number[][];

const numRows = 22;
const numCols = 40;
const operations: [number, number][] = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = (): Grid => {
  return Array.from({ length: numRows }, () => Array(numCols).fill(0));
};

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(generateEmptyGrid);
  const [running, setRunning] = useState<boolean>(false);
  const runningRef = useRef<boolean>(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((g) =>
      produce(g, (gridCopy: number[][]) => {
        const newGrid = generateEmptyGrid(); // Create a new grid to store updated states

        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (g[i][j] === 0 && (neighbors === 4 || neighbors === 3)) {
              newGrid[i][j] = 1;
            } else if (g[i][j] === 1 && (neighbors === 6 || neighbors === 4)) {
              newGrid[i][j] = 1;
            } else {
              newGrid[i][j] = 0;
            }
          }
        }

        return newGrid;
      })
    );

    setTimeout(runSimulation, 100);
  }, []);

  const randomGenerate = () => {
    const newGrid: Grid = Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => (Math.random() > 0.5 ? 1 : 0))
    );
    setGrid(newGrid);
  };

  const run = () => {
    setRunning((prev) => {
      if (!prev) {
        runningRef.current = true;
        runSimulation();
      }
      return !prev;
    });
  };

  return (
    <>
      <div className="flex gap-6">
        <button onClick={run}>{running ? "Stop" : "Start"}</button>
        <button onClick={randomGenerate}>Randomize</button>
        <button
          onClick={() => {
            setGrid(generateEmptyGrid());
          }}
        >
          Clear
        </button>
      </div>
      <div
        className="absolute top-0 left-0 w-screen h-screen pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 2.5%)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += grid[newI][newJ];
              }
            });

            let color = undefined;
              switch (neighbors){
                case 1: color = "bg-yellow-100"; break;
                case 2: color = "bg-yellow-200"; break;
                case 3: color = "bg-yellow-300"; break;
                case 4: color = "bg-yellow-400"; break;
                case 5: color = "bg-yellow-500"; break;
                case 6: color = "bg-yellow-600"; break;
                case 7: color = "bg-yellow-700"; break;
                case 8: color = "bg-yellow-800"; break;
              }


            return (
              <div
                key={`${i}-${j}`}
                onMouseOver={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][j] = 1;// grid[i][j] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                  className={color}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default MouseEffect;
