import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { InteractiveCursor } from "../components/InteractiveCursor";
import { CinematicBackground } from "../components/CinematicBackground";
import { CyberBotAssistant } from "../components/CyberBotAssistant";
import { JJKCursedTalismans } from "../components/JJKCursedTalismans";
import { DomainExpansionOverlay } from "../components/DomainExpansionOverlay";
import { useDomainTheme } from "../context/DomainThemeContext";
import { AboutSection } from "../sections/AboutSection";
import { DatesSection } from "../sections/DatesSection";
import { CountdownSection } from "../sections/CountdownSection";
import { ProblemStatementSection } from "../sections/ProblemStatementSection";
import { DomainsSection } from "../sections/DomainsSection";
import { BusTransportSection } from "../sections/BusTransportSection";
import { PrizesSection } from "../sections/PrizesSection";
import { EntertainmentSection } from "../sections/EntertainmentSection";
import { TeamRulesSection } from "../sections/TeamRulesSection";
import { HackathonRulesSection } from "../sections/HackathonRulesSection";
import { RefreshmentScheduleSection } from "../sections/RefreshmentScheduleSection";
import { TimelineSection } from "../sections/TimelineSection";
import { FaqSection } from "../sections/FaqSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";

export const EventPortalPage: React.FC = () => {
  const { activeDomain, setActiveDomain, isDomainOverlayOpen, closeDomainOverlay } = useDomainTheme();

  useEffect(() => {
    // If arriving with a hash e.g. #transport or #tracks, scroll to it smoothly
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070e14] text-[#edf4f8] selection:bg-[#e75b2c] selection:text-white font-sans overflow-x-hidden pt-24">
      {/* Interactive CAD Crosshair Cursor */}
      <InteractiveCursor />

      {/* Cinematic Blueprint Atmosphere & Jujutsu Kaisen 4K Wallpaper Layer */}
      <CinematicBackground />

      {/* Floating Animated Japanese Cursed Talismans */}
      <JJKCursedTalismans />

      {/* Theatrical Domain Expansion Overlay */}
      <DomainExpansionOverlay
        isOpen={isDomainOverlayOpen}
        activeDomain={activeDomain}
        onSelectDomain={setActiveDomain}
        onClose={closeDomainOverlay}
      />

      {/* Top Floating Navbar with Sound & Domain Controls */}
      <Navbar />

      {/* InnoBot Floating Help Assistant */}
      <CyberBotAssistant />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        <AboutSection />
        <DatesSection />
        <CountdownSection />
        <DomainsSection />
        <BusTransportSection />
        <ProblemStatementSection />
        <PrizesSection />
        <HackathonRulesSection />
        <TeamRulesSection />
        <TimelineSection />
        <RefreshmentScheduleSection />
        <EntertainmentSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
