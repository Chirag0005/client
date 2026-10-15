"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function MarqueeBanner() {
  const items = [
    "SCANDINAVIAN DIGITAL CRAFT",
    "FULL-STACK WEB DEVELOPMENT",
    "E-COMMERCE ARCHITECTURE",
    "PERFORMANCE-FIRST CODE",
    "BESPOKE NEXT.JS & TYPESCRIPT",
    "HUMAN-CENTERED UI/UX",
    "MODERN BUSINESS WEBSITES",
  ];

  return (
    <div className="w-full bg-[#171717] text-[#F7F7F2] py-4 sm:py-5 overflow-hidden border-y border-white/10 relative z-20 shadow-md">
      {/* Ambient lime edge glows */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest font-semibold uppercase select-none">
        {/* Double the list for seamless infinite loop */}
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-[#F7F7F2]/90 hover:text-[#C7F36B] transition-colors cursor-default">
              {text}
            </span>
            <span className="flex items-center gap-1.5 text-[#C7F36B]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
