import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import forceImage from "./assets/force.png"
import ticketImage from "./assets/ticket.png"
import posImage from "./assets/image.png"
import OutAppImage from "./assets/OutApp.png"
import materialImage from "./assets/material.png"
const recentWorkItems = [
  {
    title: "ERP & CRM Management System",
    description:
      "Enterprise ERP and CRM platform developed for managing sales, inventory, finance, customer operations, and reporting workflows with integrated RRA and Mobile Money services.",
    imageUrl:forceImage,
    visitUrl: "#",
    isInternal: false,
    technologies: [
      "Node.js",
      "TypeScript",
      "React.js",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    title: "Device Installment Management App",
    description:
      "Mobile application for managing customer device installment payments, tracking repayment progress, and improving customer engagement through seamless mobile experiences.",
    imageUrl:posImage,
    visitUrl: "#",
    isInternal: false,
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Mobile Money",
      "Authentication",
    ],
  },
  {
    title: "OuttApp Event Management Platform",
    description:
      "Event management platform with real-time features, authentication systems, and responsive user experiences that improved user interaction and engagement.",
    imageUrl:OutAppImage,
    visitUrl: "#",
    isInternal: false,
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Realtime Features",
      "REST APIs",
    ],
  },
  {
    title: "Ticket Management System",
    description:
      "Scalable ticket and support management system designed to streamline issue tracking, customer support workflows, and operational efficiency.",
    imageUrl:ticketImage,
    visitUrl: "#",
    isInternal: false,
    technologies: [
      "React.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Dashboard UI",
    ],
  },
  {
    title: "Software Engineering Training Platform",
    description:
      "Digital learning and mentorship platform used for training students in full-stack and mobile software development with real-world project collaboration.",
    imageUrl:materialImage,
    visitUrl: "#",
    isInternal: false,
    technologies: [
      "React.js",
      "Node.js",
      "Figma",
      "Project Management",
      "API Documentation",
    ],
  },
];

export default function RecentWorkSection() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  function onPrev() {
    setIndex((prev) => (prev === 0 ? recentWorkItems.length - 1 : prev - 1));
  }

  function onNext() {
    setIndex((prev) =>
      prev === recentWorkItems.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <motion.section
      className="mt-10 p-8 px-4 md:px-8 lg:px-20 xl:px-44 rounded-2xl bg-gradient-to-r from-[#212020] via-[#2C291E] to-[#36321C]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          Recent Projects
        </h2>

        <p className="mt-3 text-white/70 max-w-2xl mx-auto font-poppins">
          Selected enterprise, mobile, and customer-focused systems I developed
          using modern full-stack technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {recentWorkItems.map((item, i) => (
          <article
            key={item.title}
            className={`rounded-xl border border-white/15 overflow-hidden transition-all duration-300 ${
              i === index ? "shadow-2xl scale-[1.02]" : "opacity-90"
            }`}
          >
         <div
  className="h-56 bg-center bg-cover"
  style={{ backgroundImage: `url(${item.imageUrl})` }}
/>

            <div className="p-5 bg-black/40 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-white font-poppins">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-white/70 font-poppins leading-relaxed">
                {item.description}
              </p>

              {/* Technology Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Visit Link */}
              <div className="mt-auto pt-5">
                {item.isInternal ? (
                  <button
                    onClick={() => navigate(item.visitUrl)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-400 transition-colors"
                  >
                    Visit Project
                    <ExternalLink size={16} />
                  </button>
                ) : (
                  <a
                    href={item.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-400 transition-colors"
                  >
                    Visit Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={onPrev}
          className="h-10 w-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
          aria-label="Previous recent work"
        >
          &#8592;
        </button>

        <button
          onClick={onNext}
          className="h-10 w-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
          aria-label="Next recent work"
        >
          &#8594;
        </button>
      </div>
    </motion.section>
  );
}