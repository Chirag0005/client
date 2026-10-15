"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Concepts", href: "#concepts" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F7F2]/95 backdrop-blur-md border-b border-[#171717]/15 py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] px-1"
            aria-label="Noah - Independent Web Developer & Designer Home"
          >
            <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-[#171717] group-hover:text-black transition-colors">
              NOAH<sup className="text-xs font-bold ml-0.5 text-[#171717]">®</sup>
            </span>
          </Link>

          {/* Live Studio Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-white border border-[#171717]/15 text-[11px] font-mono text-[#171717]">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] ring-2 ring-[#C7F36B]/40 animate-pulse" />
            <span className="font-medium">Available for New Projects</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-mono tracking-wider font-semibold text-[#171717]/75 hover:text-[#171717] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7F36B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] hover:shadow-[0_0_20px_rgba(199,243,107,0.5)] transition-all duration-200 border border-[#171717]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171717] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#F7F7F2] z-40 md:hidden flex flex-col justify-between p-8 border-t border-[#171717]/10 animate-in fade-in slide-in-from-top-2 duration-200 pattern-grid">
          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl font-bold text-[#171717] hover:text-[#171717]/70 flex items-center justify-between border-b border-[#171717]/10 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#171717]/50 px-2 py-0.5 bg-[#C7F36B]">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#171717]/10 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] text-xs font-mono uppercase tracking-wider font-bold transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-[#171717]/60 text-center font-mono">
              Norway · Working Worldwide
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
