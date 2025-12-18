"use client";
import { useEffect, useRef } from "react";

interface Cell {
  char: string; // Individual character ("0" or "1")
  alpha: number; // Current brightness level (0–1)
  fadingIn: boolean; // Whether the cell is brightening or dimming
  speed: number; // Speed of the fade animation
}

interface BinaryProps {
  w: number; // Horizontal shape stretch
  h: number; // Vertical shape height
}

export default function BinaryBackground({ w, h }: BinaryProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    // ------------------------------------------------------------
    // CANVAS SETUP
    // Full-screen canvas (responsive with window size)
    // ------------------------------------------------------------
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 23; // Binary digit font size
    const spacing = fontSize * 1.45; // Distance between characters

    // Number of rows/columns determined by spacing grid
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    const chars = ["0", "1", "0"]; // Characters to pick randomly

    // Center of the mask shape
    const centerX = width / 2;
    const centerY = height / 2;

    // ------------------------------------------------------------
    // CREATE ANIMATED GRID
    // Each grid cell has its own fade animation values
    // ------------------------------------------------------------
    const grid: Cell[][] = [];
    for (let col = 0; col < cols; col++) {
      grid[col] = [];
      for (let row = 0; row < rows; row++) {
        grid[col][row] = {
          char: chars[Math.floor(Math.random() * chars.length)], // "0" or "1"
          alpha: Math.random(), // Start opacity
          fadingIn: Math.random() < 0.5, // Animation direction
          speed: 0.01 + Math.random() * 0.02, // Fade speed
        };
      }
    }

    // ------------------------------------------------------------
    // MASK FUNCTION — CONTROLS THE SHAPE OF THE BINARY AREA
    // Uses a superellipse-like formula to generate a rounded
    // capsule/eye shape with adjustable width & height.
    //
    // Returns 0 → invisible
    // Returns 1 → fully visible
    // Values between 0–1 fade out smoothly at edges
    // ------------------------------------------------------------
    const getMask = (x: number, y: number) => {
      const dx = (x - centerX) / (width * w); // Horizontal distortion
      const dy = (y - centerY) / (height * h); // Vertical distortion

      // Superellipse curve (soft rounded edges)
      const base = Math.pow(Math.abs(dx), 1.8) + Math.pow(Math.abs(dy), 4);

      // Inverse curve — center shows, edges fade
      let mask = 1 - base;

      // Additional vertical squeeze (flattens top/bottom)
      mask -= Math.abs(dy) * 0.25;

      // Clamp value into 0–1 range
      return Math.max(0, Math.min(1, mask * 1.35));
    };

    // ------------------------------------------------------------
    // MAIN ANIMATION LOOP
    // Clears canvas → draws binary → animates fading
    // ------------------------------------------------------------
    const animate = () => {
      // Clear background to black
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px monospace`;

      // Loop through all grid cells
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const cell = grid[col][row];

          const x = col * spacing;
          const y = row * spacing;

          // Mask determines whether cell is visible
          const mask = getMask(x, y);
          if (mask <= 0) continue;

          // Dynamic opacity based on fade animation + mask
          const brightness = 0.25 + cell.alpha * 0.55;
          const opacity = brightness * mask;

          // Render glowing binary text
          ctx.fillStyle = `rgba(0,150,255,${opacity * 0.5})`;
          ctx.fillText(cell.char, x, y);

          // Fade animation logic
          if (cell.fadingIn) {
            cell.alpha += cell.speed;
            if (cell.alpha >= 1) cell.fadingIn = false;
          } else {
            cell.alpha -= cell.speed;
            if (cell.alpha <= 0) cell.fadingIn = true;
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate(); // Start animation

    // ------------------------------------------------------------
    // WINDOW RESIZE HANDLER
    // Keeps the animation responsive
    // ------------------------------------------------------------
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Canvas element (translated vertically if needed)
  return <canvas ref={canvasRef} className={`inset-0 -z-10 w-full h-full`} />;
}
