import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DomainThemeProvider } from "./context/DomainThemeContext";

const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const EventPortalPage = lazy(() => import("./pages/EventPortalPage").then(m => ({ default: m.EventPortalPage })));
const RegisterPage = lazy(() => import("./pages/RegisterPage").then(m => ({ default: m.RegisterPage })));
const StatusPage = lazy(() => import("./pages/StatusPage").then(m => ({ default: m.StatusPage })));
const ReviewCountdownPage = lazy(() => import("./pages/ReviewCountdownPage").then(m => ({ default: m.ReviewCountdownPage })));

const LoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-[#070e14] flex flex-col items-center justify-center text-white select-none">
    <div className="relative w-14 h-14 flex items-center justify-center mb-4">
      <div className="absolute inset-0 border-2 border-[#64cfe6]/30 rounded-full animate-ping" />
      <div className="w-10 h-10 border-2 border-t-[#e75b2c] border-r-[#64cfe6] border-b-transparent border-l-transparent rounded-full animate-spin" />
    </div>
    <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#9cafb7]">
      領域展開 · INITIALIZING CIVIL SORCERY ENGINE...
    </span>
  </div>
);

export default function App() {
  return (
    <DomainThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portal" element={<EventPortalPage />} />
            <Route path="/event" element={<EventPortalPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/review" element={<ReviewCountdownPage />} />
            <Route path="/reviews" element={<ReviewCountdownPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DomainThemeProvider>
  );
}
