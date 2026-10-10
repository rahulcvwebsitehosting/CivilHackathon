import React, { useState } from "react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";
import { playClickSound } from "../utils/cyberSound";
import { Calculator, Users, CheckCircle2, ArrowRight, ExternalLink, CreditCard } from "lucide-react";

export const TeamFeeCalculator: React.FC = () => {
  const [memberCount, setMemberCount] = useState<number>(4);
  const [selectedTheme, setSelectedTheme] = useState<"ecothon" | "cadathon">("cadathon");

  const totalFee = memberCount * CIVIL_EVENT_CONFIG.REGISTRATION_FEE_PER_MEMBER;

  const handleSelectCount = (count: number) => {
    playClickSound();
    setMemberCount(count);
  };

  const handleSelectTheme = (theme: "ecothon" | "cadathon") => {
    playClickSound();
    setSelectedTheme(theme);
  };

  return (
    <div id="calculator" className="relative bg-[#102d42]/90 border border-[#29404c] rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.6)] my-8 select-none cad-corner-box">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#29404c] pb-5 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 font-mono text-[11px] text-[#e75b2c] uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4 text-[#e75b2c]" />
            <span>REGISTRATION FEE ESTIMATOR</span>
          </div>
          <h3 className="font-barlow font-extrabold text-3xl sm:text-4xl text-white tracking-wide">
            TEAM REGISTRATION & FEE CALCULATOR
          </h3>
          <p className="text-xs font-mono text-[#9cafb7] mt-1">
            Submit 1 registration per team · Pay once for the whole team
          </p>
        </div>

        <div className="bg-[#0b1721] border border-[#64cfe6]/40 px-3.5 py-2 rounded-xl font-mono text-xs text-[#64cfe6]">
          FIXED RATE: <span className="font-bold text-white">₹{CIVIL_EVENT_CONFIG.REGISTRATION_FEE_PER_MEMBER}</span> / STUDENT
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Team & Theme Selector */}
        <div className="md:col-span-7 space-y-5">
          {/* Theme selector */}
          <div>
            <label className="block font-mono text-xs text-[#9cafb7] uppercase tracking-wider mb-2">
              STEP 1: SELECT HACKATHON THEME
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSelectTheme("ecothon")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedTheme === "ecothon"
                    ? "bg-[#183c53] border-[#bcf779] shadow-[0_0_15px_rgba(188,247,121,0.3)]"
                    : "bg-[#0b1721] border-[#29404c] hover:border-[#64cfe6]"
                }`}
              >
                <span className="font-mono text-[10px] text-[#bcf779] block">THEME 1</span>
                <strong className="font-barlow text-xl text-white block">EcoThon</strong>
                <span className="text-[10px] text-[#9cafb7] block">Open to All Streams · 12th+</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectTheme("cadathon")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedTheme === "cadathon"
                    ? "bg-[#183c53] border-[#64cfe6] shadow-[0_0_15px_rgba(100,207,230,0.3)]"
                    : "bg-[#0b1721] border-[#29404c] hover:border-[#64cfe6]"
                }`}
              >
                <span className="font-mono text-[10px] text-[#64cfe6] block">THEME 2</span>
                <strong className="font-barlow text-xl text-white block">CADathon</strong>
                <span className="text-[10px] text-[#9cafb7] block">Civil Engineering Only</span>
              </button>
            </div>
          </div>

          {/* Member selector */}
          <div>
            <label className="block font-mono text-xs text-[#9cafb7] uppercase tracking-wider mb-2">
              STEP 2: SELECT TEAM COMPLEMENT (3 OR 4 STUDENTS)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[3, 4].map(count => {
                const isSelected = memberCount === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => handleSelectCount(count)}
                    className={`py-3 px-4 rounded-xl border-2 flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#16384f] border-[#e75b2c] text-white shadow-[0_0_15px_rgba(231,91,44,0.4)]"
                        : "bg-[#0b1721] border-[#29404c] text-[#9cafb7] hover:border-[#64cfe6]"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Users className={`w-5 h-5 ${isSelected ? "text-[#e75b2c]" : "text-[#64cfe6]"}`} />
                      <span className="font-barlow text-2xl font-black">{count} MEMBERS</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#64cfe6]">
                      ₹{(count * 250).toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Perks list */}
          <div className="space-y-1.5 pt-2 font-sans text-xs text-[#edf4f8]">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#bcf779] flex-shrink-0" />
              <span>Full Access to 12-Hour Non-Stop Multi-Department Hackathon</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#bcf779] flex-shrink-0" />
              <span>Wholesome South Indian Lunch + Morning & Evening Refreshments Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#bcf779] flex-shrink-0" />
              <span>Physical Certificates of Participation for All Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#bcf779] flex-shrink-0" />
              <span>Eligibility for Attractive Cash Prizes & Department Accolades</span>
            </div>
          </div>
        </div>

        {/* Right: Total Fee & Register Action */}
        <div className="md:col-span-5 bg-[#0b1721] border-2 border-[#e75b2c] rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(231,91,44,0.2)]">
          <span className="font-mono text-xs text-[#9cafb7] uppercase tracking-widest block mb-1">
            TOTAL TEAM PAYMENT
          </span>
          <div className="font-barlow text-5xl sm:text-6xl font-black text-white my-2">
            ₹{totalFee.toLocaleString()}
          </div>
          <p className="font-mono text-xs text-[#64cfe6] mb-4">
            (₹{CIVIL_EVENT_CONFIG.REGISTRATION_FEE_PER_MEMBER} × {memberCount} Students)
          </p>

          <div className="bg-[#102d42] border border-[#29404c] rounded-lg p-2.5 text-left text-[11px] font-mono text-[#9cafb7] mb-5 space-y-1">
            <div>• Make <strong>one single payment</strong> for entire team.</div>
            <div>• Save payment screenshot & transaction ID.</div>
            <div>• Upload proof in the official Google Form.</div>
          </div>

          <a
            href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-mono font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#e75b2c] hover:bg-[#ff7b47] shadow-[0_0_20px_rgba(231,91,44,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>REGISTER TEAM ON GOOGLE FORM</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
