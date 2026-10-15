import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import ValueProposition from "@/components/ValueProposition";
import FeaturedProjects from "@/components/FeaturedProjects";
import FictionalConcepts from "@/components/FictionalConcepts";
import InteractiveGallery from "@/components/InteractiveGallery";
import Services from "@/components/Services";
import ProjectProcess from "@/components/ProjectProcess";
import About from "@/components/About";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import BudgetSection from "@/components/BudgetSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import InteractiveCursor from "@/components/InteractiveCursor";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F7F2] text-[#171717] selection:bg-[#C7F36B] selection:text-[#171717]">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#171717] text-[#C7F36B] font-mono text-xs uppercase"
      >
        Skip to main content
      </a>

      <InteractiveCursor />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <MarqueeBanner />
        <ValueProposition />
        <FeaturedProjects />
        <FictionalConcepts />
        <InteractiveGallery />
        <Services />
        <ProjectProcess />
        <About />
        <WhyWorkWithMe />
        <BudgetSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
