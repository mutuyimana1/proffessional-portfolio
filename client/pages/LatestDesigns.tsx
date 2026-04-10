import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const latestDesigns = [
  {
    id: 1,
    name: "Luxury Modern Villa",
    style: "Modern",
    rooms: 5,
    area: 4500,
    featured: true,
    image: "🏠",
    createdAt: "2024-04-08",
  },
  {
    id: 2,
    name: "Cozy Contemporary Home",
    style: "Contemporary",
    rooms: 3,
    area: 2200,
    featured: true,
    image: "🏡",
    createdAt: "2024-04-07",
  },
  {
    id: 3,
    name: "Classic Traditional Manor",
    style: "Traditional",
    rooms: 6,
    area: 5000,
    featured: false,
    image: "🏘️",
    createdAt: "2024-04-06",
  },
  {
    id: 4,
    name: "Minimalist Sanctuary",
    style: "Minimalist",
    rooms: 2,
    area: 1200,
    featured: true,
    image: "🏠",
    createdAt: "2024-04-05",
  },
  {
    id: 5,
    name: "Rustic Countryside Retreat",
    style: "Rustic",
    rooms: 4,
    area: 3200,
    featured: false,
    image: "🏘️",
    createdAt: "2024-04-04",
  },
  {
    id: 6,
    name: "Victorian Elegance",
    style: "Victorian",
    rooms: 7,
    area: 5500,
    featured: true,
    image: "🏚️",
    createdAt: "2024-04-03",
  },
];

export default function LatestDesigns() {
  const featuredDesigns = latestDesigns.filter((d) => d.featured);
  const otherDesigns = latestDesigns.filter((d) => !d.featured);

  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      <Navbar />

      <motion.section
        className="px-6 md:px-10 lg:px-20 xl:px-44 py-16 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Latest House Designs
            </h1>
            <p className="text-white/70 text-lg font-poppins mb-6">
              Browse our collection of stunning house designs created by our
              community.
            </p>

            <Link
              to="/house-design-generator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-poppins font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Create Your Design <ArrowRight size={18} />
            </Link>
          </div>

          {/* Featured Designs */}
          {featuredDesigns.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 font-poppins">
                Featured Designs
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredDesigns.map((design, idx) => (
                  <motion.div
                    key={design.id}
                    className="group rounded-2xl overflow-hidden border border-brand-green/30 bg-gradient-to-br from-[#1a2332] to-[#0f1419] hover:border-brand-green transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-brand-green/20 to-brand-green/5 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                      {design.image}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white font-poppins">
                          {design.name}
                        </h3>
                        <span className="px-3 py-1 text-xs bg-brand-green text-black font-semibold rounded-full">
                          Featured
                        </span>
                      </div>

                      <p className="text-white/70 font-poppins text-sm mb-4">
                        {design.style} Architecture
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 p-3 rounded-lg">
                          <p className="text-white/60 text-xs font-poppins">
                            Rooms
                          </p>
                          <p className="text-white font-bold">{design.rooms}</p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg">
                          <p className="text-white/60 text-xs font-poppins">
                            Area
                          </p>
                          <p className="text-white font-bold">{design.area}</p>
                        </div>
                      </div>

                      <p className="text-white/40 text-xs font-poppins mb-4">
                        Created: {design.createdAt}
                      </p>

                      <button className="w-full px-4 py-2 bg-brand-green/20 border border-brand-green text-brand-green font-poppins font-semibold rounded-lg hover:bg-brand-green hover:text-black transition">
                        View Design
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Designs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-poppins">
              All Designs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestDesigns.map((design, idx) => (
                <motion.div
                  key={design.id}
                  className="group rounded-xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#1a2332] to-[#0f1419] hover:border-white/40 transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-300">
                    {design.image}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white font-poppins mb-2">
                      {design.name}
                    </h3>

                    <p className="text-white/70 font-poppins text-sm mb-3">
                      {design.style}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-white/5 p-2 rounded">
                        <p className="text-white/60 text-xs font-poppins">
                          Rooms
                        </p>
                        <p className="text-white font-semibold text-sm">
                          {design.rooms}
                        </p>
                      </div>
                      <div className="bg-white/5 p-2 rounded">
                        <p className="text-white/60 text-xs font-poppins">
                          Area
                        </p>
                        <p className="text-white font-semibold text-sm">
                          {design.area}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/40 text-xs font-poppins">
                      {design.createdAt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-brand-green/20 to-brand-green/10 border border-brand-green/30 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
              Ready to Create?
            </h2>
            <p className="text-white/70 mb-6 font-poppins">
              Start generating your own custom house design using our advanced
              design generator.
            </p>
            <Link
              to="/house-design-generator"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green text-black font-poppins font-semibold rounded-lg hover:bg-green-500 transition"
            >
              Start Designing <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <FooterSection />
    </div>
  );
}
