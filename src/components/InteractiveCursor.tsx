import React, { useEffect, useRef, useState } from "react";

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxLife: number;
  life: number;
  color: string;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const InteractiveCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "active">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: SparkParticle[] = [];
    let prevX = -100;
    let prevY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });
      setCoords({ x: Math.round(x * 1.5), y: Math.round(y * 1.5) });
      if (!isVisible) setIsVisible(true);

      const dx = x - prevX;
      const dy = y - prevY;
      const speed = Math.hypot(dx, dy);

      if (speed > 5) {
        const count = Math.min(Math.floor(speed / 6), 2);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: x + (Math.random() - 0.5) * 4,
            y: y + (Math.random() - 0.5) * 4,
            vx: (Math.random() - 0.5) * 0.8 - dx * 0.05,
            vy: (Math.random() - 0.5) * 0.8 - dy * 0.05,
            size: Math.random() * 2 + 1,
            maxLife: 20,
            life: 0,
            color: Math.random() > 0.5 ? "#64cfe6" : "#e75b2c"
          });
        }
      }
      prevX = x;
      prevY = y;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer") ||
        target.getAttribute("role") === "button" ||
        target.tagName === "INPUT" ||
        target.tagName === "SUMMARY"
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setCursorState("active");
      const rip: ClickRipple = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev.slice(-3), rip]);

      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 1;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 1,
          maxLife: 25,
          life: 0,
          color: i % 2 === 0 ? "#e75b2c" : "#64cfe6"
        });
      }
    };

    const handleMouseUp = () => {
      setCursorState("hover");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationFrame: number;
    const render = () => {
      animationFrame = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        const norm = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - norm);

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - norm * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.8;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none hidden md:block">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {ripples.map(r => (
        <div
          key={r.id}
          onAnimationEnd={() => setRipples(prev => prev.filter(x => x.id !== r.id))}
          className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e75b2c] animate-ping"
          style={{
            left: r.x,
            top: r.y,
            width: "36px",
            height: "36px",
            boxShadow: "0 0 15px rgba(231, 91, 44, 0.7)",
            animationDuration: "0.5s"
          }}
        />
      ))}

      {/* CAD Crosshairs & Measurement Reticle */}
      <div
        className="fixed top-0 left-0 pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Reticle Circle */}
          <div
            className={`w-7 h-7 rounded-full border transition-all duration-200 flex items-center justify-center ${
              cursorState === "hover"
                ? "border-[#e75b2c] scale-125 bg-[#e75b2c]/10 shadow-[0_0_12px_rgba(231,91,44,0.6)]"
                : cursorState === "active"
                ? "border-[#64cfe6] scale-90 bg-[#64cfe6]/20 shadow-[0_0_15px_rgba(100,207,230,0.8)]"
                : "border-[#64cfe6]/60 bg-transparent shadow-[0_0_8px_rgba(100,207,230,0.3)]"
            }`}
          >
            {/* Center Snap Dot */}
            <div
              className={`w-1 h-1 rounded-full ${
                cursorState === "hover" ? "bg-[#e75b2c]" : "bg-[#64cfe6]"
              }`}
            />
          </div>

          {/* Crosshair Hairlines */}
          <div className="absolute top-1/2 left-[-16px] w-[12px] h-[1px] bg-[#64cfe6]/70 -translate-y-1/2" />
          <div className="absolute top-1/2 right-[-16px] w-[12px] h-[1px] bg-[#64cfe6]/70 -translate-y-1/2" />
          <div className="absolute left-1/2 top-[-16px] h-[12px] w-[1px] bg-[#64cfe6]/70 -translate-x-1/2" />
          <div className="absolute left-1/2 bottom-[-16px] h-[12px] w-[1px] bg-[#64cfe6]/70 -translate-x-1/2" />

          {/* Precision Coordinates HUD Tag */}
          <div className="absolute left-4 top-4 bg-[#0b1721]/90 border border-[#64cfe6]/30 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#64cfe6] whitespace-nowrap shadow-sm backdrop-blur-xs flex items-center gap-1">
            <span className="text-[#e75b2c]">CAD</span>
            <span>X:{coords.x} Y:{coords.y}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
