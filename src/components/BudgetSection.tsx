"use client";

import React from "react";
import { BUDGET_TIERS } from "@/data/portfolioData";
import { ArrowUpRight, Check, SlidersHorizontal, Sparkles } from "lucide-react";

export default function BudgetSection() {
  return (
    <section id="budget" className="py-24 sm:py-32 bg-[#F7F7F2] border-t border-[#171717]/10 relative pattern-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>PROJECT SCOPES & PACKAGES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            Let&apos;s find the right approach for your business.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
            Every business is unique. Choose a tier that aligns with your current scale,
            and we will craft a transparent proposal tailored to your specific goals.
          </p>

          <p className="mt-3 text-xs font-mono text-[#171717]/60">
            * Custom fixed-price estimates provided following our initial discovery conversation.
          </p>
        </div>

        {/* 3 PROJECT TIERS WITH VIVID HOVER CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {BUDGET_TIERS.map((tier, idx) => {
            const isPopular = idx === 1; // Business Website highlighted

            return (
              <div
                key={tier.id}
                className={`p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 border-2 rounded-none ${
                  isPopular
                    ? "bg-[#171717] text-[#F7F7F2] border-[#171717] shadow-2xl hover:shadow-[0_20px_60px_rgba(199,243,107,0.25)] hover:border-[#C7F36B]"
                    : "bg-white text-[#171717] border-[#171717]/15 hover:border-[#171717] hover:shadow-[0_12px_40px_rgba(23,23,23,0.08)]"
                }`}
              >
                {/* Popular Pill if Business tier */}
                {isPopular && (
                  <div className="absolute -top-4 right-8 bg-[#C7F36B] text-[#171717] px-3.5 py-1 text-[11px] font-mono font-black uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Most Requested</span>
                  </div>
                )}

                <div>
                  <div className="border-b pb-6 mb-6 border-current/15">
                    <span className="text-xs font-mono uppercase tracking-widest opacity-60 font-bold block mb-2">
                      0{idx + 1} — Tier
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-xs font-mono opacity-75 font-semibold">
                      {tier.target}
                    </p>
                  </div>

                  <p className="text-sm opacity-85 leading-relaxed font-normal mb-8">
                    {tier.description}
                  </p>

                  {/* Scope Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest opacity-60 font-bold block">
                      Scope Includes:
                    </span>
                    <ul className="space-y-3">
                      {tier.scope.map((item, sIdx) => (
                        <li
                          key={sIdx}
                          className="text-xs sm:text-sm opacity-90 flex items-start gap-2.5 leading-snug"
                        >
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C7F36B] font-bold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Timeline & CTA */}
                <div className="pt-6 border-t border-current/15 mt-auto">
                  <div className="flex items-center justify-between text-xs font-mono opacity-75 mb-4 font-semibold">
                    <span>Estimated Timeline:</span>
                    <span className="font-bold underline">{tier.timeline}</span>
                  </div>

                  <a
                    href={`#contact?package=${encodeURIComponent(tier.name)}`}
                    className={`btn-shimmer w-full inline-flex items-center justify-center gap-2 py-4 text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md ${
                      isPopular
                        ? "bg-[#C7F36B] text-[#171717] hover:bg-white hover:shadow-[0_0_25px_rgba(199,243,107,0.5)]"
                        : "bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] hover:shadow-[0_0_20px_rgba(199,243,107,0.3)]"
                    }`}
                  >
                    <span>Request a Project Estimate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
