import React from "react";
import { Compass, Users, Target, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ValueProposition() {
  const values = [
    {
      num: "01",
      title: "BUILT AROUND YOUR BUSINESS",
      subtitle: "Strategic Alignment",
      accentColor: "#C7F36B",
      accentBg: "bg-[#C7F36B]",
      tagColor: "text-[#171717] bg-[#C7F36B]",
      description:
        "Before writing a single line of code or designing layouts, I take the time to understand your business, your audience, your market, and what concrete goals this website must achieve.",
      points: [
        "In-depth discovery on your target audience & positioning",
        "Aesthetic direction tailored to your brand personality",
        "Clear technical scope without unnecessary complexity",
      ],
      icon: Compass,
    },
    {
      num: "02",
      title: "DESIGNED FOR REAL PEOPLE",
      subtitle: "Human-Centric Usability",
      accentColor: "#E08E45",
      accentBg: "bg-[#E08E45]",
      tagColor: "text-white bg-[#D97706]",
      description:
        "A beautiful website is useless if customers can't find what they need. I create intuitive navigation structures, responsive layouts, accessible typography, and fast-loading pages.",
      points: [
        "Rock-solid mobile responsiveness across every screen size",
        "Accessible contrast, readable typography & keyboard navigation",
        "Subtle micro-interactions that feel natural, not overwhelming",
      ],
      icon: Users,
    },
    {
      num: "03",
      title: "FOCUSED ON YOUR OBJECTIVES",
      subtitle: "Conversion & Action",
      accentColor: "#38BDF8",
      accentBg: "bg-[#38BDF8]",
      tagColor: "text-[#171717] bg-[#38BDF8]",
      description:
        "Every page and section exists to guide visitors toward taking meaningful action — whether that means booking a consultation, submitting an inquiry, or completing a purchase.",
      points: [
        "Unambiguous calls-to-action placed right where decisions happen",
        "Friction-free contact and inquiry forms that actually convert",
        "Search engine optimization (SEO) built directly into the foundation",
      ],
      icon: Target,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F2] border-t border-[#171717]/10 relative pattern-dots">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#F7F7F2] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
            <span>CORE PHILOSOPHY & DIGITAL CRAFT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            Your website is often the first impression your business makes.{" "}
            <span className="inline-block bg-[#171717] text-[#C7F36B] px-3 py-0.5 mt-2 shadow-sm">
              Make it count.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
            A well-designed website should communicate your value clearly, make a
            strong impression, and help potential customers take the next step.
          </p>
        </div>

        {/* Editorial Value Layout with Colorful Accents & Hover Glow */}
        <div className="space-y-8 sm:space-y-12">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.num}
                className="bg-white p-8 sm:p-10 lg:p-12 border-2 border-[#171717]/10 rounded-none transition-all duration-300 hover:border-[#171717] hover:shadow-[0_12px_40px_rgba(23,23,23,0.08)] group relative overflow-hidden"
              >
                {/* Left accent color strip */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2.5 ${val.accentBg}`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start pl-2">
                  {/* Column 1: Number & Badge */}
                  <div className="lg:col-span-3 flex items-baseline justify-between lg:block">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#171717]/30 group-hover:text-[#171717] transition-colors">
                        {val.num}
                      </span>
                      <span className="w-8 h-[2px] bg-[#171717]/20 hidden sm:inline-block" />
                    </div>
                    <div className="lg:mt-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider ${val.tagColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{val.subtitle}</span>
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Title & Core Description */}
                  <div className="lg:col-span-5">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight group-hover:translate-x-1.5 transition-transform duration-200">
                      {val.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-[#171717]/75 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  {/* Column 3: Tactical Details Box */}
                  <div className="lg:col-span-4 bg-[#FAF9F5] p-6 border border-[#171717]/15">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#171717]/60 font-semibold block mb-3">
                      Tangible Deliverables
                    </span>
                    <ul className="space-y-3">
                      {val.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-[#171717]/85 flex items-start gap-2.5 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#171717] mt-0.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
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
