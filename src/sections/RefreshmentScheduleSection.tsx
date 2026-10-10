import React from "react";
import { Coffee, Utensils, Wifi, Clock, MapPin, CheckCircle } from "lucide-react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";

interface MealSession {
  numeral: string;
  title: string;
  time: string;
  item: string;
  location: string;
  description: string;
  icon: typeof Coffee;
}

const CIVIL_MEAL_SESSIONS: MealSession[] = [
  {
    numeral: "01",
    title: "Welcome Morning Tea",
    time: "08:00 AM – 09:00 AM",
    item: "☕ Hot Tea & Biscuits",
    location: "Auditorium Reception Foyer",
    description: "Served during participant reporting, Google Form check-in, and badge handover.",
    icon: Coffee
  },
  {
    numeral: "02",
    title: "Morning High Tea & Snacks",
    time: "11:30 AM – 12:00 PM",
    item: "☕ Hot Beverages & Light Snacks",
    location: "Arangam Refreshment Counters",
    description: "Quick refreshing energy boost mid-way through preliminary drafting and ideation.",
    icon: Coffee
  },
  {
    numeral: "03",
    title: "Grand Working Lunch",
    time: "01:00 PM – 02:00 PM",
    item: "🍛 Wholesome South Indian Lunch Buffet",
    location: "Campus Main Dining Hall",
    description: "Delicious lunch provided for all registered student participants and faculty guides.",
    icon: Utensils
  },
  {
    numeral: "04",
    title: "Evening High Tea & Savouries",
    time: "04:30 PM – 05:00 PM",
    item: "☕ Evening Tea & Crispy Savouries",
    location: "Arangam Refreshment Counters",
    description: "Hot beverages before the final submission sprint and jury demonstrations.",
    icon: Coffee
  }
];

export const RefreshmentScheduleSection: React.FC = () => {
  return (
    <section id="refreshments" className="relative py-16 sm:py-20 px-4 z-10 max-w-5xl mx-auto select-none">
      <div className="text-center mb-12">
        <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
          // HOSPITALITY & DINING SCHEDULE
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          LUNCH + <span className="text-[#64cfe6]">REFRESHMENTS</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] max-w-lg mx-auto mt-1">
          Wholesome meals and hot beverages included throughout the 12-hour event duration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {CIVIL_MEAL_SESSIONS.map((session, idx) => {
          const Icon = session.icon;
          return (
            <div
              key={idx}
              className="bg-[#102d42]/90 border border-[#29404c] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:border-[#64cfe6] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#e75b2c] font-bold">
                    SESSION {session.numeral}
                  </span>
                  <span className="font-mono text-[11px] text-[#64cfe6] bg-[#0b1721] px-2.5 py-0.5 rounded border border-[#29404c]">
                    {session.time}
                  </span>
                </div>

                <h3 className="font-barlow text-2xl font-bold text-white mb-1">
                  {session.item}
                </h3>

                <p className="font-sans text-xs text-[#b8cfde] leading-relaxed mb-4">
                  {session.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1f3c52] flex items-center justify-between text-[11px] font-mono text-[#9cafb7]">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#e75b2c]" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center space-x-1 truncate max-w-[200px]">
                  <MapPin className="w-3.5 h-3.5 text-[#64cfe6] flex-shrink-0" />
                  <span className="truncate">{session.location}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Campus Wi-Fi & Facility Info */}
      <div className="bg-[#0b1721] border border-[#29404c] rounded-2xl p-6 text-center">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#bcf779] uppercase mb-1">
          <Wifi className="w-4 h-4 text-[#bcf779]" />
          <span>CAMPUS HIGH-SPEED INTERNET CONNECTIVITY</span>
        </div>
        <h4 className="font-barlow text-2xl font-bold text-white">
          COMPLIMENTARY VENUE WI-FI & POWER STRIPS
        </h4>
        <p className="font-sans text-xs text-[#9cafb7] max-w-xl mx-auto mt-1 leading-relaxed">
          High-bandwidth Wi-Fi network credentials and dedicated power sockets will be provided for all participant desks across the auditorium.
        </p>
      </div>
    </section>
  );
};
