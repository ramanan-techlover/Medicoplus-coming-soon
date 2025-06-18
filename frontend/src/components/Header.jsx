import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 w-full bg-mp-blue/60 backdrop-blur-glass shadow-2xl animate-fade-in-down rounded-b z-10 border-b border-mp-blue-light">
      <div className="flex items-center gap-3">
        <span className="bg-mp-blue-light/30 rounded-full p-2 shadow-lg">
          {/* Heart/health icon */}
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M12 21s-6.5-5.5-8.5-8.5A5.5 5.5 0 0 1 12 5.5a5.5 5.5 0 0 1 8.5 7C18.5 15.5 12 21 12 21z" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
        </span>
        <span className="text-white text-2xl font-extrabold tracking-tight drop-shadow-lg">
          Medico<span className="text-mp-blue-light">Plus</span>
        </span>
      </div>
      <div className="flex items-center gap-2 text-white/90">
        <span className="font-semibold text-base">Coming Soon</span>
        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
      </div>
    </header>
  );
}