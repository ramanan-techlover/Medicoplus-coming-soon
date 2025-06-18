import React from "react";
import { useState } from 'react';

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center md:items-start bg-white/90 border border-mp-blue-light rounded-2xl p-4 sm:p-6 min-w-[140px] sm:min-w-[180px] animate-fade-in-up shadow-xl backdrop-blur-glass mb-4 md:mb-0">
      <div className="mb-2 sm:mb-3">{icon}</div>
      <div className="font-semibold text-mp-blue-dark text-base sm:text-lg mb-1 sm:mb-2">{title}</div>
      <div className="text-mp-blue text-sm sm:text-base">{desc}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full max-w-xl md:max-w-2xl text-center md:text-left animate-fade-in-up z-10">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
        Healthcare.<br />
        <span className=" text-gray-300">Reimagined.</span>
      </h1>
      <p className="text-base sm:text-lg md:text-2xl text-white mb-4 sm:mb-6 md:mb-10 font-semibold drop-shadow">
        MedicoPlus is launching soon to make healthcare <span className="text-amber-200 font-bold">smarter</span>, <span className="text-mp-blue-dark font-bold">accessible</span>, and deeply <span className="font-bold text-amber-100">human</span>.
      </p>
      <div className="w-full bg-white/90 border border-mp-blue-light rounded-2xl p-3 sm:p-6 mb-4 sm:mb-8 backdrop-blur-glass shadow-lg">
        <blockquote className="italic text-mp-blue-dark text-sm sm:text-lg md:text-xl text-center md:text-left">
          "At MedicoPlus, we believe healthcare should be as seamless as ordering a meal — and twice as thoughtful."
        </blockquote>
      </div>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 w-full">
        <FeatureCard
          icon={
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" stroke="#3b82f6" strokeWidth="2"/>
              <path d="M8 3h8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 11v4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 13h4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          title="For Providers"
          desc="Smart dashboards and seamless patient management"
        />
        <FeatureCard
          icon={
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/>
              <path d="M12 8v4l2 2" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          title="For Patients"
          desc="Intuitive health tracking and instant appointments"
        />
      </div>
    </section>
  );
}