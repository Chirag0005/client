"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import Contact3DCanvas from "@/components/Contact3DCanvas";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    currentWebsite: "",
    projectType: "Business website",
    approximateBudget: "Flexible / To Discuss",
    projectDescription: "",
    _honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const projectTypes = [
    "Business website",
    "E-commerce website",
    "Landing page",
    "Website redesign",
    "Website maintenance",
    "Other",
  ];

  const budgetOptions = [
    "Flexible / To Discuss",
    "Starter (Essential Presence)",
    "Standard (Full Multi-Page)",
    "Advanced (E-Commerce / Custom App)",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Please provide your name";
    }

    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g., name@example.com)";
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = "Please tell me a little about your project";
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = "Please provide a bit more detail (at least 15 characters)";
    }

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (formData._honeypot) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSuccess(true);
      setIsSubmitting(false);
    } catch {
      setSubmitError("An unexpected error occurred while sending your inquiry. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      businessName: "",
      currentWebsite: "",
      projectType: "Business website",
      approximateBudget: "Flexible / To Discuss",
      projectDescription: "",
      _honeypot: "",
    });
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#171717] text-[#F7F7F2] relative overflow-hidden">
      {/* 3D INTERACTIVE TERRAIN CANVAS BEHIND CONTACT */}
      <Contact3DCanvas />

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7F36B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* LEFT EDITORIAL COPY */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#C7F36B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F7F2] leading-tight">
              Have a project in mind?
            </h2>

            <div className="mt-3">
              <span className="font-heading text-3xl sm:text-4xl font-light italic text-[#C7F36B]">
                Let&apos;s build it.
              </span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-white/70 font-normal leading-relaxed">
              Tell me about your business, your goals, and the website you need.
              Let&apos;s explore what we can create together.
            </p>

            {/* Direct Contact Pillars */}
            <div className="mt-10 pt-8 border-t border-white/15 space-y-4 text-xs font-mono text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                <span>Direct 1-on-1 communication with Noah</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                <span>Detailed estimate & project roadmap within 24–48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                <span>Available for clients in Norway & Worldwide</span>
              </div>
            </div>

            {/* 3D Wave Notice & Backend info */}
            <div className="mt-10 p-4 bg-white/5 border border-white/10 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2 text-[#C7F36B] mb-1 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive 3D Digital Fjord · Move cursor to ripple mesh</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Connect your submission handler via Formspree, Resend, or a Next.js App Router API route. Environment keys remain server-side.
              </p>
            </div>
          </div>

          {/* RIGHT FORM CONTAINER */}
          <div className="lg:col-span-7 bg-[#202020]/90 backdrop-blur-md border border-white/15 p-8 sm:p-12 shadow-2xl relative">
            {isSuccess ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C7F36B] text-[#171717] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F7F2]">
                  Project Inquiry Received!
                </h3>

                <p className="mt-4 text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#C7F36B] font-semibold">{formData.name}</span>.
                  I have received your project details and will review them carefully.
                  Expect a direct reply at <span className="text-white underline">{formData.email}</span> shortly.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#F7F7F2] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitError && (
                  <div className="p-4 bg-red-950/60 border border-red-500/50 text-red-200 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2">
                      Your Name <span className="text-[#C7F36B]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Astrid Lindgren"
                      className={`w-full px-4 py-3 bg-[#171717] text-white border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#C7F36B] ${
                        errors.name ? "border-red-400" : "border-white/20 focus:border-[#C7F36B]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2">
                      Email Address <span className="text-[#C7F36B]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. astrid@studio.no"
                      className={`w-full px-4 py-3 bg-[#171717] text-white border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#C7F36B] ${
                        errors.email ? "border-red-400" : "border-white/20 focus:border-[#C7F36B]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Business Name & Website Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Business Name <span className="text-white/40">(Optional)</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Nordic Atelier"
                      className="w-full px-4 py-3 bg-[#171717] text-white border border-white/20 text-sm focus:outline-none focus:border-[#C7F36B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="currentWebsite" className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Current Website <span className="text-white/40">(Optional)</span>
                    </label>
                    <input
                      id="currentWebsite"
                      type="url"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-4 py-3 bg-[#171717] text-white border border-white/20 text-sm focus:outline-none focus:border-[#C7F36B]"
                    />
                  </div>
                </div>

                {/* Project Type Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2.5">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-2 text-xs font-mono text-left transition-colors border ${
                          formData.projectType === type
                            ? "bg-[#C7F36B] text-[#171717] border-[#C7F36B] font-bold"
                            : "bg-[#171717] text-white/70 border-white/15 hover:border-white/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Approximate Budget <span className="text-white/40">(Optional)</span>
                  </label>
                  <select
                    value={formData.approximateBudget}
                    onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#171717] text-white border border-white/20 text-sm focus:outline-none focus:border-[#C7F36B] font-mono"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2">
                    Project Description <span className="text-[#C7F36B]">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={4}
                    required
                    value={formData.projectDescription}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDescription: e.target.value });
                      if (errors.projectDescription) setErrors({ ...errors, projectDescription: "" });
                    }}
                    placeholder="Tell me about your goals, key pages needed, target timeline, or aesthetic preferences..."
                    className={`w-full px-4 py-3 bg-[#171717] text-white border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#C7F36B] ${
                      errors.projectDescription ? "border-red-400" : "border-white/20 focus:border-[#C7F36B]"
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.projectDescription}</p>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/50">
                    * Response within 24–48 hours
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7F36B] text-[#171717] hover:bg-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
