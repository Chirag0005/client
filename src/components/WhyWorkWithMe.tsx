import React from "react";
import { MessageSquare, Target, Smartphone, FileCheck, ShieldCheck } from "lucide-react";

export default function WhyWorkWithMe() {
  const benefits = [
    {
      num: "01",
      title: "DIRECT COMMUNICATION",
      badgeColor: "bg-[#C7F36B] text-[#171717]",
      description:
        "Work directly with the person building your website. No account managers, outsourced handoffs, or communication lost in translation.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "BUSINESS-FOCUSED THINKING",
      badgeColor: "bg-[#E08E45] text-white",
      description:
        "Consider the business's objectives and customer needs at every step. Design choices are guided by real-world usability and commercial clarity.",
      icon: Target,
    },
    {
      num: "03",
      title: "RESPONSIVE BY DESIGN",
      badgeColor: "bg-[#38BDF8] text-[#171717]",
      description:
        "Build a consistent experience across phones, tablets, and desktops. Interfaces are tested across real breakpoints to eliminate awkward clipping.",
      icon: Smartphone,
    },
    {
      num: "04",
      title: "CLEAR PROJECT EXPECTATIONS",
      badgeColor: "bg-[#171717] text-[#C7F36B]",
      description:
        "Discuss scope, deliverables, budget, and timeline before development begins. Realistic scheduling and transparent deliverables keep us aligned.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#171717]/10 relative pattern-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE COLLABORATIVE ADVANTAGE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            A thoughtful approach. A website built around you.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
            Partnering with an independent developer gives you personal dedication,
            direct accountability, and craft-driven execution.
          </p>
        </div>

        {/* 4 Benefits Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="bg-white p-8 border-2 border-[#171717]/10 flex flex-col justify-between group hover:border-[#171717] hover:shadow-[0_16px_45px_rgba(23,23,23,0.08)] transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-6">
                    <span className="font-mono text-3xl font-black text-[#171717]/30 group-hover:text-[#171717] transition-colors">
                      {b.num}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${b.badgeColor} shadow-xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#171717] tracking-tight group-hover:translate-x-1 transition-transform">
                    {b.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#171717]/75 font-normal leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#171717]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#171717]/60 font-bold">
                    Specialist Quality
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
