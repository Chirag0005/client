import React from "react";
import { PROCESS_STAGES } from "@/data/portfolioData";
import { Milestone, Check, ArrowRight } from "lucide-react";

export default function ProjectProcess() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#171717]/10 relative pattern-dots">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>HOW WE COLLABORATE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            A clear process from first conversation to launch.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
            No convoluted steps or hidden surprises. Every milestone is transparent,
            deliberate, and structured around your objectives.
          </p>
        </div>

        {/* 4 REFINED TIMELINE CARDS WITH GLOW HOVER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.number}
              className="bg-white p-8 border-2 border-[#171717]/10 flex flex-col justify-between relative group hover:border-[#171717] hover:shadow-[0_16px_45px_rgba(23,23,23,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#171717] group-hover:bg-[#C7F36B] transition-colors duration-300" />

              <div>
                {/* Stage Number & Header */}
                <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-6">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#171717]/30 group-hover:text-[#171717] transition-colors">
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-[#171717] text-[#C7F36B] font-bold">
                    Stage 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#171717] tracking-tight group-hover:translate-x-1 transition-transform">
                  {stage.title}
                </h3>

                <p className="mt-1 text-xs font-mono text-[#171717] font-semibold">
                  {stage.subtitle}
                </p>

                <p className="mt-4 text-sm text-[#171717]/75 font-normal leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Stage Deliverables */}
              <div className="mt-8 pt-6 border-t border-[#171717]/10 bg-[#FAF9F5] -mx-8 -mb-8 p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/60 font-bold block mb-2.5">
                  Milestone Deliverables
                </span>
                <ul className="space-y-2">
                  {stage.deliverables.map((del, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs text-[#171717]/85 flex items-start gap-2 leading-tight"
                    >
                      <Check className="w-3.5 h-3.5 text-[#171717] group-hover:text-[#C7F36B] mt-0.5 flex-shrink-0 transition-colors" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
