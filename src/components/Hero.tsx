"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Sparkles,
  Zap,
  ShieldCheck,
  Star,
  ExternalLink,
  ShoppingBag,
  Coffee,
  Building2,
} from "lucide-react";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import Interactive3DCard from "@/components/Interactive3DCard";

export default function Hero() {
  const [activePreview, setActivePreview] = useState<"nordic" | "form" | "northline">("nordic");

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F7F7F2] pattern-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Eyebrow & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-[#171717]/15 text-xs font-mono tracking-widest uppercase text-[#171717] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] ring-4 ring-[#C7F36B]/30 animate-pulse" />
            <span className="font-semibold">INDEPENDENT WEB DEVELOPER & DESIGNER</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-md border border-[#171717]/10 text-xs font-mono text-[#171717]/70">
            <MapPin className="w-3.5 h-3.5 text-[#171717]" />
            <span>Norway · Working Worldwide</span>
          </div>
        </div>

        {/* Responsive Grid: On mobile, 3D Earth sits right under headline (Order 2); on desktop, col 8-12 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-0 lg:gap-x-12 items-start">
          {/* Headline & Eyebrow block (Order 1 on mobile, Col 1-7 Row 1 on desktop) */}
          <div className="order-1 lg:order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#171717] leading-[1.08]">
              Your business deserves a{" "}
              <span className="relative inline-block text-black">
                better website.
                <span className="absolute bottom-1 left-0 w-full h-[5px] sm:h-[8px] bg-[#C7F36B] -z-10 transform -rotate-1 rounded-sm" />
              </span>
            </h1>

            <div className="mt-2.5 sm:mt-4 flex flex-wrap items-baseline gap-2 sm:gap-4">
              <span className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-[#171717]/85">
                Let&apos;s build it.
              </span>
            </div>
          </div>

          {/* 3D Earth Globe Showcase (Order 2 on mobile, Col 8-12 Row 1-2 on desktop) */}
          <div className="order-2 lg:order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative w-full h-[270px] sm:h-[340px] lg:h-[620px] my-2 sm:my-4 lg:my-0">
            {/* Subtle atmospheric ambient glow behind Earth */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[440px] lg:h-[440px] rounded-full bg-[#C7F36B]/15 blur-2xl lg:blur-3xl" />
            </div>

            {/* Mobile Touch & Drag Hint Badge */}
            <div className="lg:hidden absolute top-2 left-2 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-md border border-[#171717]/10 text-[10px] font-mono uppercase tracking-wider text-[#171717] rounded-full shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse" />
                <span>Live 3D Globe · Spin</span>
              </span>
            </div>

            <Hero3DCanvas />
          </div>

          {/* Subtitle, Audience Badges, CTAs & Metrics (Order 3 on mobile, Col 1-7 Row 2 on desktop) */}
          <div className="order-3 lg:order-3 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:mt-6">
            <p className="text-base sm:text-lg md:text-xl text-[#171717]/80 font-normal leading-relaxed">
              I design and develop modern websites and online stores that help independent businesses, clinics, and studios
              stand out, build trust, and turn visitors into loyal customers.
            </p>

            {/* Target Audience Badges: Built for doctors, salons, local businesses */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#171717]/80">
              <span className="text-[#171717]/50 font-semibold uppercase text-[10px] mr-1">Crafted for:</span>
              <span className="px-2 py-0.5 bg-white border border-[#171717]/10 rounded-xs shadow-2xs">Clinics & Doctors</span>
              <span className="px-2 py-0.5 bg-white border border-[#171717]/10 rounded-xs shadow-2xs">Salons & Spas</span>
              <span className="px-2 py-0.5 bg-white border border-[#171717]/10 rounded-xs shadow-2xs">Boutique Brands</span>
              <span className="px-2 py-0.5 bg-white border border-[#171717]/10 rounded-xs shadow-2xs">Local Businesses</span>
            </div>

            {/* Action CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] font-semibold text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-200 border border-[#171717] shadow-sm hover:shadow-[0_0_25px_rgba(199,243,107,0.45)] group text-center"
              >
                <span>Let&apos;s Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-white hover:bg-[#171717] hover:text-white text-[#171717] font-semibold text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-200 border border-[#171717]/20 hover:border-[#171717] group text-center"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Studio Metrics Strip */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#171717]/10 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#171717]/75">
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white border border-[#171717]/10 shadow-xs rounded-xs">
                <Zap className="w-3.5 h-3.5 text-[#171717]" />
                <span>100/100 Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white border border-[#171717]/10 shadow-xs rounded-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#171717]" />
                <span>Direct 1-on-1 Specialist</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white border border-[#171717]/10 shadow-xs rounded-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C7F36B] fill-[#C7F36B]" />
                <span>Tailored Scandinavian UI/UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* HIGH-END EDITORIAL SHOWCASE DECK (3 DISTINCT DISCIPLINES) */}
        <div className="mt-20 sm:mt-28 pointer-events-auto">
          {/* Deck Header & Selector Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#171717] pb-4 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
              Featured Concepts · Interactive Viewport
            </span>

            {/* Seamless Interactive Concept Switchers */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActivePreview("nordic")}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold transition-all border ${
                  activePreview === "nordic"
                    ? "bg-[#3D281D] text-[#FAF6F0] border-[#3D281D] shadow-xs"
                    : "bg-white text-[#171717]/70 border-[#171717]/15 hover:border-[#171717]"
                }`}
              >
                01 Nordic Brew (Dining)
              </button>
              <button
                type="button"
                onClick={() => setActivePreview("form")}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold transition-all border ${
                  activePreview === "form"
                    ? "bg-[#171717] text-[#C7F36B] border-[#171717] shadow-xs"
                    : "bg-white text-[#171717]/70 border-[#171717]/15 hover:border-[#171717]"
                }`}
              >
                02 Form Studio (Fashion)
              </button>
              <button
                type="button"
                onClick={() => setActivePreview("northline")}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold transition-all border ${
                  activePreview === "northline"
                    ? "bg-[#171717] text-white border-[#171717] shadow-xs"
                    : "bg-white text-[#171717]/70 border-[#171717]/15 hover:border-[#171717]"
                }`}
              >
                03 Northline (Advisory)
              </button>
            </div>
          </div>

          {/* ACTIVE HIGH-RESOLUTION INTERACTIVE BROWSER DISPLAY */}
          <Interactive3DCard maxTilt={5}>
            <div className="bg-white border-2 border-[#171717] shadow-[0_24px_60px_rgba(0,0,0,0.12)] overflow-hidden">
              {/* Chrome Browser Header Bar */}
              <div className="bg-[#171717] text-white px-4 py-3 flex items-center justify-between text-xs border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <div className="ml-3 px-3 py-1 bg-[#242424] rounded text-white/80 font-mono text-[11px] flex items-center gap-1.5">
                    <span>https://</span>
                    <span className="text-white font-semibold">
                      {activePreview === "nordic"
                        ? "nordicbrew.oslo"
                        : activePreview === "form"
                        ? "formstudio.design/store"
                        : "northline.no/advisory"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="hidden sm:inline-block text-white/60">
                    {activePreview === "nordic"
                      ? "Oslo Specialty Roastery"
                      : activePreview === "form"
                      ? "Autumn / Winter Flagship"
                      : "Sustainable Masterplanning"}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#C7F36B] text-[#171717] font-bold uppercase text-[10px]">
                    Live Mockup
                  </span>
                </div>
              </div>

              {/* DYNAMIC SHOWCASE VIEWPORT */}
              <div className="p-6 sm:p-8 lg:p-10">
                {activePreview === "nordic" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#4A3326] font-bold mb-2">
                        <Coffee className="w-4 h-4" />
                        <span>RESTAURANT & HOSPITALITY</span>
                      </div>
                      <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#2B1E16]">
                        Nordic Brew
                      </h3>
                      <p className="mt-3 text-base text-[#2B1E16]/80 leading-relaxed font-normal">
                        Warm cream, roasted coffee brown, natural oak textures, and editorial typography.
                        Crafted for a specialty Oslo coffee shop with morning light photography and instant table reservations.
                      </p>

                      <div className="mt-6 p-4 bg-[#FAF6F0] border border-[#2B1E16]/15 space-y-2 text-xs font-mono text-[#2B1E16]">
                        <div className="flex justify-between border-b border-[#2B1E16]/10 pb-1.5">
                          <span className="font-semibold">Single Origin Geisha V60</span>
                          <span className="font-bold text-[#4A3326]">kr 85</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Cardamom Sourdough Bun</span>
                          <span className="font-bold text-[#4A3326]">kr 54</span>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between pt-2">
                        <span className="text-xs font-mono text-emerald-800 font-semibold">
                          ● Open Today: 07:30 – 17:00
                        </span>
                        <a
                          href="#concepts"
                          className="px-4 py-2 bg-[#3D281D] hover:bg-[#2B1E16] text-[#FAF6F0] font-mono text-xs uppercase font-bold transition-colors"
                        >
                          Explore Concept ↗
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#2B1E16]/20">
                      <Image
                        src="/images/nordic-brew.jpg"
                        alt="Nordic Brew Specialty Coffee Shop"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 text-white">
                        <div>
                          <span className="text-xs font-mono text-[#C7F36B] uppercase font-bold">
                            Oslo Torggata 18
                          </span>
                          <h4 className="font-heading text-xl sm:text-2xl font-bold mt-1">
                            Single-Origin Sanctuary & Slow Living
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePreview === "form" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#171717] font-bold mb-2">
                        <ShoppingBag className="w-4 h-4 text-[#C7F36B]" />
                        <span>FASHION & E-COMMERCE</span>
                      </div>
                      <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#171717]">
                        Form Studio
                      </h3>
                      <p className="mt-3 text-base text-[#171717]/80 leading-relaxed font-normal">
                        Muted neutral colors, raw ecru, runway lookbooks, and sophisticated typography.
                        Features real-time client-side collection filtering and an interactive demo shopping cart.
                      </p>

                      <div className="mt-6 p-4 bg-[#FAF9F6] border border-[#171717]/15 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#171717]/60 font-bold block">
                            Key Product
                          </span>
                          <span className="font-heading text-sm font-bold text-[#171717]">
                            Architectural Belted Overcoat
                          </span>
                        </div>
                        <span className="px-3 py-1 bg-[#C7F36B] text-[#171717] font-mono text-xs font-bold">
                          €640.00
                        </span>
                      </div>

                      <div className="mt-6 flex items-center justify-between pt-2">
                        <span className="text-xs font-mono text-[#171717] font-semibold">
                          Collection 04 · In Stock
                        </span>
                        <a
                          href="#concepts"
                          className="px-4 py-2 bg-[#171717] hover:bg-black text-[#F7F7F2] font-mono text-xs uppercase font-bold transition-colors"
                        >
                          View Flagship Store ↗
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#171717]/20">
                      <Image
                        src="/images/form-studio.jpg"
                        alt="Form Studio Campaign Photography"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 text-white">
                        <div>
                          <span className="text-xs font-mono text-[#C7F36B] uppercase font-bold">
                            Autumn / Winter Campaign
                          </span>
                          <h4 className="font-heading text-xl sm:text-2xl font-bold mt-1">
                            Architectural Silhouette & Mindful Wardrobe
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePreview === "northline" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#171717] font-bold mb-2">
                        <Building2 className="w-4 h-4 text-[#171717]" />
                        <span>PROFESSIONAL SERVICES & ADVISORY</span>
                      </div>
                      <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#171717]">
                        Northline
                      </h3>
                      <p className="mt-3 text-base text-[#171717]/80 leading-relaxed font-normal">
                        Deep charcoal, Oslo steel, structured grids, and authoritative messaging.
                        Crafted for an engineering consultancy with comprehensive services matrices and consultation booking.
                      </p>

                      <div className="mt-6 p-4 bg-[#FAF9F5] border border-[#171717]/15 space-y-2 text-xs font-mono text-[#171717]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                          <span>Mass Timber Structural Engineering</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                          <span>BREEAM Outstanding Sustainable Masterplanning</span>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between pt-2">
                        <span className="text-xs font-mono text-[#171717] font-semibold">
                          Oslo Fjordfront Headquarters
                        </span>
                        <a
                          href="#concepts"
                          className="px-4 py-2 bg-[#171717] hover:bg-black text-[#C7F36B] font-mono text-xs uppercase font-bold transition-colors"
                        >
                          Book Advisory ↗
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#171717]/20">
                      <Image
                        src="/images/northline.jpg"
                        alt="Northline Architecture Studio"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 text-white">
                        <div>
                          <span className="text-xs font-mono text-[#C7F36B] uppercase font-bold">
                            Sustainable Built Environments
                          </span>
                          <h4 className="font-heading text-xl sm:text-2xl font-bold mt-1">
                            Timber Architecture & Urban Ecology
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Interactive3DCard>
        </div>
      </div>
    </section>
  );
}
