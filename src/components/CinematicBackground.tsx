import React, { useEffect, useRef, useState } from "react";
import { useDomainTheme } from "../context/DomainThemeContext";

interface CursedParticle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  alpha: number;
  color: string;
}

export const CinematicBackground: React.FC = () => {
  const { activeDomain } = useDomainTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: CursedParticle[] = [];
    const count = window.innerWidth < 768 ? 30 : 65;

    const colors = activeDomain.id === "malevolent_shrine"
      ? ["#ff0055", "#e11d48", "#f59e0b", "#fbbf24"]
      : activeDomain.id === "unlimited_void"
      ? ["#00f0ff", "#38bdf8", "#a855f7", "#c084fc"]
      : ["#38bdf8", "#818cf8", "#c084fc", "#e879f9"];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [activeDomain]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Top Engineering & Cursed Energy Scroll Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#102d42] z-50">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(to right, ${activeDomain.accent}, ${activeDomain.secondaryAccent})`,
            boxShadow: `0 0 12px ${activeDomain.accent}`
          }}
        />
      </div>

      {/* Deep Base Background */}
      <div className="absolute inset-0 bg-[#060a10]" />

      {/* Jujutsu Kaisen 4K Wallpaper Layer - Prominent, Rich, Cinematic */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-85 md:opacity-92 filter contrast-105 saturate-115"
        style={{
          backgroundImage: `url(${activeDomain.wallpaper})`,
          transform: `scale(${1 + scrollProgress * 0.03}) translateY(${-scrollProgress * 20}px)`
        }}
      />

      {/* Atmospheric Cursed Aura Radial Glow from active domain */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none mix-blend-screen opacity-35"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${activeDomain.glow}, transparent 70%)`
        }}
      />

      {/* Legibility Vignette - Balances text clarity without hiding the epic anime visuals */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a10]/60 via-[#060a10]/20 to-[#060a10]/75" />

      {/* Blueprint Grid & Spatial Coordinates */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 mix-blend-overlay" />

      {/* Floating Cursed Energy Sparks & Mote Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
