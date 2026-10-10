import React from "react";
import { CIVIL_THEMES, CIVIL_EVENT_CONFIG } from "../config/constants";
import { SpotlightCard } from "../components/SpotlightCard";
import { JJKCharacterShowcase } from "../components/JJKCharacterShowcase";
import { Leaf, Building2, ExternalLink, Sparkles, Cpu, Layers, Zap } from "lucide-react";
import { playClickSound, playBlackFlashSound, playDomainExpansionSound } from "../utils/cyberSound";

export const DomainsSection: React.FC = () => {
  return (
    <section id="tracks" className="relative py-16 sm:py-20 px-4 z-10 max-w-6xl mx-auto">
      {/* Background Subtle Watermark */}
      <div className="absolute top-10 right-0 font-mono text-[100px] font-black text-white/5 select-none pointer-events-none">
        DOMAINS
      </div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#102d42]/90 border border-cyan-400/40 font-mono text-xs text-cyan-300 tracking-widest uppercase mb-2">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>2 TARGETED HACKATHON DOMAINS · SPECIAL GRADE TRACKS</span>
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-black text-white tracking-wide mb-3">
          2 BATTLE <span className="text-cyan-400">GROUNDS.</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] max-w-xl mx-auto">
          Problems revealed spontaneously on the spot to ensure engineering fairness and raw creative ingenuity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* THEME 1: EcoThon */}
        <SpotlightCard
          spotlightColor="rgba(188, 247, 121, 0.25)"
          className="p-6 sm:p-8 flex flex-col justify-between bg-[#102d42]/95 border-[#29404c] hover:border-[#bcf779] rounded-2xl relative overflow-hidden transition-all shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#9cafb7] mb-3">
              <span className="text-[#bcf779] font-bold">THEME 1 · ECO-SORCERY</span>
              <span className="px-2.5 py-0.5 rounded border border-[#bcf779]/40 text-[#bcf779] bg-[#bcf779]/10 text-[10px] font-bold">
                OPEN TO ALL STREAMS · 12TH+
              </span>
            </div>

            {/* Visual 4K Artwork Header - JJK Generated EcoThon */}
            <div className="h-48 relative rounded-xl overflow-hidden mb-4 border border-[#bcf779]/30 group">
              <img
                src="/assets/jjk/jjk-ecothon.jpg"
                alt="EcoThon Megumi Divine Beast Bio-Reactor"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102d42] via-black/30 to-transparent" />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[#bcf779] font-mono text-[9px] font-bold flex items-center space-x-1">
                <Leaf className="w-3 h-3" />
                <span>NATURE ENERGY & BIO-ENGINEERING</span>
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-white font-bold text-xs">SHIKIGAMI BIO-REACTOR SYSTEM</span>
                <span className="font-mono text-[9px] text-[#bcf779] font-bold">ALL STREAMS</span>
              </div>
            </div>

            <h3 className="font-barlow text-4xl sm:text-5xl font-black text-white mb-2">
              EcoThon
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#b8cfde] leading-relaxed mb-6">
              Solve an urgent environmental, climate, or sustainability crisis using AI, IoT, software, embedded hardware, or automation. Open to <strong>all streams</strong>, including Arts, Science, Diploma, and all Engineering branches. Students at 12th-standard level and above can participate.
            </p>
          </div>

          <div>
            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["AI / IOT SUSTAINABILITY", "SOFTWARE / HARDWARE", "GREEN AUTOMATION", "WASTE RECLAMATION"].map(chip => (
                <span
                  key={chip}
                  className="font-mono text-[9px] px-2.5 py-1 rounded bg-[#0b1721] border border-[#bcf779]/30 text-[#bcf779]"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Foot */}
            <div className="pt-4 border-t border-[#29404c] flex items-center justify-between text-xs font-mono">
              <span className="text-[#9cafb7]">Problem given on the spot</span>
              <a
                href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playBlackFlashSound()}
                className="text-[#bcf779] hover:underline font-bold flex items-center gap-1"
              >
                <span>Register for EcoThon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </SpotlightCard>

        {/* THEME 2: CADathon */}
        <SpotlightCard
          spotlightColor="rgba(0, 240, 255, 0.25)"
          className="p-6 sm:p-8 flex flex-col justify-between bg-[#102d42]/95 border-[#29404c] hover:border-cyan-400 rounded-2xl relative overflow-hidden transition-all shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#9cafb7] mb-3">
              <span className="text-cyan-400 font-bold">THEME 2 · INFINITY CAD DRAFTING</span>
              <span className="px-2.5 py-0.5 rounded border border-cyan-400/40 text-cyan-400 bg-cyan-400/10 text-[10px] font-bold">
                CIVIL ENGINEERING ONLY
              </span>
            </div>

            {/* Visual 4K Artwork Header - JJK Generated CADathon */}
            <div className="h-48 relative rounded-xl overflow-hidden mb-4 border border-cyan-400/30 group">
              <img
                src="/assets/jjk/jjk-cadathon.jpg"
                alt="CADathon Gojo Style Cursed Matrix Blueprint"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102d42] via-black/30 to-transparent" />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-cyan-300 font-mono text-[9px] font-bold flex items-center space-x-1">
                <Building2 className="w-3 h-3" />
                <span>LIMITLESS STRUCTURAL CAD MATRIX</span>
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-white font-bold text-xs">GOJO ARCHITECTURAL MATRIX</span>
                <span className="font-mono text-[9px] text-cyan-300 font-bold">CIVIL EXCLUSIVE</span>
              </div>
            </div>

            <h3 className="font-barlow text-4xl sm:text-5xl font-black text-white mb-2">
              CADathon
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#b8cfde] leading-relaxed mb-6">
              Building planning, structural shear design, 3D modelling, load analysis, and construction execution. <strong>For Civil Engineering students only.</strong> Tackle complex structural and architectural challenges using modern CAD & BIM drafting suites.
            </p>
          </div>

          <div>
            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["PARAMETRIC BIM", "STRUCTURAL SHEAR DESIGN", "CANTILEVER CONCRETE", "FINITE ELEMENT ANALYSIS"].map(chip => (
                <span
                  key={chip}
                  className="font-mono text-[9px] px-2.5 py-1 rounded bg-[#0b1721] border border-cyan-400/30 text-cyan-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Foot */}
            <div className="pt-4 border-t border-[#29404c] flex items-center justify-between text-xs font-mono">
              <span className="text-[#9cafb7]">Pre-install CAD software</span>
              <a
                href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playDomainExpansionSound()}
                className="text-cyan-400 hover:underline font-bold flex items-center gap-1"
              >
                <span>Register for CADathon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Sorcerer Architects & Techniques Interactive Carousel on Portal Page */}
      <JJKCharacterShowcase />
    </section>
  );
};
