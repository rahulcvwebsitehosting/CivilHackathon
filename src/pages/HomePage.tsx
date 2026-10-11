import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Bus, ChevronRight } from "lucide-react";
import { CIVIL_EVENT_CONFIG, JJK_DOMAIN_THEMES, isRegistrationClosed } from "../config/constants";
import { useDomainTheme } from "../context/DomainThemeContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../sections/Footer";
import { playDomainExpansionSound } from "../utils/cyberSound";

export const HomePage: React.FC = () => {
  const { activeDomain, setActiveDomain, openDomainOverlay } = useDomainTheme();
  const [expanding, setExpanding] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const navigate = useNavigate();
  useEffect(() => () => clearTimeout(timer.current), []);

  const enterDomain = () => {
    if (expanding) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      navigate("/portal");
      return;
    }
    setExpanding(true);
    playDomainExpansionSound();
    timer.current = setTimeout(() => navigate("/portal"), 850);
  };

  return (
    <div className="domain-home">
      <Navbar />
      {expanding && <div className="domain-transition" role="status"><span lang="ja">領域展開</span><strong>DOMAIN EXPANSION</strong><small>Entering the battlefield</small></div>}
      <main id="main-content">
        <section className="domain-hero" aria-labelledby="hero-title">
          <picture className="domain-hero-art">
            <source type="image/webp" srcSet="/assets/jjk/domain-clash-836.webp 836w, /assets/jjk/domain-clash-1672.webp 1672w" sizes="100vw" />
            <img src="/assets/jjk/domain-clash-master.png" alt="Satoru Gojo and Ryomen Sukuna forming domain expansion hand seals beneath a crimson moon, illustrated in manga ink" width="1672" height="941" fetchPriority="high" />
          </picture>
          <div className="hero-ink-wash" aria-hidden="true" />
          <div className="hero-side-script" lang="ja" aria-hidden="true">呪術廻戦</div>
          <div className="hero-content">
            <div className="chapter-label"><span className="red-diamond" /> JUJUTSU KAISEN INSPIRED <span className="chapter-divider">/</span> CHAPTER 2026</div>
            <p className="hero-presenter">ERODE SENGUNTHAR ENGINEERING COLLEGE<br /><span>Department of Civil Engineering presents</span></p>
            <h1 id="hero-title"><span className="hero-title-ink">INNO<span>360</span></span><span className="hero-title-sub">EXPAND YOUR<br /><em>DOMAIN.</em></span></h1>
            <p className="hero-description">The curtain falls. Your technique awakens.<br />12 hours. Two battle grounds. One chance to build beyond your limits.</p>
            <div className="hero-actions">
              <button className="seal-button seal-button-red" onClick={enterDomain} disabled={expanding}><span lang="ja" aria-hidden="true">領域</span>{expanding ? "EXPANDING…" : "ENTER THE DOMAIN"}<ArrowUpRight size={20} /></button>
              <Link className="hero-register" to="/register">REGISTER YOUR SQUAD <ArrowUpRight size={17} /></Link>
            </div>
            <div className="hero-bottom-note"><span className="status-dot" /> {isRegistrationClosed() ? "REGISTRATION CLOSED" : "REGISTRATION OPEN"} <span>DEADLINE 14 OCT · 11:59 PM IST</span></div>
          </div>
          <div className="hero-art-caption"><span>01 — THE STRONGEST</span><span lang="ja">五条悟 × 両面宿儺</span></div>
          <a className="hero-scroll" href="#techniques" aria-label="Discover the battle grounds"><ArrowDown size={17} /><span>SCROLL TO AWAKEN</span></a>
        </section>
        <div className="cursed-marquee" aria-hidden="true"><span>領域展開</span> DOMAIN EXPANSION <span>✦</span> BREAK YOUR LIMITS <span>領域展開</span> DOMAIN EXPANSION <span>✦</span> BREAK YOUR LIMITS</div>
        <section className="mission-facts" aria-label="Event essentials">
          <div><span className="fact-index">01 / THE DAY</span><strong>15 OCTOBER <em>2026</em></strong><small>Thursday · 8 AM — 8 PM IST</small></div>
          <div><span className="fact-index">02 / THE SQUAD</span><strong>3–4 SORCERERS</strong><small>₹250 per student · food included</small></div>
          <div><span className="fact-index">03 / THE BATTLEFIELD</span><strong>ESEC, PERUNDURAI</strong><small>Erode · Tamil Nadu</small></div>
          <Link to="/portal#transport" className="fact-transport"><Bus size={24} /><div><strong>41 FREE BUS ROUTES</strong><small>Find your way to the domain</small></div><ArrowUpRight size={22} /></Link>
        </section>
        <section id="techniques" className="techniques-section">
          <div className="section-intro"><div><p className="chapter-label">CHAPTER 01 <span className="chapter-divider">/</span> CHOOSE YOUR TECHNIQUE</p><h2>TWO BATTLE<br /><em>GROUNDS.</em></h2></div><p>Every sorcerer has a technique.<br />Bring yours to a real-world challenge.<br /><span>Problem statements revealed on the spot.</span></p></div>
          <div className="technique-grid">
            <Link to="/portal#tracks" className="technique-panel">
              <div className="technique-art"><img src="/assets/jjk/jjk-ecothon.jpg" alt="Megumi Fushiguro with his shikigami, representing the EcoThon sustainability track" width="1376" height="768" loading="lazy" /><span className="panel-number">01</span><span className="panel-seal" lang="ja">十種影法術</span></div>
              <div className="technique-copy"><span className="chapter-label">TEN SHADOWS <span>/</span> ALL STREAMS · 12TH+</span><div><h3>EcoThon</h3><ArrowUpRight /></div><p>Turn environmental challenges into sustainable solutions with AI, IoT, software, or hardware. Let your ideas take form.</p><span className="panel-link">DISCOVER THE TECHNIQUE <ChevronRight size={17} /></span></div>
            </Link>
            <Link to="/portal#tracks" className="technique-panel">
              <div className="technique-art"><img src="/assets/jjk/jjk-cadathon.jpg" alt="Satoru Gojo performing his limitless technique, representing the CADathon design track" width="1376" height="768" loading="lazy" /><span className="panel-number">02</span><span className="panel-seal" lang="ja">無下限呪術</span></div>
              <div className="technique-copy"><span className="chapter-label">LIMITLESS <span>/</span> CIVIL ENGINEERING ONLY</span><div><h3>CADathon</h3><ArrowUpRight /></div><p>Command geometry, structure, and space. Design the next breakthrough with architectural drafting, CAD, and BIM.</p><span className="panel-link">DISCOVER THE TECHNIQUE <ChevronRight size={17} /></span></div>
            </Link>
          </div>
        </section>
        <section className="domain-selection" aria-labelledby="selection-title">
          <div className="section-intro"><div><p className="chapter-label">CHAPTER 02 <span className="chapter-divider">/</span> YOUR INNATE TERRITORY</p><h2 id="selection-title">MANIFEST YOUR<br /><em>DOMAIN.</em></h2></div><div><p>Choose the atmosphere of your battlefield.<br /><span>Currently manifested: {activeDomain.name}</span></p><button className="text-action" onClick={openDomainOverlay}>EXPAND DOMAIN SELECTOR <ArrowUpRight size={18} /></button></div></div>
          <div className="domain-card-grid">{JJK_DOMAIN_THEMES.map((domain, index) => <button key={domain.id} aria-pressed={activeDomain.id === domain.id} className={`domain-card ${activeDomain.id === domain.id ? "is-active" : ""}`} onClick={() => setActiveDomain(domain)}><img src={domain.wallpaper} alt="" width="1376" height="768" loading="lazy" /><span className="domain-card-index">0{index + 1}</span><span className="domain-card-copy"><small>{domain.user}</small><strong>{domain.name}</strong><span lang="ja">{domain.japanese}</span></span><span className="domain-card-status">{activeDomain.id === domain.id ? "MANIFESTED" : "SELECT DOMAIN"}</span></button>)}</div>
        </section>
        <section className="binding-vow"><span className="binding-script" lang="ja" aria-hidden="true">縛り</span><p className="chapter-label">THE BINDING VOW</p><h2>YOUR SQUAD.<br />YOUR TECHNIQUE.<br /><em>YOUR MOMENT.</em></h2><p>Assemble 3 or 4 teammates. Bring your laptop.<br />We’ll bring the challenge. You bring the impossible.</p><Link to="/register" className="seal-button seal-button-red"><span lang="ja" aria-hidden="true">契約</span>REGISTER YOUR SQUAD<ArrowUpRight size={20} /></Link><small>₹{CIVIL_EVENT_CONFIG.REGISTRATION_FEE_PER_MEMBER} / STUDENT · LUNCH + REFRESHMENTS + CERTIFICATE</small></section>
      </main>
      <Footer />
    </div>
  );
};
