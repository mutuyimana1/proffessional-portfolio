import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesTabs from "@/components/ServicesTabs";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import ContactSection from "@/components/ContactSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import FooterSection from "@/components/FooterSection";
import { useState, useEffect } from "react";

export default function Index() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col  py-8 md:py-12 mx-auto w-full relative"
      style={{
        background:
          "linear-gradient(90deg, #3B1B1E 18.39%, #3A2618 28.91%, #302D25 51.92%, #1F393F 86.91%)",
      }}
    >
      <Navbar />
      <section id="home" className="px-4 md:px-8 lg:px-20 xl:px-44">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesTabs />
      </section>
      <section id="experience">
        <WorkExperienceSection />
      </section>
      <section id="portfolio">
        <RecentWorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="blog">
        <LatestNewsSection />
      </section>
      <FooterSection />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-brand-green text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18,15 12,9 6,15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}
