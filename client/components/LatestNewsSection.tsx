const newsItems = [
  {
    date: "13 Dec, 2025",
    title:
      "Released a new ticketing dashboard with real-time support analytics for Samphone Rwanda.",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de1bb23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "28 Feb, 2024",
    title:
      "Delivered a finance and inventory module for a B2B ERP platform at TechVision LTD.",
    imageUrl:
      "https://images.unsplash.com/photo-1547658715-5b3a6dc8f31e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "05 Aug, 2023",
    title:
      "Hosted a web development workshop for young women and girls in Rwanda.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

import { motion } from "framer-motion";

export default function LatestNewsSection() {
  return (
    <motion.section
      className="mtx-10 p-8 px-4 md:px-8 lg:px-20 xl:px-44 bg-gradient-to-r from-[#292a29] via-[#1a1b1c] to-[#101214]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          Latest Updates
        </h2>
        <p className="text-white/70 mt-2 font-poppins">
          News from recent releases, workshops, and product launches.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {newsItems.map((item) => (
          <article
            key={item.date}
            className="rounded-xl overflow-hidden border border-white/15 bg-black/20"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="p-5">
              <p className="text-sm text-white/80 font-poppins">{item.date}</p>
              <h3 className="text-xl text-white font-semibold mt-2 font-poppins">
                {item.title}
              </h3>
              <button
                className="mt-4 text-white font-bold text-lg hover:text-yellow-300 font-poppins"
                onClick={() => window.open("#", "_blank")}
              >
                → Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
