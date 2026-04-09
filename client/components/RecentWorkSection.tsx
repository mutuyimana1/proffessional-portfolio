import { useState } from "react";
import { motion } from "framer-motion";

const recentWorkItems = [
  {
    title: "Advanced Ticket Management System",
    description:
      "Advanced Ticket Management System designed to streamline and automate the lifecycle of tracking, managing, and resolving support requests or incidents within an organization.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Comprehensive ERP system",
    description:
      "Comprehensive ERP system aimed at improving business operations by facilitating purchase and sales management, inventory control, finance operations, repairs, B2B transactions, and customer management.",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Advanced computer programming coding Bootcamp [STEM]",
    description:
      "Advanced computer programming coding Bootcamp[STEM] for young women and girls in Rwanda.",
    imageUrl:
      "https://images.unsplash.com/photo-1590647190717-d4b5fa6013f3?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function RecentWorkSection() {
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
