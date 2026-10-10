import React from "react";
import { SpotlightCard } from "../components/SpotlightCard";
import { Trophy, Award, Gift, Sparkles, CheckCircle2 } from "lucide-react";
import { playClickSound } from "../utils/cyberSound";

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="relative py-16 sm:py-20 px-4 z-10 max-w-6xl mx-auto select-none">
      <div className="text-center mb-12">
        <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
          // AWARDS & RECOGNITION
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          ATTRACTIVE <span className="text-[#64cfe6]">CASH PRIZES</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] max-w-xl mx-auto mt-2">
          Rewarding outstanding structural engineering designs, sustainable ecological solutions, and innovative engineering prototypes.
        </p>
      </div>

      {/* Prize Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SpotlightCard
          spotlightColor="rgba(231, 91, 44, 0.2)"
          className="p-6 sm:p-8 bg-[#102d42]/90 border-[#e75b2c] text-center rounded-2xl relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0b1721] border border-[#e75b2c] flex items-center justify-center mx-auto mb-4 text-[#e75b2c] shadow-[0_0_20px_rgba(231,91,44,0.3)]">
            <Trophy className="w-7 h-7" />
          </div>
          <span className="font-mono text-xs text-[#e75b2c] font-bold uppercase tracking-wider">
            🥇 1ST PLACE · CHAMPIONS
          </span>
          <h3 className="font-barlow text-3xl font-extrabold text-white mt-1 mb-2">
            GRAND PRIZE WINNERS
          </h3>
          <p className="font-sans text-xs text-[#b8cfde] leading-relaxed mb-4">
            Attractive Cash Prize, Winner Trophies, Champion Medals, and Special Commendation from the ESEC Civil Engineering Board.
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-[#e75b2c]/20 border border-[#e75b2c]/50 text-[#e75b2c] font-mono text-[10px] font-bold uppercase tracking-wider">
            CASH PRIZE + TROPHY
          </span>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(100, 207, 230, 0.2)"
          className="p-6 sm:p-8 bg-[#102d42]/90 border-[#64cfe6] text-center rounded-2xl relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0b1721] border border-[#64cfe6] flex items-center justify-center mx-auto mb-4 text-[#64cfe6] shadow-[0_0_20px_rgba(100,207,230,0.3)]">
            <Award className="w-7 h-7" />
          </div>
          <span className="font-mono text-xs text-[#64cfe6] font-bold uppercase tracking-wider">
            🥈 2ND PLACE · RUNNER UP
          </span>
          <h3 className="font-barlow text-3xl font-extrabold text-white mt-1 mb-2">
            RUNNERS UP AWARD
          </h3>
          <p className="font-sans text-xs text-[#b8cfde] leading-relaxed mb-4">
            Cash Prize, Runner-Up Trophies, Medals of Excellence, and Department Certificates of Merit.
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-[#64cfe6]/20 border border-[#64cfe6]/50 text-[#64cfe6] font-mono text-[10px] font-bold uppercase tracking-wider">
            CASH PRIZE + TROPHY
          </span>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(188, 247, 121, 0.2)"
          className="p-6 sm:p-8 bg-[#102d42]/90 border-[#bcf779] text-center rounded-2xl relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0b1721] border border-[#bcf779] flex items-center justify-center mx-auto mb-4 text-[#bcf779] shadow-[0_0_20px_rgba(188,247,121,0.3)]">
            <Sparkles className="w-7 h-7" />
          </div>
          <span className="font-mono text-xs text-[#bcf779] font-bold uppercase tracking-wider">
            🥉 TRACK SPECIAL MENTIONS
          </span>
          <h3 className="font-barlow text-3xl font-extrabold text-white mt-1 mb-2">
            INNOVATION HONOURS
          </h3>
          <p className="font-sans text-xs text-[#b8cfde] leading-relaxed mb-4">
            Cash Rewards, Innovation Certificates, and Jury Citations for standout architectural creativity and sustainability engineering.
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-[#bcf779]/20 border border-[#bcf779]/50 text-[#bcf779] font-mono text-[10px] font-bold uppercase tracking-wider">
            SPECIAL RECOGNITION
          </span>
        </SpotlightCard>
      </div>

      {/* Participation Certificate Guarantee */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0b1721] border border-[#29404c] text-xs font-mono text-[#edf4f8] shadow-md">
          <CheckCircle2 className="w-4 h-4 text-[#bcf779]" />
          <span>PHYSICAL CERTIFICATES WILL BE AWARDED TO ALL REGISTERED PARTICIPANTS</span>
        </div>
      </div>
    </section>
  );
};
