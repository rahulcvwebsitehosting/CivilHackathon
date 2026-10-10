import React, { useState } from "react";
import { playBlackFlashSound, playHoverSound } from "../utils/cyberSound";
import { motion } from "motion/react";

interface Talisman {
  id: number;
  kanji: string;
  romaji: string;
  meaning: string;
  top: string;
  left: string;
  rotation: number;
  duration: number;
  delay: number;
}

const TALISMANS: Talisman[] = [
  {
    id: 1,
    kanji: "DOMAIN",
    romaji: "DOMAIN EXPANSION",
    meaning: "Special Grade Barrier",
    top: "12%",
    left: "5%",
    rotation: -12,
    duration: 6,
    delay: 0
  },
  {
    id: 2,
    kanji: "LIMITLESS",
    romaji: "UNLIMITED VOID",
    meaning: "Infinite Spatial Void",
    top: "28%",
    left: "92%",
    rotation: 14,
    duration: 7,
    delay: 1.2
  },
  {
    id: 3,
    kanji: "BLACK FLASH",
    romaji: "CRITICAL IMPACT",
    meaning: "Spatial Distortion",
    top: "65%",
    left: "3%",
    rotation: 8,
    duration: 6.5,
    delay: 0.8
  },
  {
    id: 4,
    kanji: "SHRINE",
    romaji: "MALEVOLENT SHRINE",
    meaning: "Cleave Foundation",
    top: "82%",
    left: "91%",
    rotation: -10,
    duration: 8,
    delay: 1.5
  },
  {
    id: 5,
    kanji: "SPECIAL GRADE",
    romaji: "CURSED RELIC",
    meaning: "Civil Sorcery",
    top: "48%",
    left: "94%",
    rotation: -6,
    duration: 7.2,
    delay: 2.1
  }
];

export const JJKCursedTalismans: React.FC = () => {
  const [activeTalisman, setActiveTalisman] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none hidden lg:block">
      {TALISMANS.map((t) => {
        const isHovered = activeTalisman === t.id;
        return (
          <motion.div
            key={t.id}
            initial={{ y: 0, rotate: t.rotation }}
            animate={{
              y: [-12, 12, -12],
              rotate: [t.rotation - 3, t.rotation + 3, t.rotation - 3]
            }}
            transition={{
              duration: t.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: t.delay
            }}
            onMouseEnter={() => {
              setActiveTalisman(t.id);
              playHoverSound();
            }}
            onMouseLeave={() => setActiveTalisman(null)}
            onClick={() => {
              playBlackFlashSound();
            }}
            style={{ top: t.top, left: t.left }}
            className="absolute pointer-events-auto cursor-pointer group"
          >
            {/* Japanese Ofuda Paper Talisman */}
            <div
              className={`w-14 py-4 px-1.5 rounded-sm bg-[#fff8eb] text-[#851616] border-2 border-[#b91c1c] shadow-[0_4px_25px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                isHovered
                  ? "shadow-[0_0_30px_rgba(255,0,85,0.9)] border-red-500 scale-110"
                  : "opacity-75 hover:opacity-100"
              }`}
            >
              {/* Top Seal Stamp */}
              <div className="w-5 h-5 rounded-full border border-[#b91c1c] flex items-center justify-center text-[7px] font-mono font-black mb-1 bg-[#ffedd5] text-[#991b1b]">
                SEAL
              </div>

              {/* Vertical English Sorcery Name */}
              <div
                className="font-mono font-black text-[11px] tracking-wider flex flex-col items-center leading-tight py-1 select-none text-red-900"
              >
                {t.kanji}
              </div>

              {/* Bottom Cursed Energy Flame */}
              <div className="text-[8px] font-mono text-[#991b1b] mt-1 tracking-tighter">
                JJK-01
              </div>
            </div>

            {/* Hover Tooltip Card */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: t.left.includes("9") ? -130 : 70 }}
                animate={{ opacity: 1, scale: 1, x: t.left.includes("9") ? -130 : 70 }}
                className="absolute top-1/2 -translate-y-1/2 bg-[#0b1721] border border-cyan-400 p-2.5 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.5)] z-30 pointer-events-none w-36"
              >
                <div className="text-[10px] font-mono text-cyan-300 font-bold uppercase">
                  {t.romaji}
                </div>
                <div className="text-xs font-bold text-white">
                  {t.meaning}
                </div>
                <div className="text-[9px] text-[#9cafb7] font-mono mt-0.5">
                  Click to surge Cursed Energy
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
