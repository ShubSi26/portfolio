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

    let lines: Line[] = [];

    function createLine(): Line {
      // Choose a random edge: 0 = top, 1 = right, 2 = bottom, 3 = left
      const edge = Math.floor(Math.random() * 4);
      let start, target;

      switch (edge) {
        case 0: // Top edge: go vertically downward
          start = { x: Math.random() * canvas.width, y: 0 };
          target = { x: start.x, y: canvas.height };
          break;
        case 1: // Right edge: go horizontally leftward
          start = { x: canvas.width, y: Math.random() * canvas.height };
          target = { x: 0, y: start.y };
          break;
        case 2: // Bottom edge: go vertically upward
          start = { x: Math.random() * canvas.width, y: canvas.height };
          target = { x: start.x, y: 0 };
          break;
        case 3: // Left edge: go horizontally rightward
          start = { x: 0, y: Math.random() * canvas.height };
          target = { x: canvas.width, y: start.y };
          break;
        default:
          start = { x: 0, y: 0 };
          target = { x: canvas.width, y: canvas.height };
      }

      return {
        x1: start.x,
        y1: start.y,
        targetX: target.x,
        targetY: target.y,
        progress: 0,         // Drawing progress (0 to 1)
        speed: 0.005,        // Speed of drawing the line
        tailSpeed: 0.002,    // Speed of erasing the line from the start
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      };
    }

    function updateLines() {
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-40 dark:bg-slate-800 hidden sm:block" />;
};

export default MovingLinesBackground;
