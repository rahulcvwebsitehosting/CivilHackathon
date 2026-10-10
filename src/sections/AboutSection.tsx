import React from "react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";
import { DecipherText } from "../components/DecipherText";
import { SpotlightCard } from "../components/SpotlightCard";
import { LiveWarRoomTelemetry } from "../components/LiveWarRoomTelemetry";
import { Building2, Leaf, Trophy, Award, Compass, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 z-10 max-w-6xl mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64cfe6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#102d42]/90 border border-cyan-400/40 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DEPARTMENT OF CIVIL ENGINEERING · SPECIAL GRADE SORCERY HACKATHON</span>
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-black text-white mb-4 tracking-wide">
          ABOUT{" "}
          <span className="text-cyan-400">
            <DecipherText text={CIVIL_EVENT_CONFIG.EVENT_NAME} />
          </span>
        </h2>
        <div className="max-w-3xl mx-auto border-l-4 border-cyan-400 pl-4 sm:pl-6 text-left bg-[#0b1721]/70 p-4 rounded-r-2xl border-y border-r border-[#1f3c52]">
          <p className="font-sans text-base sm:text-lg text-[#edf4f8] leading-relaxed mb-2">
            INNO360 2026 is a 12-hour multi-department hackathon where student engineers, designers, and innovators develop sustainable ecological solutions and advanced structural architectural models. Problems are revealed on the spot to test spontaneous creativity, engineering precision, and domain mastery.
          </p>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-300">
            <span className="font-mono font-bold text-xs text-red-400 uppercase">DOMAIN EXPANSION:</span>
            <span>Jujutsu Sorcery Theme · Parametric CAD Drafting · 41 College Bus Routes Direct Access</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SpotlightCard className="p-6 bg-[#102d42]/80 border-[#29404c] rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#0b1721] border border-[#e75b2c]/60 flex items-center justify-center text-[#e75b2c] mb-4 shadow-[0_0_15px_rgba(231,91,44,0.3)]">
            <Building2 className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="font-barlow text-2xl font-bold text-white mb-2">
            12-HOUR SPRINT
          </h3>
          <p className="font-sans text-xs text-[#b8cfde] leading-relaxed">
            From 8:00 AM to 8:00 PM on 15th October 2026 at Kailaimani A. Munusamy Mudaliyar Arangam. Rapid ideation, architectural CAD drafting, circuit wiring, and working prototypes.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 bg-[#102d42]/80 border-[#29404c] rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#0b1721] border border-[#bcf779]/60 flex items-center justify-center text-[#bcf779] mb-4 shadow-[0_0_15px_rgba(188,247,121,0.3)]">
            <Leaf className="w-6 h-6 animate-bounce" />
          </div>
          <h3 className="font-barlow text-2xl font-bold text-white mb-2">
            2 TARGETED THEMES
          </h3>
          <p className="font-sans text-xs text-[#b8cfde] leading-relaxed">
            <strong>EcoThon</strong> is open to all streams (12th+ / Arts / Diploma / Engg) for environmental solutions. <strong>CADathon</strong> is exclusively for Civil Engineering students.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 bg-[#102d42]/80 border-[#29404c] rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#0b1721] border border-[#64cfe6]/60 flex items-center justify-center text-[#64cfe6] mb-4 shadow-[0_0_15px_rgba(100,207,230,0.3)]">
            <Trophy className="w-6 h-6" />
          </div>
          <h3 className="font-barlow text-2xl font-bold text-white mb-2">
            ATTRACTIVE CASH PRIZES
          </h3>
          <p className="font-sans text-xs text-[#b8cfde] leading-relaxed">
            Cash awards for winning teams, physical certificates for all participants, and wholesome lunch + refreshments included for every registered student.
          </p>
        </SpotlightCard>
      </div>

      <LiveWarRoomTelemetry />
    </section>
  );
};
