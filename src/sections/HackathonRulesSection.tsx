import React, { useState } from "react";
import { EVENT_RULES, PREPARATION_CHECKLIST } from "../config/constants";
import { playClickSound } from "../utils/cyberSound";
import { Shield, CheckSquare, Laptop, AlertCircle } from "lucide-react";

export const HackathonRulesSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    laptop: true,
    cad: false,
    form: false,
    id: false
  });

  const handleToggle = (id: string) => {
    playClickSound();
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="rules" className="relative py-16 sm:py-20 px-4 z-10 max-w-5xl mx-auto select-none">
      <div className="text-center mb-12">
        <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
          // CODE OF CONDUCT & EVENT GUIDELINES
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          3 <span className="text-[#64cfe6]">RULES.</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] max-w-md mx-auto mt-1">
          Simple, essential regulations to ensure a fair, safe, and productive 12-hour build.
        </p>
      </div>

      {/* 3 Core Rules List */}
      <div className="space-y-4 mb-12">
        {EVENT_RULES.map((rule, idx) => (
          <article
            key={idx}
            className="bg-[#102d42]/90 border border-[#29404c] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 transition-all hover:border-[#64cfe6] shadow-md"
          >
            <span className="font-mono text-2xl sm:text-3xl font-black text-[#e75b2c] flex-shrink-0">
              {rule.number}
            </span>
            <div className="flex-1">
              <h3 className="font-barlow text-2xl sm:text-3xl font-bold text-white mb-1">
                {rule.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#b8cfde] leading-relaxed">
                {rule.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Preparation Checklist */}
      <div className="bg-[#0b1721] border-2 border-[#29404c] rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-2.5 font-mono text-xs text-[#bcf779] font-bold uppercase tracking-wider mb-2">
          <CheckSquare className="w-4 h-4 text-[#bcf779]" />
          <span>PREPARE BEFORE ARRIVAL · CHECKLIST</span>
        </div>
        <h3 className="font-barlow text-2xl sm:text-3xl font-bold text-white mb-5">
          BRING THESE ESSENTIALS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
          {PREPARATION_CHECKLIST.map(item => {
            const isChecked = !!checkedItems[item.id];
            return (
              <label
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className={`p-3.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                  isChecked
                    ? "bg-[#183c53] border-[#bcf779] text-white shadow-sm"
                    : "bg-[#102d42]/60 border-[#29404c] text-[#9cafb7] hover:border-[#64cfe6]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="w-4 h-4 accent-[#bcf779] cursor-pointer"
                />
                <span className="text-xs font-mono select-none">{item.label}</span>
              </label>
            );
          })}
        </div>

        <p className="text-[11px] font-mono text-[#9cafb7] border-t border-[#1f3c52] pt-3">
          Note: Checking off this personal readiness list does not register your team. Complete the official Google Form to confirm registration.
        </p>
      </div>
    </section>
  );
};
