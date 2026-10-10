import React from "react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";
import { SpotlightCard } from "../components/SpotlightCard";
import { Calendar, Flag, Award, Clock, MapPin } from "lucide-react";

export const DatesSection: React.FC = () => {
  return (
    <section id="brief" className="relative py-16 sm:py-20 px-4 z-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
          // IMPORTANT DATES & FACT SHEET
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          EVENT <span className="text-[#64cfe6]">DETAILS & TIMELINE</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] mt-1">
          15th October 2026 · Thursday · Kailaimani A. Munusamy Mudaliyar Arangam
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Registration Deadline */}
        <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between bg-[#102d42]/90 border-[#29404c] rounded-2xl">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#0b1721] border border-[#e75b2c] flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(231,91,44,0.35)]">
              <Calendar className="w-7 h-7 text-[#e75b2c]" />
            </div>
            <h3 className="font-mono text-xs text-[#9cafb7] uppercase tracking-widest mb-2 text-center">
              01 / REGISTRATION DEADLINE
            </h3>
            <div className="font-barlow text-3xl font-extrabold text-white mb-2 text-center">
              {CIVIL_EVENT_CONFIG.REGISTRATION_DEADLINE_DISPLAY}
            </div>
            <p className="font-sans text-xs text-[#b8cfde] text-center leading-relaxed">
              Teams of 3 or 4 students must complete the Google Form with one combined team payment transaction proof.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#29404c] text-center">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#e75b2c]/15 border border-[#e75b2c]/60 text-[#e75b2c] font-mono text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#e75b2c] animate-pulse" />
              <span>REGISTRATION OPEN</span>
            </span>
          </div>
        </SpotlightCard>

        {/* Card 2: Hackathon Day */}
        <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between bg-[#102d42]/90 border-[#29404c] rounded-2xl">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#0b1721] border border-[#64cfe6] flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(100,207,230,0.35)]">
              <Flag className="w-7 h-7 text-[#64cfe6]" />
            </div>
            <h3 className="font-mono text-xs text-[#9cafb7] uppercase tracking-widest mb-2 text-center">
              02 / EVENT DAY & KICKOFF
            </h3>
            <div className="font-barlow text-3xl font-extrabold text-white mb-2 text-center">
              15th October 2026 · 08:00 AM
            </div>
            <p className="font-sans text-xs text-[#b8cfde] text-center leading-relaxed">
              Reporting, student check-in, inaugural ceremony, and on-the-spot confidential problem statement reveal.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#29404c] text-center">
            <span className="text-xs font-mono text-[#64cfe6] uppercase tracking-wider font-semibold">
              12-Hour Build Sprint
            </span>
          </div>
        </SpotlightCard>

        {/* Card 3: Valediction & Awards */}
        <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between bg-[#102d42]/90 border-[#29404c] rounded-2xl">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#0b1721] border border-[#bcf779] flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(188,247,121,0.35)]">
              <Award className="w-7 h-7 text-[#bcf779]" />
            </div>
            <h3 className="font-mono text-xs text-[#9cafb7] uppercase tracking-widest mb-2 text-center">
              03 / JURY & VALEDICTORY
            </h3>
            <div className="font-barlow text-3xl font-extrabold text-white mb-2 text-center">
              15th October 2026 · 07:00 PM
            </div>
            <p className="font-sans text-xs text-[#b8cfde] text-center leading-relaxed">
              Jury evaluations, live model demos, award ceremony, cash prize handouts, and physical certificates distribution.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#29404c] text-center">
            <span className="text-xs font-mono text-[#bcf779] uppercase tracking-wider font-semibold">
              Cash Prizes & Physical Certificates
            </span>
          </div>
        </SpotlightCard>
      </div>

      {/* 6-Fact Grid from civilhack.vercel.app */}
      <div className="bg-[#0b1721] border border-[#29404c] rounded-2xl p-6 sm:p-8">
        <div className="text-xs font-mono text-[#e75b2c] uppercase tracking-wider mb-4">
          QUICK EVENT SUMMARY · 6 ESSENTIAL FACTS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="border-t-2 border-[#29404c] pt-3">
            <span className="text-[10px] font-mono text-[#9cafb7] block">01 / DURATION</span>
            <strong className="font-barlow text-2xl text-white block mt-1">12 hours</strong>
            <p className="text-[11px] text-[#9cafb7] mt-1">Non-stop build</p>
          </div>
          <div className="border-t-2 border-[#29404c] pt-3">
            <span className="text-[10px] font-mono text-[#9cafb7] block">02 / DATE</span>
            <strong className="font-barlow text-2xl text-white block mt-1">15 Oct 2026</strong>
            <p className="text-[11px] text-[#9cafb7] mt-1">Thursday</p>
          </div>
          <div className="border-t-2 border-[#29404c] pt-3">
            <span className="text-[10px] font-mono text-[#9cafb7] block">03 / VENUE</span>
            <strong className="font-barlow text-xl text-white block mt-1 truncate" title="Kailaimani A. Munusamy Mudaliyar Arangam">
              ESEC Arangam
            </strong>
            <p className="text-[11px] text-[#9cafb7] mt-1">Perundurai, Erode</p>
          </div>
          <div className="border-t-2 border-[#29404c] pt-3">
            <span className="text-[10px] font-mono text-[#9cafb7] block">04 / REGISTRATION</span>
            <strong className="font-barlow text-2xl text-white block mt-1">₹250 / student</strong>
            <p className="text-[11px] text-[#9cafb7] mt-1">3–4 members</p>
          </div>
          <div className="border-t-2 border-[#29404c] pt-3">
            <span className="text-[10px] font-mono text-[#9cafb7] block">05 / HOSPITALITY</span>
            <strong className="font-barlow text-2xl text-white block mt-1">Lunch + Tea</strong>
            <p className="text-[11px] text-[#9cafb7] mt-1">Included in fee</p>
          </div>
          <div className="border-t-2 border-[#29404c] pt-3">
            <span className="text-[10px] font-mono text-[#9cafb7] block">06 / REWARDS</span>
            <strong className="font-barlow text-2xl text-[#bcf779] block mt-1">Cash Prizes</strong>
            <p className="text-[11px] text-[#9cafb7] mt-1">Certificates for all</p>
          </div>
        </div>
      </div>
    </section>
  );
};
