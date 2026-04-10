import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const recentWorkItems = [
  {
    title: "House Design Generator",
    description:
      "Advanced AI-powered house design generator allowing users to create custom architectural designs by specifying preferences like style, room count, and area. Create beautiful homes tailored to your needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1582073566048-8c5a27da55d8?auto=format&fit=crop&w=1200&q=80",
    visitUrl: "/house-design-generator",
    isInternal: true,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Latest Designs Showcase",
    description:
      "Browse and explore the latest house designs created by our community. View featured designs, architectural styles, room configurations, and get inspired by stunning creations.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    visitUrl: "/latest-designs",
    isInternal: true,
    technologies: ["React", "React Router", "Responsive Design", "Motion"],
  },
  {
    title: "Advanced computer programming coding Bootcamp [STEM]",
    description:
      "Advanced computer programming coding Bootcamp[STEM] for young women and girls in Rwanda.",
    imageUrl:
      "https://images.unsplash.com/photo-1590647190717-d4b5fa6013f3?auto=format&fit=crop&w=1200&q=80",
    visitUrl: "#",
    isInternal: false,
    technologies: ["Next.js", "Python", "Django", "Firebase", "Figma"],
  },
];

export default function RecentWorkSection() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  function onPrev() {
    setIndex((prev) => (prev === 0 ? recentWorkItems.length - 1 : prev - 1));
  }

  function onNext() {
    setIndex((prev) => (prev === recentWorkItems.length - 1 ? 0 : prev + 1));
  }

  const selectedItem = recentWorkItems[index];

  return (
    <motion.section
      className="mts-10 p-8 px-4 md:px-8 lg:px-20 xl:px-44 rounxded-2xl bg-gradient-to-r from-[#212020] via-[#2C291E] to-[#36321C]"
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
          Recent work I delivered for operations, education, and customer-facing
          platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {recentWorkItems.map((item, i) => (
          <article
            key={item.title}
            className={`rounded-xl border border-white/15 overflow-hidden transition-all ${
              i === index ? "shadow-2xl scale-105" : "opacity-80"
            }`}
          >
            <div
              className="h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="p-5 bg-black/40">
              <h3 className="text-xl font-semibold text-white font-poppins">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 font-poppins">
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
              {item.isInternal ? (
                <button
                  // onClick={() => navigate(item.visitUrl)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-green-400 transition-colors"
                >
                  Visit Project
                  <ExternalLink size={16} />
                </button>
              ) : (
                <a
                  href={item.visitUrl}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-green-400 transition-colors"
                >
                  Visit Project
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={onPrev}
          className="h-10 w-10 rounded-full border border-white/30 text-white hover:bg-white/10"
          aria-label="Previous recent work"
        >
          &#8592;
        </button>
        <button
          onClick={onNext}
          className="h-10 w-10 rounded-full border border-white/30 text-white hover:bg-white/10"
          aria-label="Next recent work"
        >
          &#8594;
        </button>
      </div>
    </motion.section>
  );
}
