import React, { useState, useEffect } from "react";
import { JJK_DOMAIN_THEMES, JJKDomainTheme } from "../config/constants";
import { playDomainExpansionSound, playBlackFlashSound, playClickSound } from "../utils/cyberSound";
import { X, Sparkles, Flame, Eye, Shield, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DomainExpansionOverlayProps {
  isOpen: boolean;
  activeDomain: JJKDomainTheme;
  onSelectDomain: (domain: JJKDomainTheme) => void;
  onClose: () => void;
}

export const DomainExpansionOverlay: React.FC<DomainExpansionOverlayProps> = ({
  isOpen,
  activeDomain,
  onSelectDomain,
  onClose
}) => {
  const [animStage, setAnimStage] = useState<"handseal" | "shatter" | "active">("handseal");

  useEffect(() => {
    if (isOpen) {
      setAnimStage("handseal");
      playDomainExpansionSound();

      const timer1 = setTimeout(() => {
        setAnimStage("shatter");
      }, 700);

      const timer2 = setTimeout(() => {
        setAnimStage("active");
      }, 1400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isOpen, activeDomain]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/95 select-none font-sans">
        {/* Fullscreen 4K Wallpaper of current domain */}
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${activeDomain.wallpaper})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        </motion.div>

        {/* Hand Seal & Initial Domain Rupture */}
        {animStage === "handseal" && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            className="relative z-20 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="font-barlow text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-cyan-400 to-purple-600 tracking-wider filter drop-shadow-[0_0_40px_rgba(220,38,38,0.7)]">
              DOMAIN EXPANSION
            </div>
            <div className="mt-4 font-mono text-lg sm:text-2xl text-white tracking-[0.3em] uppercase">
              BARRIER INITIATING
            </div>
            <div className="mt-2 text-xs sm:text-sm text-cyan-300 font-mono tracking-widest uppercase">
              RESONANCE: {activeDomain.name}
            </div>
          </motion.div>
        )}

        {/* Cursed Energy Shatter Sparks */}
        {animStage === "shatter" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full border-4 border-cyan-400/80 shadow-[0_0_120px_rgba(0,240,255,0.8)] animate-ping" />
            <div className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full border-2 border-red-500/80 shadow-[0_0_100px_rgba(255,0,85,0.8)]" />
          </motion.div>
        )}

        {/* Active Domain Selector HUD */}
        {animStage === "active" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-30 max-w-4xl w-full mx-4 bg-[#0d1622]/95 border-2 border-[#64cfe6]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.4)] backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="absolute top-5 right-5 text-[#9cafb7] hover:text-white bg-[#102d42] hover:bg-[#e75b2c] p-2 rounded-xl transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
              <Sparkles className="w-4 h-4 animate-spin text-cyan-300" />
              <span>SPECIAL GRADE CIVIL SORCERY · DOMAIN MANIFESTED</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1f3c52] pb-4 mb-6">
              <div>
                <h2 className="font-barlow text-3xl sm:text-4xl font-black text-white tracking-wide uppercase">
                  {activeDomain.name}
                </h2>
                <div className="font-mono text-xs sm:text-sm text-cyan-300 font-bold tracking-widest uppercase">
                  {activeDomain.japanese}
                </div>
              </div>
              <div className="font-mono text-xs px-3 py-1.5 rounded-xl bg-[#0b1721] border border-cyan-500/40 text-cyan-400 text-left sm:text-right">
                <span className="block text-[10px] text-[#9cafb7]">USER AFFILIATION</span>
                <span className="font-bold">{activeDomain.user}</span>
              </div>
            </div>

            {/* Technique Description */}
            <div className="bg-[#0b1721]/80 border border-[#29404c] rounded-2xl p-4 mb-6 text-xs sm:text-sm text-[#b8cfde]">
              <div className="flex items-center space-x-2 text-[#e75b2c] font-mono text-[11px] font-bold uppercase mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>INHERITED CIVIL TECHNIQUE: {activeDomain.cursedTechnique}</span>
              </div>
              <p>{activeDomain.description}</p>
            </div>

            {/* Switch Domain Expansions */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#9cafb7] uppercase tracking-wider block">
                SWITCH DOMAIN RESONANCE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                {JJK_DOMAIN_THEMES.map((theme) => {
                  const isCur = theme.id === activeDomain.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => {
                        playBlackFlashSound();
                        onSelectDomain(theme);
                      }}
                      className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                        isCur
                          ? "bg-[#14364f] border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.5)] scale-[1.02]"
                          : "bg-[#0b1721] border-[#29404c] hover:border-cyan-400/50"
                      }`}
                    >
                      <div className="w-full h-20 rounded-xl overflow-hidden mb-2 relative">
                        <img
                          src={theme.wallpaper}
                          alt={theme.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        {isCur && (
                          <span className="absolute top-1.5 right-1.5 text-[8px] font-mono px-1.5 py-0.5 rounded bg-cyan-400 text-black font-bold">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {theme.name}
                        </div>
                        <div className="font-serif text-[10px] text-cyan-400 line-clamp-1">
                          {theme.japanese.split("·")[0]}
                        </div>
                        <div className="font-mono text-[9px] text-[#9cafb7] mt-0.5 line-clamp-1">
                          {theme.user}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Continue Exploring CTA */}
            <div className="mt-6 pt-4 border-t border-[#1f3c52] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-[#9cafb7]">
                Theme applied across background, HUD telemetry, and 3D architectural viewer.
              </span>
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e75b2c] to-[#ff0055] hover:brightness-110 text-white font-mono text-xs font-bold shadow-[0_0_20px_rgba(231,91,44,0.5)] transition-all cursor-pointer uppercase tracking-wider"
              >
                ENGAGE BLUEPRINT DOMAIN ↗
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
