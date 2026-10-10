import React, { useState, useEffect } from "react";
import { playClickSound, speakSpeech } from "../utils/cyberSound";
import { X, Volume2, Bot, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";

const CIVIL_TIPS = [
  "🚌 41 College Bus Routes covering Erode, Tirupur, Gobi, Chennimalai & Salem borders!",
  "📞 Transport Manager N. Senthilkumar available at 99768 65500 for pickup guidance!",
  "⚡ Domain Expansion: Click DOMAIN in the navbar to unleash Gojo & Sukuna 4K resonances!",
  "🏗️ 12-Hour Multi-Department Hackathon on 15th October 2026 at Kailaimani Arangam!",
  "🌱 EcoThon is open to ALL streams (12th+ / Arts / Diploma / Science / Engg)!",
  "📐 CADathon is exclusively for Civil Engineering students (AutoCAD / STAAD / Revit)!",
  "🏆 Attractive Cash Prizes and physical certificates for all participants!",
  "🍱 Wholesome lunch & refreshments included for every team member!",
  "👥 Team size: 3 or 4 members (₹250 per student; ₹750 for 3, ₹1,000 for 4)!",
  "🖨️ Check out ESEC's in-house Gantry 3D Concrete Printing Centre!",
  "📞 Coordinator Hotline: Faculty Mr. K. Vallarasu: 63818 86719!"
];

export const CyberBotAssistant: React.FC = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const interval = setInterval(() => {
      setTipIndex(prev => (prev + 1) % CIVIL_TIPS.length);
      setIsOpen(true);
      const dismissTimer = setTimeout(() => setIsOpen(false), isMobile ? 4000 : 6000);
      return () => clearTimeout(dismissTimer);
    }, isMobile ? 30000 : 18000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    playClickSound();
    const nextIdx = (tipIndex + 1) % CIVIL_TIPS.length;
    setTipIndex(nextIdx);
    setIsOpen(true);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) {
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speakSpeech(
        CIVIL_TIPS[tipIndex],
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }
  };

  return (
    <div className="fixed bottom-14 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end select-none pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.88 }}
            transition={{ duration: 0.25 }}
            className="mb-2 max-w-[280px] sm:max-w-xs bg-[#0b1721]/95 border border-[#64cfe6]/50 rounded-xl p-3 shadow-2xl backdrop-blur-md text-xs relative"
          >
            <div className="flex items-center justify-between border-b border-[#29404c] pb-1.5 mb-1.5">
              <span className="font-mono text-[10px] text-[#e75b2c] font-bold tracking-wider flex items-center gap-1">
                <Bot className="w-3 h-3 text-[#64cfe6]" />
                <span>INNOBOT · CIVIL GUIDE</span>
              </span>
              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={handleSpeak}
                  className={`p-1 rounded text-[10px] cursor-pointer ${
                    isSpeaking ? "text-[#e75b2c] bg-[#e75b2c]/20" : "text-[#64cfe6] hover:bg-[#102d42]"
                  }`}
                  title="Listen to tip"
                >
                  <Volume2 className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <p className="text-[#edf4f8] text-[11px] leading-relaxed font-sans">
              {CIVIL_TIPS[tipIndex]}
            </p>

            <div className="mt-2 pt-1 border-t border-[#1f3c52] flex items-center justify-between text-[9px] font-mono text-[#9cafb7]">
              <span>Tip {tipIndex + 1}/{CIVIL_TIPS.length}</span>
              <button
                type="button"
                onClick={handleClick}
                className="text-[#64cfe6] hover:underline cursor-pointer"
              >
                Next Tip →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bot Button */}
      <button
        type="button"
        onClick={handleClick}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#102d42] to-[#0b1721] border-2 border-[#64cfe6] hover:border-[#e75b2c] shadow-[0_0_20px_rgba(100,207,230,0.4)] flex items-center justify-center text-[#64cfe6] hover:text-[#e75b2c] transition-all transform hover:scale-105 active:scale-95 cursor-pointer group"
        title="Ask InnoBot for Event Info"
      >
        <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
