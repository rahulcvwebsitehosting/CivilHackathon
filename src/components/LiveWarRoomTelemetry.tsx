import React from "react";
import { playClickSound, playHoverSound } from "../utils/cyberSound";
import { Activity, Clock, Trophy, Printer, Utensils } from "lucide-react";
import { motion } from "motion/react";

export const LiveWarRoomTelemetry: React.FC = () => {
  const metrics = [
    {
      label: "EVENT DURATION",
      value: "12 HOURS",
      desc: "Rapid Planning, Structural Drafting & Prototyping",
      icon: Clock,
      color: "text-[#e75b2c]",
      border: "border-[#e75b2c]/50"
    },
    {
      label: "AWARDS & RECOGNITION",
      value: "CASH PRIZES",
      desc: "Attractive Cash Awards & Physical Certificates",
      icon: Trophy,
      color: "text-[#64cfe6]",
      border: "border-[#64cfe6]/50"
    },
    {
      label: "CENTRE OF EXCELLENCE",
      value: "3D CONCRETE",
      desc: "ESEC In-House Gantry Additive Concrete Lab",
      icon: Printer,
      color: "text-[#bcf779]",
      border: "border-[#bcf779]/50"
    },
    {
      label: "HOSPITALITY INCLUDED",
      value: "MEALS & TEA",
      desc: "South Indian Lunch & Refreshments Provided",
      icon: Utensils,
      color: "text-[#ff9a64]",
      border: "border-[#ff9a64]/50"
    }
  ];

  return (
    <div className="relative bg-[#091724]/90 border border-[#29404c] rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.6)] my-8 select-none cad-corner-box">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#29404c] pb-4 mb-6">
        <div className="flex items-center space-x-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e75b2c] animate-ping flex-shrink-0" />
          <Activity className="w-5 h-5 text-[#e75b2c] flex-shrink-0" />
          <h3 className="font-barlow font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
            LIVE WAR ROOM TELEMETRY
          </h3>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="bg-[#102d42] border border-[#64cfe6]/40 px-3 py-1 rounded-full text-[#64cfe6] shadow-sm whitespace-nowrap text-[10px] sm:text-xs">
            ⚡ JURY MONITOR: ONLINE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => playHoverSound()}
              onClick={() => playClickSound()}
              className={`bg-[#102d42]/70 border ${m.border} p-5 rounded-xl flex flex-col justify-between transition-all shadow-md hover:shadow-[0_0_20px_rgba(100,207,230,0.2)] cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-[#9cafb7] font-semibold uppercase tracking-wider">
                  {m.label}
                </span>
                <Icon className={`w-5 h-5 ${m.color}`} />
              </div>

              <div className={`font-barlow text-3xl sm:text-4xl font-black ${m.color} my-1`}>
                {m.value}
              </div>

              <p className="font-sans text-xs text-[#9cafb7] mt-1 leading-snug">
                {m.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
