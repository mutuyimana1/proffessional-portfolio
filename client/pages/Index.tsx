import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

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
      <HeroSection />
    </div>
  );
}
