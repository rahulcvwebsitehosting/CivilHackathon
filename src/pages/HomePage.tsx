import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CIVIL_EVENT_CONFIG, JJK_DOMAIN_THEMES, JJKDomainTheme } from "../config/constants";
import { RealisticCompass3D, CompassHandle } from "../components/RealisticCompass3D";
import { LoadingScreen } from "../components/LoadingScreen";
import { InteractiveCursor } from "../components/InteractiveCursor";
import { CinematicBackground } from "../components/CinematicBackground";
import { JJKCursedTalismans } from "../components/JJKCursedTalismans";
import { JJKCharacterShowcase } from "../components/JJKCharacterShowcase";
import { DomainExpansionOverlay } from "../components/DomainExpansionOverlay";
import { useDomainTheme } from "../context/DomainThemeContext";
import { useDomainExpansionSound } from "../hooks/useDomainExpansionSound";
import { playClickSound, playWarpSound, playDomainExpansionSound, playBlackFlashSound, playHoverSound } from "../utils/cyberSound";
import { ArrowRight, Sparkles, Building2, Bus, Zap, Flame, Shield, MapPin, Eye, ExternalLink, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const HomePage: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [isEmbarking, setIsEmbarking] = useState(false);
  const { activeDomain, setActiveDomain, isDomainOverlayOpen, openDomainOverlay, closeDomainOverlay } = useDomainTheme();
  const { triggerDomainExpansionSound } = useDomainExpansionSound({ volume: 0.85, flavor: "authentic" });
  const modelRef = useRef<CompassHandle | null>(null);
  const navigate = useNavigate();

  const handleFinishLoading = useCallback(() => {
    setShowLoading(false);
  }, []);

  const [isExpandingDomain, setIsExpandingDomain] = useState(false);

  const handleExplore = () => {
    if (isEmbarking) return;
    setIsEmbarking(true);
    setIsExpandingDomain(true);
    // Authentic JJK Domain Expansion sound effect triggered via dedicated hook
    triggerDomainExpansionSound(activeDomain.id === "malevolent_shrine" ? "shrine" : "void");

    // Trigger 3D spin if available
    if (modelRef.current) {
      modelRef.current.spinAndEmbark();
    }

    // After Domain Expansion animation plays for 1.1s, route to Event Portal
    setTimeout(() => {
      navigate("/portal");
    }, 1200);
  };

  const handleSelectTheme = (theme: JJKDomainTheme) => {
    setActiveDomain(theme);
    if (theme.id === "unlimited_void" || theme.id === "hero_sorcerers") {
      playDomainExpansionSound();
    } else {
      playBlackFlashSound();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070e14] text-[#edf4f8] overflow-x-hidden selection:bg-[#00f0ff] selection:text-black flex flex-col justify-between font-sans">
      {/* Intro Civil CAD Loading Screen */}
      <AnimatePresence>
        {showLoading && <LoadingScreen onFinish={handleFinishLoading} />}
      </AnimatePresence>

      {/* Interactive CAD Crosshair Cursor */}
      <InteractiveCursor />

      {/* Cinematic Blueprint Grid & Jujutsu Kaisen 4K Wallpaper Layer (Clearly Visible) */}
      <CinematicBackground />

      {/* Floating Animated Japanese Cursed Talismans (Ofuda) */}
      <JJKCursedTalismans />

      {/* Theatrical Domain Expansion Animation on Explore Event Portal Click */}
      <AnimatePresence>
        {isExpandingDomain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            {/* Domain Wallpaper Flash */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeDomain.wallpaper})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black" />

            {/* Cursed Barrier Rupture Rings */}
            <div className="w-[85vw] h-[85vw] max-w-[750px] max-h-[750px] rounded-full border-4 border-red-600/90 shadow-[0_0_150px_rgba(220,38,38,0.9)] animate-ping" />
            <div className="absolute w-[65vw] h-[65vw] max-w-[550px] max-h-[550px] rounded-full border-2 border-cyan-400/80 shadow-[0_0_100px_rgba(0,240,255,0.8)]" />

            {/* Central Domain Expansion Text */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 text-center px-4"
            >
              <div className="font-barlow text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-cyan-400 tracking-wider filter drop-shadow-[0_0_30px_rgba(220,38,38,0.9)]">
                DOMAIN EXPANSION
              </div>
              <div className="mt-3 font-mono text-sm sm:text-lg text-cyan-300 tracking-[0.3em] uppercase font-bold">
                WARPING TO INNO360 PORTAL...
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Theatrical Domain Expansion Overlay */}
      <DomainExpansionOverlay
        isOpen={isDomainOverlayOpen}
        activeDomain={activeDomain}
        onSelectDomain={setActiveDomain}
        onClose={closeDomainOverlay}
      />

      {/* Top Floating Mini-Nav */}
      <header className="relative z-20 w-full px-4 py-3 max-w-6xl mx-auto flex items-center justify-between font-mono text-xs">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#102d42]/90 border border-cyan-400/50 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <img src="/assets/college-transparent.png" alt="ESEC" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-barlow font-black text-xl text-white tracking-wide">INNO360</span>
              <span className="px-1.5 py-0.2 rounded bg-[#00f0ff] text-black font-bold text-[9px] font-mono">
                JJK SPEC
              </span>
            </div>
            <span className="text-[10px] text-cyan-400 block -mt-1 font-mono tracking-wider">
              CIVIL SORCERY 2026
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Quick Bus Routes Jump */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              navigate("/portal#transport");
            }}
            className="px-3.5 py-1.5 rounded-xl bg-[#102d42]/90 hover:bg-[#14364f] border border-[#29404c] hover:border-[#bcf779] text-white transition-all cursor-pointer flex items-center space-x-1.5 text-xs shadow-md group"
          >
            <Bus className="w-3.5 h-3.5 text-[#bcf779] group-hover:scale-110 transition-transform" />
            <span className="font-bold">41 Bus Routes</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#bcf779]/20 text-[#bcf779] text-[9px] font-mono font-bold hidden sm:inline">
              FREE
            </span>
          </button>

          {/* Domain Expansion Trigger */}
          <button
            type="button"
            onClick={() => {
              playDomainExpansionSound();
              openDomainOverlay();
            }}
            className="jjk-btn-secondary px-3.5 py-1.5 text-xs font-bold text-white flex items-center space-x-1.5 cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span className="font-mono text-[10px] tracking-wider">DOMAIN EXPANSION</span>
          </button>
        </div>
      </header>

      {/* Main Hero Viewport */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center pt-2 sm:pt-4 pb-12 px-4 text-center max-w-6xl mx-auto w-full"
      >
        {/* Dribbble Inspiration: Theme Switcher Dock with Wallpapers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 w-full max-w-4xl"
        >
          <div className="bg-[#0b1721]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center space-x-2 px-2 text-left shrink-0">
              <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest">JJK DOMAIN</span>
              <div>
                <span className="text-[10px] font-mono text-[#9cafb7] uppercase block tracking-wider">
                  ACTIVE RESONANCE:
                </span>
                <span className="text-xs font-bold text-white block">
                  {activeDomain.name}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto w-full sm:w-auto py-1 px-1 scrollbar-none">
              {JJK_DOMAIN_THEMES.map((theme) => {
                const isActive = theme.id === activeDomain.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleSelectTheme(theme)}
                    onMouseEnter={() => playHoverSound()}
                    className={`relative rounded-xl overflow-hidden shrink-0 transition-all duration-300 cursor-pointer h-12 w-20 sm:h-14 sm:w-28 border ${
                      isActive
                        ? "border-cyan-400 ring-2 ring-cyan-400/50 scale-105 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                        : "border-[#1f3c52] opacity-65 hover:opacity-100 hover:border-cyan-400/40"
                    }`}
                  >
                    <img
                      src={theme.wallpaper}
                      alt={theme.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <span className="absolute bottom-1 inset-x-1 text-[8px] sm:text-[9px] font-bold text-white truncate text-center block">
                      {theme.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* PRIMARY EXPLORE EVENT PORTAL HERO BANNER - MOVED TO TOP OF PAGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="w-full max-w-4xl mb-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#101e2c] via-[#1a0e12] to-[#101e2c] border-2 border-red-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center justify-between gap-3 text-left relative overflow-hidden"
        >
          <div className="flex items-center space-x-3 z-10">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <Building2 className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-[9px] font-black uppercase tracking-wider">
                  EVENT HUB
                </span>
                <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wide">
                  12-HOUR HACKATHON · ESEC AUTONOMOUS
                </span>
              </div>
              <h3 className="font-barlow text-lg sm:text-2xl font-black text-white uppercase tracking-wide mt-0.5">
                EXPLORE FULL EVENT PORTAL & 41 BUS ROUTES
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto shrink-0 z-10">
            {/* Explore Portal with Domain Expansion Animation */}
            <button
              type="button"
              onClick={handleExplore}
              disabled={isEmbarking}
              className="jjk-btn-primary w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-white flex items-center justify-center space-x-2 cursor-pointer shadow-xl"
            >
              <Sparkles className={`w-4 h-4 text-cyan-200 ${isEmbarking ? "animate-spin" : ""}`} />
              <span>{isEmbarking ? "DOMAIN EXPANDING..." : "EXPLORE EVENT PORTAL"}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Top JJK Domain Resonance Header Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-2"
        >
          <div
            onClick={() => openDomainOverlay()}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#102d42]/90 border text-white text-[10px] sm:text-xs font-mono font-semibold shadow-lg cursor-pointer hover:brightness-125 transition-all"
            style={{ borderColor: activeDomain.accent }}
          >
            <span
              className="px-2 py-0.5 rounded text-white text-[9px] font-bold font-mono"
              style={{ backgroundColor: activeDomain.accent }}
            >
              SPECIAL GRADE
            </span>
            <span className="text-cyan-300 font-bold">{activeDomain.japanese}</span>
            <span className="text-[#9cafb7] hidden sm:inline">• Tap to Expand Full Domain ↗</span>
          </div>
        </motion.div>

        {/* College & Department Presenter Titles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2 max-w-3xl mx-auto space-y-1"
        >
          <h2 className="font-barlow font-bold text-base sm:text-2xl md:text-3xl text-white uppercase tracking-wider">
            {CIVIL_EVENT_CONFIG.COLLEGE_NAME}
          </h2>
          <div className="flex flex-col items-center justify-center font-mono text-xs sm:text-sm text-cyan-400 tracking-widest uppercase">
            <span>{CIVIL_EVENT_CONFIG.DEPARTMENT}</span>
            <span className="text-[#9cafb7] text-[10px] sm:text-xs tracking-[0.25em] mt-0.5">
              PROUDLY PRESENTS · 15TH OCTOBER 2026
            </span>
          </div>
        </motion.div>

        {/* Event Name & Year */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative my-2 sm:my-3"
        >
          {/* Subtle Background Watermark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-7xl sm:text-9xl font-black text-white/5 select-none pointer-events-none whitespace-nowrap">
            INNO360
          </div>

          <h1 className="font-barlow text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white leading-none relative z-10">
            INNO<span className="text-cyan-400">360</span>{" "}
            <span className="text-3xl sm:text-5xl md:text-6xl text-[#dc2626] font-mono block sm:inline font-bold">
              2026
            </span>
          </h1>
        </motion.div>

        {/* Event Type & Tagline */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-barlow font-bold text-lg sm:text-2xl text-cyan-400 tracking-wider uppercase mb-1"
        >
          SPECIAL GRADE CIVIL SORCERY HACKATHON
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-sans text-xs sm:text-base text-[#d1e4f0] max-w-2xl mx-auto mb-4"
        >
          12 hours of high-stakes innovation. 2 Battle Grounds: <strong>EcoThon</strong> (Open to all streams) & <strong>CADathon</strong> (Civil Engineering). Unleash your structural domain expansion with rapid architectural drafting, sustainable infrastructure, and concrete innovation.
        </motion.p>

        {/* Dribbble Style 4K Feature Card for Active Domain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="w-full max-w-4xl mx-auto mb-6 rounded-2xl overflow-hidden border bg-[#0b1721]/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 text-left flex flex-col md:flex-row items-center gap-6"
          style={{ borderColor: activeDomain.accent }}
        >
          <div className="w-full md:w-1/2 h-52 sm:h-64 rounded-xl overflow-hidden relative group">
            <img
              src={activeDomain.wallpaper}
              alt={activeDomain.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold">
              4K CINEMATIC ARTWORK
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="font-mono text-xs text-cyan-300 block font-bold">{activeDomain.japanese}</span>
              <span className="font-barlow text-xl font-bold uppercase">{activeDomain.name}</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INHERITED TECHNIQUE · {activeDomain.user}</span>
              </div>
              <h4 className="font-barlow text-2xl font-bold text-white mb-2">
                {activeDomain.cursedTechnique}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#b8cfde] mb-4 leading-relaxed">
                {activeDomain.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-3 border-t border-[#1f3c52]">
              <button
                type="button"
                onClick={() => {
                  playDomainExpansionSound();
                  openDomainOverlay();
                }}
                className="jjk-btn-primary px-4 py-2 text-xs font-bold text-white flex items-center space-x-1.5 cursor-pointer shadow-lg"
              >
                <span>TRIGGER DOMAIN EXPANSION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[10px] text-[#9cafb7]">
                Synced with 3D Lab
              </span>
            </div>
          </div>
        </motion.div>

        {/* Highlights Strip with Bus and Transport Integration */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto mb-6 text-left w-full"
        >
          <div className="bg-[#102d42]/80 border border-[#29404c] p-3 rounded-xl hover:border-cyan-400 transition-colors">
            <span className="font-mono text-[9px] text-[#00f0ff] block font-bold">OPEN TO ALL</span>
            <span className="text-xs text-white font-medium">12th+ / Arts / Diploma / Engg</span>
          </div>

          <div
            onClick={() => navigate("/portal#transport")}
            className="bg-[#102d42]/80 border border-[#29404c] p-3 rounded-xl hover:border-[#bcf779] transition-colors cursor-pointer group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#bcf779] font-bold">41 BUS ROUTES</span>
              <Bus className="w-3.5 h-3.5 text-[#bcf779] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-xs text-white font-medium">All Districts · Free Pickups ↗</span>
          </div>

          <div className="bg-[#102d42]/80 border border-[#29404c] p-3 rounded-xl hover:border-cyan-400 transition-colors">
            <span className="font-mono text-[9px] text-cyan-400 block font-bold">CASH PRIZES</span>
            <span className="text-xs text-white font-medium">Attractive Cash Rewards</span>
          </div>

          <div className="bg-[#102d42]/80 border border-[#29404c] p-3 rounded-xl hover:border-[#ff9a64] transition-colors">
            <span className="font-mono text-[9px] text-[#ff9a64] block font-bold">HOSPITALITY</span>
            <span className="text-xs text-white font-medium">Free Lunch + High Tea</span>
          </div>
        </motion.div>

        {/* Interactive Sorcerer Architects Showcase (Gojo, Sukuna, Yuji Squad, Tokyo Barrier) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full"
        >
          <JJKCharacterShowcase />
        </motion.div>

        {/* 3D Parametric CAD Building & Structural Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="my-4 sm:my-6 flex flex-col items-center justify-center w-full"
        >
          <div className="text-center mb-3">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
              3D STRUCTURAL DOMAIN SIMULATOR
            </span>
            <h4 className="font-barlow text-2xl font-bold text-white uppercase">
              EXPLORE BIM CANTILEVER VAULT
            </h4>
          </div>
          <RealisticCompass3D
            ref={modelRef}
            onStartSpin={() => setIsEmbarking(true)}
            onEmbark={() => navigate("/portal")}
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl px-4"
        >
          {/* Explore Portal */}
          <button
            type="button"
            onClick={handleExplore}
            disabled={isEmbarking}
            className="jjk-btn-secondary w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
          >
            <Building2 className={`w-4 h-4 text-cyan-400 ${isEmbarking ? "animate-spin" : ""}`} />
            <span>{isEmbarking ? "DOMAIN EXPANDING..." : "EXPLORE EVENT PORTAL"}</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Official Registration Google Form */}
          <a
            href={CIVIL_EVENT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className="jjk-btn-primary w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold text-white flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4" />
            <span>REGISTER TEAM NOW ↗</span>
          </a>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center font-mono text-xs text-[#9cafb7] border-t border-[#1f3c52] bg-[#070e14]/90">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4">
          <span>© 2026 {CIVIL_EVENT_CONFIG.DEPARTMENT}</span>
          <span className="hidden sm:inline">•</span>
          <span>{CIVIL_EVENT_CONFIG.COLLEGE_NAME} (AUTONOMOUS)</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-cyan-400 font-bold">JUJUTSU KAISEN SPECIAL GRADE EDITION</span>
        </div>
      </footer>
    </div>
  );
};
