"use client";

import React from "react";
import { SERVICES } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Layers, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F7F7F2] border-t border-[#171717]/10 relative pattern-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPABILITIES & EXPERTISE</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
              Modern websites, built around your business.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
              From corporate flagships to high-conversion online stores, I offer end-to-end
              design and engineering services tailored to your objectives.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center gap-2 px-7 sm:px-9 py-4 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] hover:shadow-[0_0_25px_rgba(199,243,107,0.4)] font-bold text-xs sm:text-sm tracking-wide font-mono uppercase transition-all duration-200 border border-[#171717] group"
            >
              <span>Tell Me About Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* 5 EDITORIAL SERVICES LAYOUT WITH GLOWING HOVER STATES */}
        <div className="space-y-4">
          {SERVICES.map((srv, idx) => {
            const isFeatured = idx === 1 || idx === 3;

            return (
              <div
                key={srv.id}
                className={`p-8 sm:p-10 lg:p-12 border-2 border-[#171717]/15 rounded-none transition-all duration-300 relative group overflow-hidden ${
                  isFeatured
                    ? "bg-[#FAF9F5] hover:border-[#171717] hover:shadow-[0_12px_40px_rgba(23,23,23,0.08)]"
                    : "bg-white hover:border-[#171717] hover:shadow-[0_12px_40px_rgba(23,23,23,0.08)]"
                }`}
              >
                {/* Left glowing lime bar on hover */}
                <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-2 bg-[#C7F36B] transition-all duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start pl-2">
                  {/* Number & Service Identifier */}
                  <div className="lg:col-span-2 flex items-baseline justify-between lg:block">
                    <span className="font-mono text-4xl sm:text-5xl font-black text-[#171717]/30 group-hover:text-[#171717] transition-colors">
                      {srv.number}
                    </span>
                    <span className="lg:hidden text-xs font-mono text-[#171717]/60 uppercase font-bold">
                      Service
                    </span>
                  </div>

                  {/* Title & Core Description */}
                  <div className="lg:col-span-5">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-mono text-[#171717] font-semibold">
                      {srv.tagline}
                    </p>
                    <p className="mt-4 text-base text-[#171717]/75 font-normal leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="lg:col-span-5 bg-[#FAF9F5] p-6 border border-[#171717]/10 group-hover:border-[#171717]/20 transition-colors">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/60 font-bold block mb-3">
                      Deliverables & Focus
                    </span>
                    <ul className="space-y-2.5">
                      {srv.highlights.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="text-xs sm:text-sm text-[#171717]/85 flex items-start gap-2.5 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#171717] group-hover:text-[#C7F36B] mt-0.5 flex-shrink-0 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-[#171717]/10 flex justify-end">
                      <a
                        href={`#contact?service=${encodeURIComponent(srv.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold text-[#171717] hover:text-black group-hover:underline"
                      >
                        <span>Inquire about this service</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
