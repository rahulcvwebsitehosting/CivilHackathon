import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CIVIL_EVENT_CONFIG } from "../config/constants";
import { toggleMute, isSoundEnabled, playClickSound, playDomainExpansionSound } from "../utils/cyberSound";
import { useDomainTheme } from "../context/DomainThemeContext";
import { Volume2, VolumeX, Menu, X, ExternalLink, Bus, Sparkles, Building2, PhoneCall } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "THEMES", href: "#tracks" },
  { label: "41 BUSES", href: "#transport", badge: "41 ROUTES" },
  { label: "3D LAB", href: "#campus" },
  { label: "RULES", href: "#rules" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "CALCULATOR", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contacts" }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const { activeDomain, openDomainOverlay } = useDomainTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    playClickSound();

    if (location.pathname !== "/portal" && location.pathname !== "/") {
      navigate("/portal" + href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleToggleSound = () => {
    const nextState = toggleMute();
    setSoundOn(nextState);
    if (nextState) playClickSound();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex flex-col font-sans select-none">
      {/* Top Engineering & JJK Sorcery Bar */}
      <div className="bg-[#070e14] border-b border-[#1f3c52] text-[#9cafb7] text-[10px] sm:text-[11px] py-1 px-4 flex items-center justify-between font-mono">
        <div className="flex items-center space-x-2 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e75b2c] animate-pulse" />
          <span className="text-[#64cfe6] font-bold">ERODE SENGUNTHAR ENGINEERING COLLEGE (AUTONOMOUS)</span>
          <span className="hidden md:inline">• CIVIL ENGINEERING DEPT</span>
          <span className="hidden lg:inline text-white">• 15TH OCTOBER 2026</span>
        </div>
        <div className="flex items-center space-x-3 text-[10px] shrink-0">
          <span className="text-[#bcf779] hidden sm:inline">₹250/STUDENT</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-cyan-400 font-bold hidden md:inline">
            DOMAIN: {activeDomain.name}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`px-4 sm:px-6 py-2.5 transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? "bg-[#0b1721]/95 backdrop-blur-md border-b border-[#29404c] shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
            : "bg-transparent"
        }`}
      >
        {/* Brand Logo & Back to Home */}
        <Link
          to="/"
          onClick={() => playClickSound()}
          className="flex items-center space-x-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#102d42] border border-[#64cfe6]/50 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(100,207,230,0.3)] group-hover:border-[#e75b2c] transition-colors overflow-hidden">
            <img
              src="/assets/college-transparent.png"
              alt="ESEC Emblem"
              className="w-full h-full object-contain filter brightness-110"
              onError={(e) => {
                // fallback to icon if image fails
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-barlow font-black text-xl sm:text-2xl tracking-wider text-white leading-none">
              INNO<span className="text-[#e75b2c]">360</span>
            </span>
            <span className="font-mono text-[9px] text-[#64cfe6] tracking-widest leading-tight">
              2026 · CIVIL SORCERY
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="px-2.5 py-1.5 rounded-lg font-mono text-[11px] text-[#9cafb7] hover:text-white hover:bg-[#102d42]/70 border border-transparent hover:border-[#64cfe6]/40 transition-all cursor-pointer relative group"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-1 text-[8px] px-1 py-0.2 rounded bg-[#e75b2c] text-white font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right Action Tools: Domain Expansion Trigger, Sound & Register */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* JJK Domain Expansion Activation Button */}
          <button
            type="button"
            onClick={() => {
              playDomainExpansionSound();
              openDomainOverlay();
            }}
            className="jjk-btn-secondary px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold text-white flex items-center space-x-1.5 cursor-pointer"
          >
            <Sparkles
              className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-180 transition-transform"
            />
            <span className="font-mono tracking-widest text-[10px]">
              EXPAND DOMAIN
            </span>
          </button>

          {/* Audio Synthesizer Mute Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            aria-label={soundOn ? "Mute Synthesizer" : "Unmute Synthesizer"}
            className="p-2 rounded-xl bg-[#0b141e] border border-[#233547] hover:border-[#64cfe6] text-[#9cafb7] hover:text-white transition-colors cursor-pointer"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-[#64cfe6]" /> : <VolumeX className="w-4 h-4 text-[#ef4444]" />}
          </button>

          {/* Primary Registration Button */}
          <a
            href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="jjk-btn-primary hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 text-xs font-bold text-white cursor-pointer whitespace-nowrap"
          >
            <span>REGISTER ↗</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              playClickSound();
            }}
            className="xl:hidden p-2 rounded-xl bg-[#102d42] border border-[#29404c] text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0b1721]/98 border-b border-[#29404c] px-4 py-4 space-y-2 font-mono text-xs shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#1f3c52]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="p-2.5 rounded-xl bg-[#102d42]/70 border border-[#29404c] text-left text-white hover:border-[#64cfe6] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] px-1 py-0.5 rounded bg-[#e75b2c] text-white font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                playDomainExpansionSound();
                openDomainOverlay();
              }}
              className="jjk-btn-secondary w-full py-2.5 text-cyan-300 font-bold flex items-center justify-center space-x-2 text-xs"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>DOMAIN EXPANSION SETTINGS</span>
            </button>

            <a
              href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#e75b2c] text-white font-bold text-center block shadow-[0_0_15px_rgba(231,91,44,0.4)]"
            >
              REGISTER TEAM ON GOOGLE FORM ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
