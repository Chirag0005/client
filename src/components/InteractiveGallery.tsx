"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES } from "@/data/portfolioData";
import { Layers, ArrowRight, Code, Sparkles, CheckCircle2 } from "lucide-react";

export default function InteractiveGallery() {
  const [activeTab, setActiveTab] = useState(GALLERY_CATEGORIES[0].id);

  const activeCategory =
    GALLERY_CATEGORIES.find((cat) => cat.id === activeTab) || GALLERY_CATEGORIES[0];

  return (
    <section className="py-24 sm:py-32 bg-[#EFEFE9] border-t border-[#171717]/10 relative pattern-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>INTERACTIVE SECTOR GALLERY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            Tailored digital design across distinct industries.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#171717]/75 font-normal leading-relaxed">
            Click through each sector to see how visual composition, interaction patterns,
            and information architecture shift based on your market.
          </p>
        </div>

        {/* Category Tabs (Desktop & Mobile accessible) */}
        <div className="flex flex-wrap gap-2.5 border-b border-[#171717]/15 pb-5 mb-8 sm:mb-12" role="tablist">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-mono tracking-wide transition-all border-2 ${
                activeTab === cat.id
                  ? "bg-[#171717] text-[#C7F36B] border-[#171717] font-bold shadow-md scale-102"
                  : "bg-white text-[#171717]/80 border-[#171717]/15 hover:border-[#171717] hover:text-[#171717]"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Dynamic Display Container with Hover Glow */}
        <div
          key={activeCategory.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 bg-white p-6 sm:p-10 lg:p-12 border-2 border-[#171717] shadow-xl items-center animate-in fade-in duration-300"
        >
          {/* Visual Showcase (Meaningfully distinct preview per category) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full border-2 border-[#171717] shadow-lg overflow-hidden bg-black group">
              <Image
                src={activeCategory.image}
                alt={`${activeCategory.name} Preview Showcase`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C7F36B] font-bold">
                    {activeCategory.label}
                  </span>
                  <h4 className="font-heading text-xl sm:text-2xl font-bold mt-1 text-white">
                    {activeCategory.conceptName}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                {activeCategory.label}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
                {activeCategory.conceptName}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#171717]/80 leading-relaxed font-normal">
                {activeCategory.description}
              </p>

              {/* Design & UX Characteristics */}
              <div className="mt-6 pt-6 border-t border-[#171717]/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/60 font-bold block mb-3">
                  Tailored Design Patterns
                </span>
                <ul className="space-y-2.5">
                  {activeCategory.characteristics.map((char, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs sm:text-sm text-[#171717]/85 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#171717] mt-0.5 flex-shrink-0" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 pt-4 border-t border-[#171717]/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/60 font-bold block mb-2">
                  Recommended Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#FAF9F5] border border-[#171717]/20 text-xs font-mono font-medium text-[#171717]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#171717]/10">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center gap-2 px-5 py-3 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-sm group"
              >
                <span>Discuss a project in this industry</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
