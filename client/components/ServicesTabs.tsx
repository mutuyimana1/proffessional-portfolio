import { useState } from "react";

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
};

const servicesData: Record<string, ServiceCard[]> = {
  Design: [
    {
      title: "Graphic Design",
      description:
        "Explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system.",
      icon: "🎨",
    },
    {
      title: "Product Design",
      description:
        "A product-focused design process with strong UX mind and modern interface improvement.",
      icon: "🖌️",
    },
    {
      title: "Brand Identity",
      description:
        "Create a consistent brand identity across all visual touchpoints for memorable experiences.",
      icon: "🌟",
    },
  ],

  Development: [
    {
      title: "Frontend Development",
      description:
        "Build responsive user interfaces with React, Vite, and modern component systems.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description:
        "Build robust APIs and services with Node.js, Express, database integration, auth and security.",
      icon: "🧩",
    },
    {
      title: "Full-stack Delivery",
      description:
        "End-to-end web product development from MVP to production deployments.",
      icon: "🚀",
    },
  ],

  Management: [
    {
      title: "Project Management",
      description:
        "Deliver projects on time with agile planning, roadmaps, and communication channels.",
      icon: "📋",
    },
    {
      title: "Team Coaching",
      description:
        "Enable teams to deliver higher quality through better practices and engineering culture.",
      icon: "🤝",
    },
    {
      title: "Stakeholder Support",
      description:
        "Maintain alignment with business goals and provide clear progress visibility.",
      icon: "🎯",
    },
  ],
};

const tabs = ["Design", "Development", "Management"];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<string>("Design");

  return (
    <section className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#0f172a] shadow-2xl border border-white/10">
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Popular Services
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Must explain to you how all this mistaken idea of denouncing pleasure
          born and give you a complete account the system.
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {servicesData[activeTab].map((card) => (
          <article
            key={card.title}
            className="group border border-white/20 rounded-2xl p-6 bg-black/30 hover:bg-black/50 transition-colors"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-white/70">{card.description}</p>
            <div className="mt-4 font-semibold text-yellow-300">
              → READ MORE
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
