"use client";

import React, { useEffect, useRef } from "react";
import { X, Play, AlertCircle, ExternalLink, Video, UtensilsCrossed, Scissors } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  projectName: string;
  videoType: "local" | "youtube" | "hosted";
  posterSrc: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  projectName,
  videoType,
  posterSrc,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const isRestaurant =
    projectName.toLowerCase().includes("bar-b-q") ||
    projectName.toLowerCase().includes("restaurant") ||
    projectName.toLowerCase().includes("lannie");

  // Close on Escape key and trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Auto play video when modal opens
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Autoplay with audio might be prevented by browser policy
          });
        }
      }, 150);
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Demo video player for ${projectName}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#171717]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#171717] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden rounded-none"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#202020]">
          <div className="flex items-center gap-2.5">
            <span className="p-1 bg-[#171717] text-[#C7F36B] border border-white/10">
              {isRestaurant ? (
                <UtensilsCrossed className="w-3.5 h-3.5" />
              ) : (
                <Scissors className="w-3.5 h-3.5" />
              )}
            </span>
            <h3 className="font-heading text-sm sm:text-base font-bold text-[#F7F7F2]">
              {projectName} — Interactive Demo Playback
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B]"
            aria-label="Close video player modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {videoType === "youtube" ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoSrc}?autoplay=1&rel=0`}
              title={`${projectName} Video Demo`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              controls
              playsInline
              poster={posterSrc}
              className="w-full h-full object-contain"
            >
              <source src={videoSrc} type="video/mp4" />
              <p className="text-white text-center p-8 text-sm">
                Your browser does not support the video tag. You can download the demo video directly:
                <a href={videoSrc} className="text-[#C7F36B] underline ml-2">Download MP4</a>
              </p>
            </video>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3.5 bg-[#171717] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <Video className="w-3.5 h-3.5 text-[#C7F36B]" />
            <span>High-Definition Screen Recording Demo</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Press ESC or click outside to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
