"use client";
import { useEffect, useRef } from "react";

const MovingLinesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    type Line = {
      x1: number;
      y1: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
      tailSpeed: number;
      tailProgress?: number;
      color: string;
    };

    const lines: Line[] = [];

    function createLine(): Line {
      if (!canvas) return {} as Line; // Safety check
    
      // Random x position across the canvas width
      const x = Math.random() * canvas.width;
    
      // Randomly decide whether the line goes downward or upward
      const goDownward = Math.random() < 0.5;
    
      const start = goDownward 
        ? { x, y: 0 } 
        : { x, y: canvas.height };
      const target = goDownward 
        ? { x, y: canvas.height } 
        : { x, y: 0 };
    
      return {
        x1: start.x,
        y1: start.y,
        targetX: target.x,
        targetY: target.y,
        progress: 0,         // Drawing progress (0 to 1)
        speed: 0.005,        // Speed of drawing the line
        tailSpeed: 0.005,    // Speed of erasing the line from the start
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      };
    }
    

    function updateLines() {
      if (!canvas) return;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each line
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];

        if (line.progress < 1) {
          // Increase progress until the line is fully drawn
          line.progress += line.speed;
          if (line.progress > 1) line.progress = 1;

          const currentX = line.x1 + (line.targetX - line.x1) * line.progress;
          const currentY = line.y1 + (line.targetY - line.y1) * line.progress;

          ctx.strokeStyle = line.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
        } else {
          // Once fully drawn, begin erasing from the starting point
          if (line.tailProgress === undefined) {
            line.tailProgress = 0;
          }
          line.tailProgress += line.tailSpeed;
          if (line.tailProgress > 1) line.tailProgress = 1;

          const newStartX = line.x1 + (line.targetX - line.x1) * line.tailProgress;
          const newStartY = line.y1 + (line.targetY - line.y1) * line.tailProgress;

          ctx.strokeStyle = line.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(newStartX, newStartY);
          ctx.lineTo(line.targetX, line.targetY);
          ctx.stroke();

          // Remove the line once it has completely disappeared
          if (line.tailProgress === 1) {
            lines.splice(i, 1);
          }
        }
      }

      // Add new lines less frequently
      if (Math.random() < 0.01) {
        lines.push(createLine());
      }

      requestAnimationFrame(updateLines);
    }

    updateLines();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (<>
  <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-40 dark:bg-slate-800 hidden sm:block" />
  <div className="fixed top-0 left-0 w-full h-full -z-40 dark:bg-slate-800 sm:hidden"></div>
</>);
};

export default MovingLinesBackground;
