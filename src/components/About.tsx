import React from "react";
import Image from "next/image";
import { UserCheck, Sparkles, MapPin, Coffee, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F7F2] border-t border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* PROFILE IMAGE COLUMN */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#171717] p-2 border border-[#171717]/20 shadow-md">
              <div className="relative aspect-square w-full overflow-hidden bg-[#EFEFE9]">
                <Image
                  src="/images/noah-portrait.jpg"
                  alt="Noah — Independent Web Developer & Designer"
                  fill
                  className="object-cover grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Monogram Badge / Status */}
              <div className="p-4 bg-[#171717] text-[#F7F7F2] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" />
                  <span>Noah · Independent Developer</span>
                </div>
                <span className="text-white/60">Norway · Worldwide</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#EFEFE9] border border-[#171717]/10 flex items-center justify-between text-xs font-mono text-[#171717]/70">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#171717]" />
                <span>Next.js · TypeScript · Clean CSS</span>
              </span>
              <span className="text-[11px] text-[#171717]/50">Direct Collaboration</span>
            </div>
          </div>

          {/* EDITORIAL COPY COLUMN (Verbatim as required) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717]/5 border border-[#171717]/10 text-xs font-mono uppercase tracking-widest text-[#171717] mb-4">
              <UserCheck className="w-3.5 h-3.5 text-[#171717]" />
              <span>ABOUT NOAH</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
              Good work starts with understanding people.
            </h2>

            {/* Verbatim copy from requirements */}
            <div className="mt-8 space-y-6 text-base sm:text-lg text-[#171717]/80 font-normal leading-relaxed">
              <p>
                I&apos;m Noah, an independent web developer and website designer focused
                on creating thoughtful digital experiences for businesses.
              </p>
              <p>
                I enjoy combining design, technology, and problem-solving to build websites
                that communicate a brand&apos;s value and make it easier for customers to take action.
              </p>
              <p>
                My approach is straightforward: understand the business, design around its needs,
                and build an experience that feels polished, intuitive, and purposeful.
              </p>
              <p>
                Whether you&apos;re launching something new or improving an existing website,
                I&apos;d love to hear what you have in mind.
              </p>
            </div>

            {/* Bottom Signature Line */}
            <div className="mt-10 pt-8 border-t border-[#171717]/15 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-[#171717] block">
                  Noah
                </span>
                <span className="text-xs font-mono text-[#171717]/60">
                  Independent Web Developer & Website Designer
                </span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Get in Touch ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
