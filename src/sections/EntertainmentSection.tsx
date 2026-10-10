import React, { useState } from "react";
import { SpotlightCard } from "../components/SpotlightCard";
import { playClickSound, playSuccessSound } from "../utils/cyberSound";
import { Printer, Compass, Award, Zap, Timer, CheckCircle, Crosshair } from "lucide-react";

export const EntertainmentSection: React.FC = () => {
  // CAD Precision Reaction Challenge
  const [gameState, setGameState] = useState<"idle" | "waiting" | "ready" | "too-early" | "success">("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [readyTimestamp, setReadyTimestamp] = useState<number | null>(null);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const startTest = () => {
    playClickSound();
    setGameState("waiting");
    setReactionTime(null);
    const delay = Math.floor(Math.random() * 2000) + 1500;
    const tid = setTimeout(() => {
      setGameState("ready");
      setReadyTimestamp(Date.now());
    }, delay);
    setTimerId(tid);
  };

  const handleClickTarget = () => {
    if (gameState === "waiting") {
      if (timerId) clearTimeout(timerId);
      setGameState("too-early");
      playClickSound();
    } else if (gameState === "ready" && readyTimestamp) {
      const time = Date.now() - readyTimestamp;
      setReactionTime(time);
      setGameState("success");
      playSuccessSound();
    }
  };

  const activities = [
    {
      icon: Printer,
      title: "Live 3D Concrete Printing Demo",
      tag: "CENTRE OF EXCELLENCE",
      desc: "Experience live robotic additive manufacturing as ESEC's gantry 3D printer extrudes mortar layer-by-layer directly from digital toolpaths.",
      badge: "In-House Lab Demo",
      color: "text-[#e75b2c]"
    },
    {
      icon: Compass,
      title: "Parametric CAD & Structural Hub",
      tag: "HANDS-ON MENTORSHIP",
      desc: "Faculty mentors and industry structural consultants available for on-the-spot technical advice on load framing and CAD detailing.",
      badge: "Industry Mentors",
      color: "text-[#64cfe6]"
    },
    {
      icon: Award,
      title: "Spot Trivia & Speed Modeling",
      tag: "INSTANT REWARDS",
      desc: "Participate in spontaneous civil engineering and sustainability quizzes between review sessions to win instant spot rewards and goodies.",
      badge: "Spot Awards",
      color: "text-[#bcf779]"
    }
  ];

  return (
    <section id="activities" className="relative py-16 sm:py-20 px-4 z-10 max-w-6xl mx-auto select-none">
      <div className="text-center mb-12">
        <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
          // EXPERIENTIAL LEARNING & LAB EXCELLENCE
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          CAMPUS LABS & <span className="text-[#64cfe6]">INTERACTIVE SPOT CHALLENGES</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] max-w-xl mx-auto mt-2">
          Beyond the intense 12-hour build sprint, explore live 3D concrete printing robotics, mentor sessions, and precision speed tests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {activities.map((act, idx) => {
          const Icon = act.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-6 sm:p-7 bg-[#102d42]/90 border-[#29404c] rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-[#9cafb7] font-semibold uppercase tracking-wider">
                    {act.tag}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#0b1721] border border-[#29404c] ${act.color}`}>
                    {act.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#0b1721] border border-[#29404c] flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${act.color}`} />
                </div>

                <h3 className="font-barlow text-2xl font-bold text-white mb-2">
                  {act.title}
                </h3>

                <p className="font-sans text-xs text-[#b8cfde] leading-relaxed mb-4">
                  {act.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1f3c52] flex items-center text-[10px] font-mono text-[#64cfe6]">
                <span>✓ Included for all participants</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Interactive CAD Snap Reflex Game */}
      <div className="bg-[#0b1721] border-2 border-[#29404c] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center shadow-xl">
        <div className="flex items-center justify-center space-x-2 font-mono text-xs text-[#64cfe6] uppercase tracking-wider mb-2">
          <Crosshair className="w-4 h-4 text-[#e75b2c]" />
          <span>CAD PRECISION REFLEX CHALLENGE</span>
        </div>
        <h3 className="font-barlow text-2xl sm:text-3xl font-extrabold text-white mb-2">
          TEST YOUR DRAFTING SNAP TIME
        </h3>
        <p className="font-sans text-xs text-[#9cafb7] max-w-md mx-auto mb-6">
          Architectural draftsmen need lightning precision. Click Start, wait for the screen to turn green, and click as fast as you can!
        </p>

        {gameState === "idle" && (
          <button
            type="button"
            onClick={startTest}
            className="px-6 py-3 rounded-xl bg-[#e75b2c] hover:bg-[#ff7b47] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            START PRECISION TEST
          </button>
        )}

        {gameState === "waiting" && (
          <div
            onClick={handleClickTarget}
            className="h-32 rounded-xl bg-[#1f3c52] border border-[#29404c] flex flex-col items-center justify-center cursor-pointer select-none"
          >
            <Timer className="w-8 h-8 text-[#64cfe6] animate-pulse mb-2" />
            <span className="font-mono text-xs text-white uppercase tracking-wider">
              WAIT FOR GREEN...
            </span>
          </div>
        )}

        {gameState === "ready" && (
          <div
            onClick={handleClickTarget}
            className="h-32 rounded-xl bg-[#1b4332] border-2 border-[#bcf779] flex flex-col items-center justify-center cursor-pointer select-none shadow-[0_0_30px_rgba(188,247,121,0.5)] animate-pulse"
          >
            <Zap className="w-10 h-10 text-[#bcf779] mb-1" />
            <span className="font-barlow text-3xl font-black text-white uppercase">
              CLICK NOW!
            </span>
          </div>
        )}

        {gameState === "too-early" && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 font-mono text-xs">
              Too early! You clicked before the signal.
            </div>
            <button
              type="button"
              onClick={startTest}
              className="px-5 py-2.5 rounded-lg bg-[#102d42] border border-[#29404c] text-white font-mono text-xs hover:border-[#64cfe6] cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {gameState === "success" && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#102d42] border border-[#bcf779] text-white">
              <span className="font-mono text-xs text-[#bcf779] block mb-1">
                EXCELLENT SNAP PRECISION!
              </span>
              <strong className="font-barlow text-4xl text-white block">
                {reactionTime} ms
              </strong>
              <span className="font-mono text-[11px] text-[#9cafb7]">
                {reactionTime && reactionTime < 240
                  ? "⚡ Superhuman Drafting Reflexes!"
                  : reactionTime && reactionTime < 350
                  ? "🎯 Expert Structural Precision!"
                  : "📐 Solid Engineering Reflexes!"}
              </span>
            </div>
            <button
              type="button"
              onClick={startTest}
              className="px-5 py-2.5 rounded-lg bg-[#e75b2c] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ff7b47] cursor-pointer"
            >
              Test Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
