import React, { createContext, useContext, useState, useEffect } from "react";
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
    const saved = localStorage.getItem("jjk_domain_theme");
    if (saved) {
      const match = JJK_DOMAIN_THEMES.find(t => t.id === saved);
      if (match) return match;
    }
    return JJK_DOMAIN_THEMES[0]; // Gojo Satoru - Infinite Blueprint
  });

  const [isDomainOverlayOpen, setIsDomainOverlayOpen] = useState(false);

  const setActiveDomain = (domain: JJKDomainTheme) => {
    setActiveDomainState(domain);
    localStorage.setItem("jjk_domain_theme", domain.id);
  };

  const openDomainOverlay = () => setIsDomainOverlayOpen(true);
  const closeDomainOverlay = () => setIsDomainOverlayOpen(false);

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
