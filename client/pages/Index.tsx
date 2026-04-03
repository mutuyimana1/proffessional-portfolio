import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesTabs from "@/components/ServicesTabs";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import LatestNewsSection from "@/components/LatestNewsSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div
      className="min-h-screen flex flex-col px-64 py-12"
      style={{
        background:
          "linear-gradient(90deg, #3B1B1E 18.39%, #3A2618 28.91%, #302D25 51.92%, #1F393F 86.91%)",
      }}
    >
      <Navbar />
      <section id="home">
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
      <CTASection />
      <section id="blog">
        <LatestNewsSection />
      </section>
      <FooterSection />
    </div>
  );
}
