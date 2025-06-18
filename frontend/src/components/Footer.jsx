import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-2 flex flex-col sm:flex-row items-center justify-between bg-mp-blue/80 backdrop-blur-glass border-t border-mp-blue-light animate-fade-in-up z-10 shadow-xl gap-2">
      {/* Socials far left */}
      <div className="flex gap-3 order-1 sm:order-none">
        <a
          href="#"
          aria-label="WhatsApp"
          className="w-8 h-8 bg-mp-blue-light/60 rounded-full flex items-center justify-center text-white shadow hover:bg-white/30 transition"
        >
          {/* WhatsApp Icon */}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
            />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="w-8 h-8 bg-mp-blue-light/60 rounded-full flex items-center justify-center text-white shadow hover:bg-white/30 transition"
        >
          {/* Instagram Icon */}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <rect
              width="18"
              height="18"
              x="3"
              y="3"
              rx="5"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2" />
            <circle cx="17" cy="7" r="1" fill="#fff" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="w-8 h-8 bg-mp-blue-light/60 rounded-full flex items-center justify-center text-white shadow hover:bg-white/30 transition"
        >
          {/* LinkedIn Icon */}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              stroke="#fff"
              strokeWidth="2"
            />
            <path
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              d="M7 10v6"
            />
            <circle cx="7" cy="8" r="1" fill="#fff" />
            <path
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              d="M11 16v-3a2 2 0 1 1 4 0v3"
            />
            <path
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              d="M15 13v3"
            />
          </svg>
        </a>
      </div>
      {/* Copyright center */}
      <div className="text-xs text-white/70 text-center flex-1 order-3 sm:order-none">
        © MedicoPlus
      </div>
      {/* Contact far right */}
      <div className="text-sm text-white/90 font-medium order-2 sm:order-none">
        contact@medicoplus.com
      </div>
    </footer>
  );
}