import React from "react";
import { CIVIL_EVENT_CONFIG } from "../config/constants";
import { SpotlightCard } from "../components/SpotlightCard";
import { MapPin, Phone, Mail, UserCheck, Award, ExternalLink } from "lucide-react";
import { playClickSound } from "../utils/cyberSound";

export const ContactSection: React.FC = () => {
  return (
    <section id="contacts" className="relative py-16 sm:py-20 px-4 z-10 max-w-6xl mx-auto select-none">
      <div className="text-center mb-12">
        <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
          // ORGANIZERS & COORDINATION TEAM
        </div>
        <h2 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide mb-2">
          ORGANIZING <span className="text-[#64cfe6]">COMMITTEE</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9cafb7] max-w-lg mx-auto">
          Reach out to our faculty and student coordinators for queries regarding registration, themes, software, or travel arrangements.
        </p>
      </div>

      {/* College Profile & Accreditations Card */}
      <div id="college" className="bg-[#102d42]/90 border border-[#29404c] rounded-2xl p-6 sm:p-8 mb-10 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Emblem & Accreditations */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#0b1721] border border-[#1f3c52] rounded-xl text-center">
            <div className="w-28 h-28 p-2 rounded-full bg-white mb-4 shadow-md flex items-center justify-center">
              <img
                src="/assets/college-transparent.png"
                alt="Erode Sengunthar Engineering College"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-mono text-[10px] text-[#9cafb7] tracking-widest uppercase mb-4">
              SERVICE · EXCELLENCE · CHARACTER
            </p>
            <div className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl w-full">
              <img
                src="/assets/naac-transparent.png"
                alt="NAAC A Grade Badge"
                className="h-12 w-auto object-contain"
              />
              <img
                src="/assets/nba-transparent.png"
                alt="NBA Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-3">
            <div className="font-mono text-xs text-[#e75b2c] font-bold tracking-widest uppercase">
              {CIVIL_EVENT_CONFIG.DEPARTMENT}
            </div>
            <h3 className="font-barlow text-3xl sm:text-4xl font-black text-white leading-tight">
              Erode Sengunthar<br />
              <span className="text-[#64cfe6]">Engineering College.</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#b8cfde]">
              An autonomous engineering college in Perundurai, established in 1996. Dedicated to technological excellence and practical research.
            </p>
            <address className="not-italic font-mono text-xs text-[#9cafb7] pt-2 border-t border-[#1f3c52]">
              Thudupathi, Perundurai<br />
              Erode, Tamil Nadu — 638057
            </address>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={CIVIL_EVENT_CONFIG.COLLEGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#64cfe6] hover:underline flex items-center gap-1"
              >
                <span>College website ↗</span>
              </a>
              <a
                href="https://erode-sengunthar.ac.in/nba-naac/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#9cafb7] hover:underline"
              >
                <span>Accreditation records ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Faculty Coordinators */}
      <div className="mb-8">
        <div className="text-xs font-mono text-[#9cafb7] uppercase tracking-wider mb-4">
          DEPARTMENT LEADERSHIP & FACULTY
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0b1721] border border-[#29404c] rounded-xl p-5 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#9cafb7] block">HOD · CIVIL ENGINEERING</span>
              <strong className="font-barlow text-2xl text-white block mt-0.5">
                {CIVIL_EVENT_CONFIG.HOD.name}
              </strong>
            </div>
            <UserCheck className="w-6 h-6 text-[#64cfe6]" />
          </div>

          <a
            href={`tel:${CIVIL_EVENT_CONFIG.FACULTY_COORDINATOR.rawPhone}`}
            onClick={() => playClickSound()}
            className="bg-[#0b1721] border border-[#29404c] hover:border-[#e75b2c] rounded-xl p-5 flex items-center justify-between transition-all group cursor-pointer"
          >
            <div>
              <span className="font-mono text-[10px] text-[#e75b2c] block">
                FACULTY COORDINATOR · {CIVIL_EVENT_CONFIG.FACULTY_COORDINATOR.name}
              </span>
              <strong className="font-mono text-lg text-white group-hover:text-[#e75b2c] transition-colors block mt-0.5">
                {CIVIL_EVENT_CONFIG.FACULTY_COORDINATOR.phone} ↗
              </strong>
            </div>
            <Phone className="w-5 h-5 text-[#e75b2c] group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Student Coordinators Grid */}
      <div>
        <div className="text-xs font-mono text-[#9cafb7] uppercase tracking-wider mb-4">
          STUDENT COORDINATORS · DIRECT CALL ASSISTANCE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CIVIL_EVENT_CONFIG.STUDENT_COORDINATORS.map((sc, idx) => (
            <a
              key={idx}
              href={`tel:+91${sc.rawPhone}`}
              onClick={() => playClickSound()}
              className="bg-[#102d42]/70 border border-[#29404c] hover:border-[#64cfe6] rounded-xl p-4 flex flex-col justify-between transition-all group cursor-pointer"
            >
              <div>
                <span className="font-mono text-[10px] text-[#9cafb7] block">STUDENT LEAD</span>
                <strong className="font-barlow text-xl text-white block mt-0.5">
                  {sc.name}
                </strong>
              </div>
              <div className="mt-3 pt-2 border-t border-[#1f3c52] flex items-center justify-between font-mono text-xs text-[#64cfe6] group-hover:text-white">
                <span>{sc.phone}</span>
                <Phone className="w-3.5 h-3.5 text-[#64cfe6]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
