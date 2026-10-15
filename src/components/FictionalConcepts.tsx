"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FICTIONAL_CONCEPTS } from "@/data/portfolioData";
import { FictionalConcept, ProductItem } from "@/types/portfolio";
import {
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Coffee,
  Building2,
  Check,
  X,
  Plus,
  Minus,
  Clock,
  MapPin,
  Calendar,
  Layers,
  Star,
} from "lucide-react";

export default function FictionalConcepts() {
  const [selectedConcept, setSelectedConcept] = useState<FictionalConcept | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");
  
  // Interactive Cart for Form Studio Demo
  const [cartItems, setCartItems] = useState<{ product: ProductItem; count: number }[]>([
    {
      product: {
        id: "fs-1",
        name: "Architectural Belted Wool Overcoat",
        category: "Outerwear",
        price: 640,
        tag: "Essential",
      },
      count: 1,
    },
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const formStudioProducts = FICTIONAL_CONCEPTS.find((c) => c.id === "form-studio")?.products || [];

  const filteredProducts =
    activeCategoryFilter === "All"
      ? formStudioProducts
      : formStudioProducts.filter((p) => p.category === activeCategoryFilter);

  const addToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { product, count: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newCount = item.count + delta;
            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: ProductItem; count: number }[]
    );
  };

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );

  return (
    <section id="concepts" className="py-24 sm:py-32 bg-[#F7F7F2] border-t border-[#171717]/10 relative pattern-dots">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#C7F36B]" />
            <span>BESPOKE SECTOR CONCEPTS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            Different businesses. Different digital experiences.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
            I believe every company requires its own distinctive visual identity and functional architecture.
            The three concepts below demonstrate how typography, pacing, and interaction are tailored to specific industries.
          </p>

          <div className="mt-4 inline-block bg-white px-3 py-1.5 border border-[#171717]/15 text-xs font-mono text-[#171717]/80">
            ✓ Clearly labeled fictional concept studies demonstrating full design & engineering range.
          </div>
        </div>

        {/* THREE DISTINCT FICTIONAL CONCEPTS */}
        <div className="space-y-24 sm:space-y-32">
          {/* ============================================================== */}
          {/* CONCEPT 01 — NORDIC BREW (Hospitality & Cafe) */}
          {/* ============================================================== */}
          <div className="bg-[#FAF6F0] border-2 border-[#4A3326]/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(74,51,38,0.15)] hover:border-[#4A3326]">
            {/* Ambient warm gradient badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2B1E16]/15 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-[#4A3326]">01</span>
                <span className="w-8 h-[2px] bg-[#4A3326]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#4A3326] font-bold">
                  CONCEPT 01 — RESTAURANT & HOSPITALITY
                </span>
              </div>
              <span className="px-3.5 py-1 bg-[#4A3326] text-[#FAF6F0] text-xs font-mono font-semibold flex items-center gap-1.5 shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#E8DFD1]" />
                <span>Nordic Brew · Oslo</span>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#4A3326] font-bold block mb-2">
                  Artisanal Coffee & Slow Living
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#2B1E16] tracking-tight">
                  Nordic Brew
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#2B1E16]/80 leading-relaxed font-normal">
                  A Scandinavian coffee shop website featuring morning sunlight photography,
                  curated origins, live hours, and table reservations. Crafted in warm cream,
                  coffee brown, and natural oak tones.
                </p>

                {/* Color Palette Swatches */}
                <div className="mt-6 pt-6 border-t border-[#2B1E16]/15">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2B1E16]/70 font-semibold block mb-3">
                    Bespoke Visual Palette
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#FAF6F0] border-2 border-[#4A3326]/40 shadow-xs" />
                      <span className="text-xs font-mono text-[#2B1E16] font-medium">Warm Cream</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#4A3326] shadow-xs" />
                      <span className="text-xs font-mono text-[#2B1E16] font-medium">Coffee Brown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#D6B896] shadow-xs" />
                      <span className="text-xs font-mono text-[#2B1E16] font-medium">Light Oak</span>
                    </div>
                  </div>
                </div>

                {/* Menu Highlights Preview */}
                <div className="mt-6 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#2B1E16]/70 font-semibold block">
                    Curated Menu Preview (Interactive)
                  </span>
                  <div className="space-y-2.5 bg-[#F2ECE1] p-4 border border-[#2B1E16]/15 text-xs font-mono">
                    <div className="flex justify-between border-b border-[#2B1E16]/10 pb-1.5 hover:text-black">
                      <span className="font-bold text-[#2B1E16]">Single Origin Geisha V60</span>
                      <span className="text-[#4A3326] font-bold">kr 85</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2B1E16]/10 pb-1.5 hover:text-black">
                      <span className="font-bold text-[#2B1E16]">Norrsken Oat Flat White</span>
                      <span className="text-[#4A3326] font-bold">kr 62</span>
                    </div>
                    <div className="flex justify-between hover:text-black">
                      <span className="font-bold text-[#2B1E16]">Cardamom Bun (Kardemommebolle)</span>
                      <span className="text-[#4A3326] font-bold">kr 54</span>
                    </div>
                  </div>
                </div>

                {/* Location & Hours */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#2B1E16]/80">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4A3326]" />
                    <span>Torggata 18, 0181 Oslo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#4A3326]" />
                    <span className="font-semibold text-emerald-800">Open Today: 07:30 – 17:00</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      const concept = FICTIONAL_CONCEPTS.find((c) => c.id === "nordic-brew");
                      if (concept) setSelectedConcept(concept);
                    }}
                    className="btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 bg-[#4A3326] hover:bg-[#2B1E16] text-[#FAF6F0] text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md"
                  >
                    <span>Explore Full Interactive Cafe Concept</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Visual Showcase Right */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden border-2 border-[#2B1E16]/25 shadow-xl group">
                  <Image
                    src="/images/nordic-brew.jpg"
                    alt="Nordic Brew Specialty Coffee Shop"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E16]/90 via-transparent to-transparent flex items-end p-6 text-[#FAF6F0]">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-xs font-mono text-[#D6B896] uppercase tracking-wider font-bold">
                          Scandinavian Slow Living
                        </span>
                        <h4 className="font-heading text-2xl font-bold mt-1">
                          Craft Coffee & Morning Sanctuary
                        </h4>
                      </div>
                      <span className="hidden sm:inline-block px-3.5 py-1.5 bg-[#FAF6F0] text-[#2B1E16] text-xs font-mono font-bold uppercase shadow-sm">
                        Book Table ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* CONCEPT 02 — FORM STUDIO (Fashion & E-Commerce with Interactive Cart) */}
          {/* ============================================================== */}
          <div className="bg-[#FAF9F7] border-2 border-[#171717] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-md transition-all duration-300 hover:shadow-[0_20px_50px_rgba(23,23,23,0.15)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#171717]/15 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-[#171717]">02</span>
                <span className="w-8 h-[2px] bg-[#171717]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
                  CONCEPT 02 — FASHION & E-COMMERCE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCartDrawerOpen(true)}
                  className="px-4 py-2 bg-[#171717] text-[#FAF9F7] hover:bg-black text-xs font-mono flex items-center gap-2.5 transition-all shadow-md group"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C7F36B] transition-transform group-hover:scale-110" />
                  <span className="font-bold">
                    Demo Bag ({cartItems.reduce((acc, i) => acc + i.count, 0)})
                  </span>
                  <span className="px-1.5 py-0.2 bg-[#C7F36B] text-[#171717] text-[10px] font-black">
                    €{cartSubtotal.toFixed(0)}
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold block mb-2">
                  Architectural Silhouette & Mindful Wardrobe
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight">
                  Form Studio
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
                  A premium fashion e-commerce storefront featuring editorial campaign imagery,
                  interactive product filtering, and an active demo shopping cart drawer.
                  Styled with neutral tones, raw ecru, and modern typography.
                </p>

                {/* Interactive Product Filtering Controls */}
                <div className="mt-8 pt-6 border-t border-[#171717]/15">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/70 font-semibold">
                      Filter Collection (Live Interaction)
                    </span>
                    <span className="text-xs font-mono text-[#171717] font-bold">
                      {filteredProducts.length} items
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Outerwear", "Knitwear", "Tailoring", "Objects"].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategoryFilter(cat)}
                        className={`px-3.5 py-2 text-xs font-mono transition-all border ${
                          activeCategoryFilter === cat
                            ? "bg-[#171717] text-[#C7F36B] border-[#171717] font-bold shadow-xs"
                            : "bg-white text-[#171717]/80 border-[#171717]/20 hover:border-[#171717] hover:text-[#171717]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Demo Cart Trigger */}
                <div className="mt-8 pt-6 border-t border-[#171717]/15 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCartDrawerOpen(true)}
                    className="btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-[#FAF9F7] hover:bg-[#C7F36B] hover:text-[#171717] text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>View Interactive Demo Cart (€{cartSubtotal.toFixed(2)})</span>
                  </button>
                </div>
              </div>

              {/* Product Grid & Editorial Image Right */}
              <div className="lg:col-span-7">
                {/* Lookbook Banner */}
                <div className="relative aspect-[16/8] w-full overflow-hidden border-2 border-[#171717]/20 mb-6 group">
                  <Image
                    src="/images/form-studio.jpg"
                    alt="Form Studio Campaign Photography"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 text-white">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#C7F36B] font-bold">
                        New Season Editorial · Look 03
                      </span>
                      <h4 className="font-heading text-xl sm:text-2xl font-bold">
                        The Architectural Belted Overcoat
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Interactive Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-white p-5 border-2 border-[#171717]/15 flex flex-col justify-between hover:border-[#171717] transition-all hover:shadow-md group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#171717]/60 mb-2">
                          <span className="font-semibold">{prod.category}</span>
                          <span className="text-[#171717] bg-[#C7F36B] px-2 py-0.5 font-bold">
                            {prod.tag}
                          </span>
                        </div>
                        <h5 className="font-heading text-sm font-bold text-[#171717] leading-snug group-hover:text-black">
                          {prod.name}
                        </h5>
                      </div>
                      <div className="mt-5 pt-3 border-t border-[#171717]/10 flex items-center justify-between">
                        <span className="font-mono text-sm font-black text-[#171717]">
                          €{prod.price}.00
                        </span>
                        <button
                          type="button"
                          onClick={() => addToCart(prod)}
                          className="px-3 py-1.5 bg-[#171717] hover:bg-[#C7F36B] hover:text-[#171717] text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* CONCEPT 03 — NORTHLINE (Professional Services) */}
          {/* ============================================================== */}
          <div className="bg-[#171717] text-[#F7F7F2] border-2 border-white/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl pattern-blueprint-dark transition-all duration-300 hover:border-[#C7F36B]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-[#C7F36B]">03</span>
                <span className="w-8 h-[2px] bg-[#C7F36B]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#F7F7F2] font-bold">
                  CONCEPT 03 — PROFESSIONAL SERVICES & ADVISORY
                </span>
              </div>
              <span className="px-3.5 py-1 bg-white/10 text-[#C7F36B] text-xs font-mono font-bold border border-white/15">
                Northline Advisory · Oslo
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C7F36B] font-bold block mb-2">
                  Architecture & Strategic Masterplanning
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#F7F7F2] tracking-tight">
                  Northline
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#F7F7F2]/80 leading-relaxed font-normal">
                  A modern, authoritative website for a Scandinavian architecture and engineering consultancy.
                  Features structural headlines, services overview, methodology breakdown, and clear consultation inquiries.
                </p>

                {/* Architectural Services Matrix */}
                <div className="mt-6 pt-6 border-t border-white/15 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7F36B] font-semibold block">
                    Strategic Services Overview
                  </span>
                  <div className="space-y-2">
                    {[
                      "Architectural Masterplanning & Fjordfront Development",
                      "Mass Timber Engineering & Structural Life Cycle",
                      "Heritage Adaptive Reuse & Nordic Retrofit",
                      "BREEAM Outstanding Sustainable Certification",
                    ].map((srv, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 bg-white/5 border border-white/10 hover:border-[#C7F36B]/60 text-xs text-white font-mono flex items-center gap-2.5 transition-colors"
                      >
                        <Building2 className="w-4 h-4 text-[#C7F36B] flex-shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="btn-shimmer inline-flex items-center gap-2 px-6 py-4 bg-[#C7F36B] text-[#171717] hover:bg-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md"
                  >
                    <span>Request Architectural Consultation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Architectural Studio Showcase Right */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-white/20 shadow-2xl group">
                  <Image
                    src="/images/northline.jpg"
                    alt="Northline Oslo Architectural Design Studio"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 text-white">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-wider font-bold">
                          Oslo Fjordfront Headquarters
                        </span>
                        <h4 className="font-heading text-xl sm:text-2xl font-bold mt-1">
                          Timber & Urban Ecology Studio
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* INTERACTIVE DEMO CART SLIDE-OVER (FORM STUDIO) */}
      {/* ============================================================== */}
      {cartDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Form Studio Interactive Demo Cart"
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setCartDrawerOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#FAF9F7] text-[#171717] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 border-l border-[#171717]/20 animate-in slide-in-from-right duration-200"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#171717]/15 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#171717]" />
                  <h3 className="font-heading text-lg font-bold">Form Studio Bag</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1 hover:bg-[#171717]/10 transition-colors"
                  aria-label="Close cart drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-[#171717]/60 text-sm font-mono">
                  Your demo bag is empty. Click &quot;Add to Bag&quot; on any product.
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 bg-white border border-[#171717]/15 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h5 className="font-heading text-sm font-bold text-[#171717]">
                          {item.product.name}
                        </h5>
                        <p className="text-xs font-mono text-[#171717]/60 mt-0.5">
                          €{item.product.price}.00 each
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="w-6 h-6 border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717]/10"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs w-4 text-center font-bold">{item.count}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="w-6 h-6 border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717]/10"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Bottom Summary */}
            <div className="border-t border-[#171717]/15 pt-6 mt-6">
              <div className="flex items-center justify-between mb-4 font-mono text-sm">
                <span className="text-[#171717]/70 font-semibold">Subtotal (Demo)</span>
                <span className="font-black text-[#171717] text-lg">
                  €{cartSubtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#171717]/60 mb-4 leading-relaxed">
                * Note: This is an interactive demo checkout flow created for portfolio evaluation. No real payment is collected.
              </p>
              <button
                type="button"
                onClick={() => {
                  alert(
                    "Demo Order Verified! This functional cart drawer illustrates real-time state orchestration and Scandinavian e-commerce UX."
                  );
                  setCartDrawerOpen(false);
                }}
                className="btn-shimmer w-full py-4 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md"
              >
                Simulate Demo Checkout ↗
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* INTERACTIVE FULL CONCEPT PREVIEW MODAL */}
      {/* ============================================================== */}
      {selectedConcept && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedConcept(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF6F0] text-[#2B1E16] border-2 border-[#2B1E16]/30 shadow-2xl p-6 sm:p-10 relative"
          >
            <button
              type="button"
              onClick={() => setSelectedConcept(null)}
              className="absolute top-6 right-6 p-2 text-[#2B1E16] hover:bg-black/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#2B1E16]/15 pb-4 mb-6">
              <Coffee className="w-5 h-5 text-[#4A3326]" />
              <h3 className="font-heading text-2xl font-bold">{selectedConcept.name}</h3>
              <span className="text-xs font-mono bg-[#4A3326] text-[#FAF6F0] px-2.5 py-0.5 font-bold">
                {selectedConcept.tagline}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#2B1E16]/80 leading-relaxed mb-6 font-normal">
              {selectedConcept.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F3EDE2] p-5 border border-[#2B1E16]/15">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#4A3326] mb-3">
                  Opening Hours
                </h4>
                <ul className="space-y-1.5 text-xs font-mono text-[#2B1E16]/80">
                  {selectedConcept.hours?.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F3EDE2] p-5 border border-[#2B1E16]/15">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#4A3326] mb-3">
                  Location & Contact
                </h4>
                <p className="text-xs font-mono text-[#2B1E16]/80 mb-2">
                  {selectedConcept.location}
                </p>
                <p className="text-xs font-mono text-[#2B1E16]/70">
                  hello@nordicbrew.oslo · +47 21 00 98 12
                </p>
              </div>
            </div>

            <div className="border-t border-[#2B1E16]/15 pt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedConcept(null)}
                className="px-6 py-3 bg-[#4A3326] text-[#FAF6F0] text-xs font-mono uppercase tracking-wider font-bold"
              >
                Close Interactive View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
