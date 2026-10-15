"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Concepts", href: "#concepts" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#121212] text-[#F7F7F2] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/10">
          {/* Brand & Positioning */}
          <div className="lg:col-span-5">
            <span className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white block">
              NOAH<sup className="text-xs font-semibold ml-0.5 text-[#C7F36B]">®</sup>
            </span>

            <p className="mt-2 text-sm font-mono text-white/70">
              Independent Web Developer & Website Designer
            </p>

            <p className="mt-6 text-sm text-white/60 max-w-sm leading-relaxed font-normal">
              Designing and building thoughtful digital experiences that help businesses
              communicate clearly, establish credibility, and win customers.
            </p>

            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#C7F36B]" />
              <span>Norway · Working Worldwide</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-[#C7F36B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Inquiries */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              Direct Inquiries
            </span>

            <div className="space-y-4">
              <a
                href="mailto:hello@noahdev.no"
                className="inline-flex items-center gap-2 text-base sm:text-lg font-heading font-semibold text-white hover:text-[#C7F36B] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#C7F36B]" />
                <span>hello@noahdev.no</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <p className="text-xs text-white/50 leading-relaxed font-mono">
                Feel free to email me directly or use the project inquiry form. All inquiries receive a personal response.
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C7F36B] text-[#171717] hover:bg-white text-xs font-mono uppercase tracking-wider font-bold transition-colors"
                >
                  <span>Start a Project ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © {currentYear} NOAH®. All rights reserved. Scandinavian Design & Development.
          </div>

          <div className="flex items-center gap-6">
            <span>Clean Code · Fast Performance · Pure Typography</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
