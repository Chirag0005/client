"use client";

import React, { useRef, useState, useEffect } from "react";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
}

export default function Interactive3DCard({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.15,
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: "transform 100ms ease-out",
    });

    setGlareStyle({
      opacity: glareOpacity,
      background: `radial-gradient(circle 280px at ${x}px ${y}px, rgba(255,255,255,0.4), transparent 80%)`,
      transition: "opacity 150ms ease-out",
    });
  };

  const handleMouseLeave = () => {
    if (isReducedMotion) return;
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 400ms cubic-bezier(0.25, 1, 0.5, 1)",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 300ms ease-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {/* Dynamic Specular Sheen Glare */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity rounded-[inherit] overflow-hidden"
        style={glareStyle}
        aria-hidden="true"
      />
    </div>
  );
}
