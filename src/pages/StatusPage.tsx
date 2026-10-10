import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CIVIL_EVENT_CONFIG } from "../config/constants";
import { Navbar } from "../components/Navbar";
import { InteractiveCursor } from "../components/InteractiveCursor";
import { CinematicBackground } from "../components/CinematicBackground";
import { playClickSound, playSuccessSound } from "../utils/cyberSound";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowLeft,
  Users,
  Building2,
  FileText,
  ExternalLink
} from "lucide-react";

interface RegistrationRecord {
  regId: string;
  teamName: string;
  themeName: string;
  totalMembers: number;
  status: "CONFIRMED" | "SUBMITTED_ON_GOOGLE_FORM" | "PENDING_VERIFICATION";
  leadName: string;
}

export const StatusPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [regInput, setRegInput] = useState(searchParams.get("id") || "");
  const [record, setRecord] = useState<RegistrationRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const searchRegistration = (idToSearch: string) => {
    const cleanId = idToSearch.trim().toUpperCase();
    if (!cleanId) {
      setErrorMessage("Please enter a team name or email address.");
      return;
    }

    playClickSound();
    setErrorMessage("");
    setHasSearched(true);

    // Provide a sample lookup / confirmed status for demonstration
    setRecord({
      regId: cleanId.startsWith("INNO") ? cleanId : `INNO-${Math.floor(1000 + Math.random() * 9000)}`,
      teamName: cleanId,
      themeName: "CADathon / EcoThon Track",
      totalMembers: 4,
      status: "CONFIRMED",
      leadName: "Registered Team Lead"
    });
    playSuccessSound();
  };

  return (
    <div className="relative min-h-screen bg-[#0b1721] text-[#edf4f8] selection:bg-[#e75b2c] selection:text-white font-sans overflow-x-hidden pt-24 pb-16">
      <InteractiveCursor />
      <CinematicBackground />
      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block font-mono text-xs text-[#e75b2c] tracking-widest uppercase mb-2">
            // INNO360 VERIFICATION DISPATCH
          </div>
          <h1 className="font-barlow text-4xl sm:text-6xl font-extrabold text-white tracking-wide mb-2">
            TEAM <span className="text-[#64cfe6]">STATUS CHECK</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#b8cfde] max-w-lg mx-auto">
            Check your team registration status, view reporting instructions, and download event resources.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-[#102d42]/90 border border-[#29404c] rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
          <form
            onSubmit={e => {
              e.preventDefault();
              searchRegistration(regInput);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#9cafb7] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={regInput}
                onChange={e => setRegInput(e.target.value)}
                placeholder="Enter Team Name or Lead Email..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0b1721] border border-[#29404c] focus:border-[#64cfe6] text-sm font-mono text-white placeholder-[#9cafb7] outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#e75b2c] hover:bg-[#ff7b47] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-all whitespace-nowrap"
            >
              VERIFY STATUS
            </button>
          </form>

          {errorMessage && (
            <p className="mt-3 text-xs font-mono text-red-400">{errorMessage}</p>
          )}
        </div>

        {/* Result Card */}
        {hasSearched && record && (
          <div className="bg-[#0b1721] border-2 border-[#bcf779] rounded-2xl p-6 sm:p-8 shadow-2xl mb-8">
            <div className="flex items-center justify-between border-b border-[#1f3c52] pb-4 mb-4">
              <div>
                <span className="font-mono text-xs text-[#9cafb7] uppercase block">
                  REGISTRATION ID
                </span>
                <strong className="font-mono text-xl text-[#64cfe6]">
                  {record.regId}
                </strong>
              </div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#bcf779]/20 border border-[#bcf779] text-[#bcf779] font-mono text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>CONFIRMED ON ROSTER</span>
              </span>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#edf4f8] mb-6">
              <div className="flex justify-between py-1 border-b border-[#1f3c52]/50">
                <span className="text-[#9cafb7]">Team Identifier:</span>
                <strong>{record.teamName}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1f3c52]/50">
                <span className="text-[#9cafb7]">Registered Theme:</span>
                <strong className="text-[#64cfe6]">{record.themeName}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1f3c52]/50">
                <span className="text-[#9cafb7]">Event Date & Reporting:</span>
                <span>15th October 2026 · 08:00 AM IST</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#9cafb7]">Venue:</span>
                <span>Kailaimani A. Munusamy Mudaliyar Arangam, ESEC</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#102d42] border border-[#29404c] text-xs font-mono text-[#9cafb7] mb-6 space-y-1">
              <div>✓ Carry valid student identity card for all members.</div>
              <div>✓ Bring at least 1 laptop per team with CAD software pre-installed.</div>
              <div>✓ Lunch and refreshments will be served at the venue.</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#e75b2c] hover:bg-[#ff7b47] text-white font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center space-x-2"
              >
                <span>Google Form Submission</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={CIVIL_EVENT_CONFIG.BROCHURE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#102d42] border border-[#29404c] text-[#64cfe6] font-mono text-xs font-bold uppercase tracking-wider text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            to="/portal"
            className="text-xs font-mono text-[#64cfe6] hover:underline"
          >
            ← Return to Event Portal
          </Link>
        </div>
      </main>
    </div>
  );
};
