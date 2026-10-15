"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { FeaturedProject } from "@/types/portfolio";
import VideoModal from "@/components/VideoModal";
import Interactive3DCard from "@/components/Interactive3DCard";
import {
  Play,
  ExternalLink,
  Code2,
  CheckCircle2,
  Info,
  Server,
  Maximize2,
  Sparkles,
  Zap,
  UtensilsCrossed,
  Scissors,
} from "lucide-react";

export default function FeaturedProjects() {
  const [activeVideoModal, setActiveVideoModal] = useState<FeaturedProject | null>(null);
  const [playingInlineId, setPlayingInlineId] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const handleLiveClick = (project: FeaturedProject) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      setStatusNotice(
        `"${project.name}" is currently maintained on a private staging environment. You can review the complete walkthrough in the demo video.`
      );
    }
  };

  const handleSourceClick = (project: FeaturedProject) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
    } else {
      setStatusNotice(
        `The source code repository for "${project.name}" is stored in a private development repository. Code excerpts and architecture reviews can be arranged upon request.`
      );
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#F7F7F2] border-t border-[#171717]/10 relative pattern-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] text-[#F7F7F2] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse" />
            <span>SELECTED WORK · REAL DEMOS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            Real projects. Thoughtful execution.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 font-normal leading-relaxed">
            A closer look at the digital experiences I&apos;ve been building.
          </p>
        </div>

        {/* Status notification toast */}
        {statusNotice && (
          <div className="mb-10 p-4 bg-[#171717] text-[#F7F7F2] flex items-start justify-between gap-4 border-l-4 border-[#C7F36B] shadow-lg animate-in fade-in">
            <div className="flex items-center gap-3 text-sm">
              <Info className="w-4 h-4 text-[#C7F36B] flex-shrink-0" />
              <span>{statusNotice}</span>
            </div>
            <button
              type="button"
              onClick={() => setStatusNotice(null)}
              className="text-xs uppercase font-mono text-[#C7F36B] hover:text-white underline ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* PROJECTS SHOWCASE — TWO LARGE ASYMMETRIC PRESENTATIONS */}
        <div className="space-y-28 sm:space-y-36">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 1;
            const isRestaurant = project.id === "project-1" || project.name.toLowerCase().includes("bar-b-q");

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center group"
              >
                {/* VIDEO PREVIEW COLUMN (Desktop order alternates) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Interactive3DCard maxTilt={5}>
                    <div className="relative bg-[#171717] border-2 border-[#171717] shadow-[0_20px_50px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(199,243,107,0.18)]">
                      {/* Top Device Bar with specific industry icon */}
                      <div className="px-4 py-2.5 bg-[#202020] border-b border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]/40" />
                          <div className="flex items-center gap-1.5 ml-2 font-mono text-[11px] text-white/90">
                            {isRestaurant ? (
                              <UtensilsCrossed className="w-3 h-3 text-[#C7F36B]" />
                            ) : (
                              <Scissors className="w-3 h-3 text-[#C7F36B]" />
                            )}
                            <span>
                              {isRestaurant ? "restaurant-walkthrough.mp4" : "salon-walkthrough.mp4"}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-[#C7F36B] text-[#171717] font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                            {isRestaurant ? (
                              <UtensilsCrossed className="w-2.5 h-2.5" />
                            ) : (
                              <Scissors className="w-2.5 h-2.5" />
                            )}
                            <span>{isRestaurant ? "Restaurant Demo" : "Salon Demo"}</span>
                          </span>
                        </div>
                      </div>

                      {/* Media Display Container */}
                      <div className="relative aspect-video w-full bg-[#0d0d0d] overflow-hidden">
                        {playingInlineId === project.id ? (
                          <video
                            controls
                            autoPlay
                            playsInline
                            preload="auto"
                            className="w-full h-full object-contain"
                          >
                            <source src={project.videoSrc} type="video/mp4" />
                            Your browser does not support HTML5 video.
                          </video>
                        ) : (
                          <div className="relative w-full h-full group/media">
                            <Image
                              src={project.posterSrc}
                              alt={`${project.name} video preview poster`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/media:scale-105"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                              priority={idx === 0}
                            />
                            {/* Ambient Dark Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                            {/* Top-left industry badge overlay */}
                            <div className="absolute top-3 left-4 z-10 flex items-center gap-2 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#F7F7F2] shadow-md">
                              {isRestaurant ? (
                                <>
                                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#C7F36B]" />
                                  <span>Restaurant Website Demo</span>
                                </>
                              ) : (
                                <>
                                  <Scissors className="w-3.5 h-3.5 text-[#C7F36B]" />
                                  <span>Salon Booking Demo</span>
                                </>
                              )}
                            </div>

                            {/* Center Play Button Overlay with pulsing icon */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2">
                              <button
                                type="button"
                                onClick={() => setActiveVideoModal(project)}
                                aria-label={`Watch full demo for ${project.name}`}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C7F36B] text-[#171717] flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C7F36B]/60 group-hover/media:shadow-[0_0_35px_rgba(199,243,107,0.7)]"
                              >
                                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#171717] ml-1" />
                              </button>
                              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-black/70 px-2 py-0.5 backdrop-blur-sm border border-white/10">
                                Click to Watch Walkthrough
                              </span>
                            </div>

                            {/* Quick Bottom Actions on Poster */}
                            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                              <span className="flex items-center gap-1.5 bg-black/75 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse" />
                                Cloud CDN Stream
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setPlayingInlineId(project.id)}
                                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-2.5 py-1 text-white text-[11px] font-mono transition-colors"
                                >
                                  Play Inline
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setActiveVideoModal(project)}
                                  className="bg-[#171717] hover:bg-black px-2.5 py-1 text-[#C7F36B] text-[11px] font-mono transition-colors flex items-center gap-1 border border-white/20"
                                >
                                  <Maximize2 className="w-3 h-3" />
                                  Modal
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Performance & Hosting Strategy Banner */}
                      <div className="p-3 bg-[#1E1E1E] border-t border-white/10 flex items-start gap-2.5 text-xs text-white/70 font-mono">
                        <Server className="w-3.5 h-3.5 text-[#C7F36B] mt-0.5 flex-shrink-0" />
                        <span>{project.hostingNote}</span>
                      </div>
                    </div>
                  </Interactive3DCard>
                </div>

                {/* PROJECT INFORMATION COLUMN */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#171717] text-[#C7F36B] text-[11px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5">
                      {isRestaurant ? (
                        <UtensilsCrossed className="w-3 h-3 text-[#C7F36B]" />
                      ) : (
                        <Scissors className="w-3 h-3 text-[#C7F36B]" />
                      )}
                      <span>{project.type}</span>
                    </span>
                    <span className="text-xs font-mono text-[#171717]/70 font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#171717] text-[#C7F36B] flex items-center justify-center flex-shrink-0 shadow-sm">
                      {isRestaurant ? (
                        <UtensilsCrossed className="w-5 h-5" />
                      ) : (
                        <Scissors className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Key Implemented Features with hover glow */}
                  <div className="mt-6 pt-6 border-t border-[#171717]/10">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#171717]/60 font-semibold mb-3">
                      Key Implemented Features
                    </h4>
                    <ul className="space-y-2.5">
                      {project.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="text-xs sm:text-sm text-[#171717]/85 flex items-start gap-2.5 leading-snug group/item hover:text-black transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#171717] group-hover/item:text-[#C7F36B] mt-0.5 flex-shrink-0 transition-colors" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used with colorful borders */}
                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#171717]/60 font-semibold mb-2.5">
                      Actual Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white border border-[#171717]/15 hover:border-[#171717] text-xs font-mono text-[#171717] font-medium transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with shimmer and hover effects */}
                  <div className="mt-8 pt-6 border-t border-[#171717]/10 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveVideoModal(project)}
                      className="btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F7F7F2] hover:bg-[#C7F36B] hover:text-[#171717] hover:shadow-[0_0_20px_rgba(199,243,107,0.4)] text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200"
                    >
                      {isRestaurant ? (
                        <UtensilsCrossed className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Scissors className="w-3.5 h-3.5 fill-current" />
                      )}
                      <span>Watch {isRestaurant ? "Restaurant" : "Salon"} Demo</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLiveClick(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-3.5 bg-white hover:bg-[#171717] hover:text-[#F7F7F2] text-[#171717] text-xs font-mono uppercase tracking-wider font-semibold transition-colors border border-[#171717]/20"
                    >
                      <span>View Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSourceClick(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-3.5 bg-white hover:bg-[#171717] hover:text-[#F7F7F2] text-[#171717] text-xs font-mono uppercase tracking-wider font-semibold transition-colors border border-[#171717]/20"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>View Source</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Modal Video Player */}
      {activeVideoModal && (
        <VideoModal
          isOpen={!!activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          videoSrc={activeVideoModal.videoSrc}
          projectName={activeVideoModal.name}
          videoType={activeVideoModal.videoType}
          posterSrc={activeVideoModal.posterSrc}
        />
      )}
    </section>
  );
}
