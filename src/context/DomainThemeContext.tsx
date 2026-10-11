import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { JJK_DOMAIN_THEMES, JJKDomainTheme } from "../config/constants";

interface DomainThemeContextType {
  activeDomain: JJKDomainTheme;
  setActiveDomain: (domain: JJKDomainTheme) => void;
  isDomainOverlayOpen: boolean;
  openDomainOverlay: () => void;
  closeDomainOverlay: () => void;
}

const DomainThemeContext = createContext<DomainThemeContextType | undefined>(undefined);

export const DomainThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDomain, setActiveDomainState] = useState<JJKDomainTheme>(() => {
    try {
      const saved = localStorage.getItem("jjk_domain_theme");
      const match = JJK_DOMAIN_THEMES.find(t => t.id === saved);
      if (match) return match;
    } catch { /* The default domain works when storage is unavailable. */ }
    return JJK_DOMAIN_THEMES[0];
  });

  const [isDomainOverlayOpen, setIsDomainOverlayOpen] = useState(false);

  const setActiveDomain = (domain: JJKDomainTheme) => {
    setActiveDomainState(domain);
    try { localStorage.setItem("jjk_domain_theme", domain.id); } catch { /* Keep the current session usable. */ }
  };

  const openDomainOverlay = useCallback(() => setIsDomainOverlayOpen(true), []);
  const closeDomainOverlay = useCallback(() => setIsDomainOverlayOpen(false), []);

  useEffect(() => {
    document.documentElement.dataset.domain = activeDomain.id;
    document.documentElement.style.setProperty("--domain-accent", activeDomain.accent);
    document.documentElement.style.setProperty("--domain-glow", activeDomain.glow);
  }, [activeDomain]);

  return (
    <DomainThemeContext.Provider
      value={{
        activeDomain,
        setActiveDomain,
        isDomainOverlayOpen,
        openDomainOverlay,
        closeDomainOverlay
      }}
    >
      {children}
    </DomainThemeContext.Provider>
  );
};

export const useDomainTheme = () => {
  const context = useContext(DomainThemeContext);
  if (!context) {
    throw new Error("useDomainTheme must be used within a DomainThemeProvider");
  }
  return context;
};
