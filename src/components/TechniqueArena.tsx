import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Zap } from "lucide-react";
import { Technique, TechniqueEnergy } from "./JujutsuMotion";
import { playDomainExpansionSound } from "../utils/cyberSound";

const techniques: { id: Technique; character: string; name: string; japanese: string; image: string; description: string; chant: string }[] = [
  { id: "infinity", character: "SATORU GOJO", name: "INFINITY", japanese: "無下限呪術", image: "gojo-infinity", description: "Between you and the impossible lies an infinity of possibilities.", chant: "LIMITLESS · INFINITY MANIFESTED" },
  { id: "shadows", character: "MEGUMI FUSHIGURO", name: "TEN SHADOWS", japanese: "十種影法術", image: "megumi-shadows", description: "Let the shadows take shape. Summon the strength of your shikigami.", chant: "TEN SHADOWS · DIVINE DOGS SUMMONED" },
  { id: "resonance", character: "NOBARA KUGISAKI", name: "RESONANCE", japanese: "共鳴り", image: "nobara-resonance", description: "A hammer, a nail, and unshakable resolve. Make every strike count.", chant: "STRAW DOLL TECHNIQUE · RESONANCE" },
  { id: "black-flash", character: "YUJI ITADORI", name: "BLACK FLASH", japanese: "黒閃", image: "yuji-black-flash", description: "Cursed energy and impact become one. Strike beyond your limits.", chant: "BLACK FLASH · CURSED ENERGY RELEASED" }
];

export const TechniqueArena: React.FC<{ initialTechnique?: number }> = ({ initialTechnique = 0 }) => {
  const [selected, setSelected] = useState(initialTechnique);
  const [casting, setCasting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = techniques[selected];
  useEffect(() => () => clearTimeout(timer.current), []);
  const select = (index: number) => {
    clearTimeout(timer.current);
    setCasting(false);
    setSelected(index);
  };
  const cast = () => {
    if (casting) return;
    playDomainExpansionSound();
    setCasting(true);
    timer.current = setTimeout(() => setCasting(false), 1600);
  };
  const navigateTabs = (event: React.KeyboardEvent, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % techniques.length;
    else if (event.key === "ArrowLeft") next = (index + techniques.length - 1) % techniques.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = techniques.length - 1;
    else return;
    event.preventDefault(); select(next); tabs.current[next]?.focus();
  };

  return <section id="cursed-techniques" className="technique-arena" aria-labelledby="arena-title">
    <div className="section-intro"><div><p className="chapter-label">CURSED TECHNIQUE LAB <span>/</span> TOUCH THE IMPOSSIBLE</p><h2 id="arena-title">DON’T JUST WATCH.<br /><em>CAST YOUR TECHNIQUE.</em></h2></div><p>Four sorcerers. Four innate techniques.<br />Choose your character. Release your cursed energy.</p></div>
    <div className="sorcerer-tabs" role="tablist" aria-label="Choose a sorcerer's technique">
      {techniques.map((technique, index) => <button key={technique.id} ref={node => { tabs.current[index] = node; }} id={`technique-tab-${technique.id}`} role="tab" aria-selected={index === selected} aria-controls="technique-stage" tabIndex={index === selected ? 0 : -1} onClick={() => select(index)} onKeyDown={event => navigateTabs(event, index)}><small>0{index + 1} / {technique.character}</small><strong>{technique.name}</strong><span lang="ja">{technique.japanese}</span></button>)}
    </div>
    <div id="technique-stage" className={`technique-stage stage-${active.id} ${casting ? "is-casting" : ""}`} role="tabpanel" aria-labelledby={`technique-tab-${active.id}`} tabIndex={0}>
      <div className="technique-scene" key={active.id}>
        <picture><source type="image/webp" srcSet={`/assets/jjk/${active.image}-836.webp 836w, /assets/jjk/${active.image}-1672.webp 1672w`} sizes="(max-width: 1260px) 100vw, 1180px" /><img src={`/assets/jjk/${active.image}-1672.webp`} alt={`${active.character} performing ${active.name} in a cinematic manga scene`} width="1672" height="941" loading="lazy" /></picture>
        <TechniqueEnergy technique={active.id} />
      </div>
      <div className="technique-stage-copy" key={`copy-${active.id}`}><p className="chapter-label">INNATE TECHNIQUE / 0{selected + 1}</p><span className="technique-kanji" lang="ja">{active.japanese}</span><h3>{active.name}</h3><p>{active.description}</p><button className="seal-button seal-button-red" onClick={cast} disabled={casting}><Zap size={18} />{casting ? "TECHNIQUE RELEASED" : "RELEASE TECHNIQUE"}<ArrowUpRight size={17} /></button></div>
      <div className="technique-chant" role="status" aria-live="polite">{casting ? active.chant : "SELECT A SORCERER · RELEASE THEIR TECHNIQUE"}</div>
      <span className="technique-stage-stamp" aria-hidden="true" lang="ja">呪</span>
    </div>
  </section>;
};
