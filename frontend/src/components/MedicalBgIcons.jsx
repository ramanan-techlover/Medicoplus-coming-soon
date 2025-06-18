import React from "react";

export default function MedicalBgIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
      {/* Stethoscope */}
      <svg className="absolute left-10 top-40 animate-float-slow opacity-40" width="70" height="70" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="18" r="3" stroke="#60a5fa" strokeWidth="2"/>
        <path d="M5 3v7a5 5 0 0 0 10 0V3" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17v1a5 5 0 0 0 10 0v-1" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {/* Heartbeat */}
      <svg className="absolute right-16 top-56 animate-float opacity-30" width="90" height="90" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h4l2 5 4-10 2 5h4" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* Pill */}
      <svg className="absolute left-1/2 bottom-20 animate-float-slow opacity-30" width="60" height="60" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="6" rx="3" stroke="#2563eb" strokeWidth="2.5"/>
        <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="#2563eb" strokeWidth="2.5"/>
      </svg>
      {/* Syringe */}
      <svg className="absolute right-10 bottom-32 animate-float opacity-30" width="60" height="60" viewBox="0 0 24 24" fill="none">
        <rect x="14" y="2" width="8" height="2" rx="1" fill="#3b82f6" opacity="0.2"/>
        <path d="M19 3v7M17 5h4" stroke="#3b82f6" strokeWidth="2.5"/>
        <rect x="3" y="14" width="14" height="6" rx="3" stroke="#3b82f6" strokeWidth="2.5"/>
      </svg>
      {/* Medical Cross */}
      <svg className="absolute left-24 bottom-32 animate-float opacity-30" width="60" height="60" viewBox="0 0 24 24" fill="none">
        <rect x="9" y="4" width="6" height="16" rx="2" fill="#60a5fa" />
        <rect x="4" y="9" width="16" height="6" rx="2" fill="#60a5fa" />
      </svg>
      {/* DNA */}
      <svg className="absolute right-32 top-32 animate-float-slow opacity-30" width="70" height="70" viewBox="0 0 24 24" fill="none">
        <path d="M7 4c4 4 6 12 10 16M17 4c-4 4-6 12-10 16" stroke="#2563eb" strokeWidth="2.5"/>
        <path d="M8 8h8M8 16h8" stroke="#2563eb" strokeWidth="2.5"/>
      </svg>
      {/* Bandage */}
      <svg className="absolute left-1/4 top-1/3 animate-float opacity-30" width="50" height="50" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="2" rx="1" fill="#3b82f6"/>
        <rect x="11" y="5" width="2" height="14" rx="1" fill="#3b82f6"/>
      </svg>
      {/* Clipboard */}
      <svg className="absolute right-1/4 bottom-10 animate-float-slow opacity-30" width="60" height="60" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="#60a5fa" strokeWidth="2.5"/>
        <rect x="9" y="2" width="6" height="4" rx="1" fill="#60a5fa"/>
      </svg>
      {/* Hospital */}
      <svg className="absolute left-1/3 top-24 animate-float opacity-30" width="60" height="60" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="8" width="16" height="12" rx="2" stroke="#1e40af" strokeWidth="2.5"/>
        <rect x="9" y="14" width="6" height="6" rx="1" fill="#1e40af"/>
        <rect x="11" y="10" width="2" height="4" rx="1" fill="#60a5fa"/>
      </svg>
      {/* Thermometer */}
      <svg className="absolute right-1/3 bottom-24 animate-float-slow opacity-30" width="50" height="50" viewBox="0 0 24 24" fill="none">
        <rect x="10" y="2" width="4" height="14" rx="2" stroke="#60a5fa" strokeWidth="2.5"/>
        <circle cx="12" cy="19" r="3" stroke="#60a5fa" strokeWidth="2.5"/>
      </svg>
      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-20px);}
        }
      `}</style>
    </div>
  );
}