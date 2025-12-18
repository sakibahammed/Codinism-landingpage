"use client";
import { useEffect, useRef } from "react";

interface Cell {
  char: string;
  alpha: number;
  fadingIn: boolean;
  speed: number;
}

export default function Codinism() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    // Text + grid spacing
    const fontSize = 23;
    const spacing = fontSize * 1.45;

    // Number of binary rows
    const rows = 15;

    // Canvas size based on screen width and row count
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = rows * spacing);

    // Number of columns based on spacing
    const cols = Math.floor(width / spacing);

    // Characters used
    const chars = ["0", "1", "0"];

    /*
     * ---------------------------------------------------------
     * ELLIPSE MASK SETTINGS
     * radiusX — controls how wide the ellipse is (horizontal)
     * radiusY — controls the vertical height of the ellipse
     * Increase radiusX to make the shape wider
     * ---------------------------------------------------------
     */
    const radiusY = height * 1;
    const radiusX = width * 0.5;

    // Ellipse center
    const centerX = width / 2;
    const centerY = height / 2;

    // Grid of animated binary cells
    const grid: Cell[][] = [];
    for (let col = 0; col < cols; col++) {
      grid[col] = [];
      for (let row = 0; row < rows; row++) {
        grid[col][row] = {
          char: chars[Math.floor(Math.random() * chars.length)],
          alpha: Math.random(), // current brightness
          fadingIn: Math.random() < 0.5, // fade direction
          speed: 0.01 + Math.random() * 0.02, // fade speed
        };
      }
    }

    /*
     * ---------------------------------------------------------
     * ELLIPSE MASK FUNCTION
     * Returns a value (0–1) representing how strong the pixel
     * should show depending on its distance from the ellipse
     * center.
     * dist > 1 → outside ellipse → fully invisible
     * dist close to 0 → center → strongest
     * ---------------------------------------------------------
     */
    const getMask = (x: number, y: number) => {
      const dx = (x - centerX) / radiusX;
      const dy = (y - centerY) / radiusY;

      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1) return 0; // outside ellipse

      return 1 - dist; // smooth fade toward edges
    };

    // Canvas text settings
    ctx.font = `bold ${fontSize}px monospace`;
    ctx.textBaseline = "top";

    /*
     * ---------------------------------------------------------
     * MAIN ANIMATION LOOP
     * Draws background → then binary → applies fading + mask
     * ---------------------------------------------------------
     */
    const animate = () => {
      // Clear background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Draw all binary characters
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const cell = grid[col][row];
          const x = col * spacing;
          const y = row * spacing;

          // Ellipse masking
          const mask = getMask(x, y);
          if (mask <= 0) continue; // skip outside area

          // Animated brightness
          const brightness = 0.25 + cell.alpha * 0.55;
          const opacity = brightness * mask;

          // Blue glow text
          ctx.fillStyle = `rgba(0,150,255,${opacity * 0.6})`;
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

    animate();

    /*
     * ---------------------------------------------------------
     * AUTO-RESIZE HANDLER
     * Ensures canvas width updates when window size changes
     * ---------------------------------------------------------
     */
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = rows * spacing;
    });
  }, []);

  return <canvas ref={canvasRef} className="w-full block -z-10" />;
}
