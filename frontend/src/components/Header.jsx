import React from "react";
import logo from "../assets/logo.png"; // Adjust the path if needed

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 w-full bg-mp-blue/60 backdrop-blur-glass shadow-2xl animate-fade-in-down rounded-b-2xl z-10 border-b border-mp-blue-light">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Personal Logo"
          className="h-10 w-auto  rounded-full"
        />
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