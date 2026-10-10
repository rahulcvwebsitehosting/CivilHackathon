import React, { useEffect, useRef, useState } from "react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("INITIALIZING CAD BLUEPRINT WORKSPACE...");
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setPercent(progress);

      if (progress > 25 && progress <= 55) {
        setStatusMessage("LOADING 3D STRUCTURAL & CONCRETE GANTRY MODULES...");
      } else if (progress > 55 && progress <= 85) {
        setStatusMessage("COMPUTING ECOTHON & CADATHON CHALLENGE MATRICES...");
      } else if (progress > 85) {
        setStatusMessage("BLUEPRINT READY • SYSTEM ONLINE");
      }

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            onFinishRef.current?.();
          }, 500);
        }, 150);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b1721] text-white transition-opacity duration-500 select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-lg w-full">
        {/* Emblem & Rotating CAD Reticle */}
        <div className="mx-auto w-32 h-32 sm:w-36 sm:h-36 mb-6 relative flex items-center justify-center">
          <div className="absolute -inset-3 rounded-full border border-[#64cfe6]/30 border-dashed animate-[spin_16s_linear_infinite]" />
          <div className="absolute -inset-1 rounded-full border border-[#e75b2c]/40 animate-pulse" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 bg-[#102d42] border border-[#64cfe6]/40 flex items-center justify-center shadow-[0_0_30px_rgba(100,207,230,0.3)]">
            <img
              src="/assets/college-transparent.png"
              alt="Erode Sengunthar Engineering College"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#e75b2c] tracking-widest uppercase mb-1">
          {CIVIL_EVENT_CONFIG.DEPARTMENT}
        </div>
        <h1 className="font-barlow text-4xl sm:text-5xl font-extrabold tracking-wider text-white mb-1">
          {CIVIL_EVENT_CONFIG.EVENT_NAME}
        </h1>
        <p className="text-[#64cfe6] font-mono text-[11px] sm:text-xs tracking-wider uppercase mb-6">
          {statusMessage}
        </p>

        {/* Progress bar */}
        <div className="w-full bg-[#08121a] border border-[#29404c] rounded-full h-3 p-0.5 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-[#e75b2c] via-[#64cfe6] to-[#bcf779] h-full rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#64cfe6]"
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] font-mono text-[#9cafb7] mt-2">
          <span>{CIVIL_EVENT_CONFIG.COLLEGE_NAME} (AUTONOMOUS)</span>
          <span className="text-[#64cfe6] font-bold">{Math.min(percent, 100)}%</span>
        </div>
      </div>
    </div>
  );
};
