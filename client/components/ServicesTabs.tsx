import { useState } from "react";
import { motion } from "framer-motion";

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
};

const servicesData: Record<string, ServiceCard[]> = {
  Web: [
    {
      title: "Frontend Development",
      description:
        "Build responsive, accessible frontend experiences using React, Tailwind, and modern web practices.",
      icon: "💻",
    },
    {
      title: "Responsive Interfaces",
      description:
        "Create polished interfaces that work smoothly on mobile, tablet, and desktop devices.",
      icon: "📱",
    },
    {
      title: "Performance Optimization",
      description:
        "Improve load times and runtime performance so users enjoy fast and stable applications.",
      icon: "⚡",
    },
  ],

  Backend: [
    {
      title: "API Development",
      description:
        "Design and build RESTful and GraphQL APIs with Node.js, Express, Django, and PostgreSQL.",
      icon: "🧩",
    },
    {
      title: "Database Design",
      description:
        "Model data for reliability and scale, with secure integration across services.",
      icon: "🗄️",
    },
    {
      title: "Cloud Integration",
      description:
        "Deploy services with cloud-ready patterns, monitoring, and deployment automation.",
      icon: "☁️",
    },
  ],

  Strategy: [
    {
      title: "Product Planning",
      description:
        "Turn product goals into delivery-ready technical plans and feature roadmaps.",
      icon: "📋",
    },
    {
      title: "Technical Consulting",
      description:
        "Advise on architecture, stack decisions, and build processes for better outcomes.",
      icon: "🧠",
    },
    {
      title: "Delivery Support",
      description:
        "Help teams ship features consistently while keeping quality, timelines, and feedback aligned.",
      icon: "🎯",
    },
  ],
};

const tabs = ["Web", "Backend", "Strategy"];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<string>("Web");

  return (
    <motion.section 
      className="mtz-10 p-8 px-4 md:px-8 lg:px-20 xl:px-44 mrounded-2xl bg-gradient-to-r from-[#272620] via-[#1f2937] to-[#222121]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          Core Services
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto font-poppins">
          I support delivery across web products, backend services, and product
          strategy so your team can ship reliable solutions faster.
        </p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-2 text-sm md:text-base font-semibold border transition-all ${
              activeTab === tab
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-transparent text-white border-white/30 hover:bg-white/10"
            }`}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {servicesData[activeTab]?.map((card) => (
          <article
            key={card.title}
            className="group border border-white/20 rounded-2xl p-4 md:p-6 bg-black/30 hover:bg-black/50 transition-colors"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-white/70 font-poppins">{card.description}</p>
            <div className="mt-4 font-semibold text-yellow-300 font-poppins">
              → READ MORE
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
