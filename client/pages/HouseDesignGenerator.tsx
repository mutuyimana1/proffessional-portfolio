import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

export default function HouseDesignGenerator() {
  const [designs, setDesigns] = useState<
    Array<{
      id: string;
      name: string;
      style: string;
      rooms: number;
      area: number;
      createdAt: string;
    }>
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    style: "Modern",
    rooms: 3,
    area: 2000,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rooms" || name === "area" ? parseInt(value) : value,
    }));
  };

  const handleGenerateDesign = (e: React.FormEvent) => {
    e.preventDefault();
    const newDesign = {
      id: Date.now().toString(),
      name: formData.name || `Design ${designs.length + 1}`,
      style: formData.style,
      rooms: formData.rooms,
      area: formData.area,
      createdAt: new Date().toLocaleDateString(),
    };
    setDesigns([newDesign, ...designs]);
    setFormData({ name: "", style: "Modern", rooms: 3, area: 2000 });
  };

  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      <Navbar />

      <motion.section
        className="px-6 md:px-10 lg:px-20 xl:px-44 py-16 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              House Design Generator
            </h1>
            <p className="text-white/70 text-lg font-poppins">
              Create custom house designs by specifying your preferences. Watch
              your designs come to life!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-poppins">
                Create Your Design
              </h2>

              <form onSubmit={handleGenerateDesign} className="space-y-5">
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Modern Villa"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-brand-green focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2">
                    Architectural Style
                  </label>
                  <select
                    name="style"
                    value={formData.style}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:border-brand-green focus:outline-none transition"
                  >
                    <option value="Modern">Modern</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Minimalist">Minimalist</option>
                    <option value="Victorian">Victorian</option>
                    <option value="Rustic">Rustic</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 font-poppins text-sm mb-2">
                      Number of Rooms
                    </label>
                    <input
                      type="number"
                      name="rooms"
                      min="1"
                      max="10"
                      value={formData.rooms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:border-brand-green focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 font-poppins text-sm mb-2">
                      Area (sq ft)
                    </label>
                    <input
                      type="number"
                      name="area"
                      min="500"
                      max="10000"
                      step="100"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:border-brand-green focus:outline-none transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-brand-green text-white font-poppins font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  <Plus size={20} />
                  Generate Design
                </button>
              </form>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              className="bg-gradient-to-br from-brand-green/20 to-brand-green/5 p-8 rounded-2xl border border-brand-green/30"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-poppins">
                Design Preview
              </h2>

              <div className="aspect-square bg-[#0f1419] rounded-lg border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏠</div>
                  <p className="text-white/60 font-poppins">
                    {formData.name || "Your Design"}
                  </p>
                  <p className="text-white/40 text-sm mt-2 font-poppins">
                    {formData.style} - {formData.rooms} rooms - {formData.area}{" "}
                    sq ft
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/70 font-poppins">Style:</span>
                  <span className="text-white font-semibold">
                    {formData.style}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/70 font-poppins">Rooms:</span>
                  <span className="text-white font-semibold">
                    {formData.rooms}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/70 font-poppins">Area:</span>
                  <span className="text-white font-semibold">
                    {formData.area} sq ft
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Generated Designs */}
          {designs.length > 0 && (
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 font-poppins">
                Generated Designs ({designs.length})
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designs.map((design) => (
                  <motion.div
                    key={design.id}
                    className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-6 rounded-xl border border-white/10 hover:border-brand-green/50 transition"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="aspect-square bg-[#0f1419] rounded-lg flex items-center justify-center mb-4 border border-white/20">
                      <div className="text-4xl">🏠</div>
                    </div>
                    <h3 className="text-lg font-bold text-white font-poppins">
                      {design.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-2 font-poppins">
                      {design.style}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-poppins">
                      <div className="bg-white/5 p-2 rounded">
                        <p className="text-white/60">Rooms</p>
                        <p className="text-white font-semibold">
                          {design.rooms}
                        </p>
                      </div>
                      <div className="bg-white/5 p-2 rounded">
                        <p className="text-white/60">Area</p>
                        <p className="text-white font-semibold">
                          {design.area}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/40 text-xs mt-3 font-poppins">
                      Created: {design.createdAt}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      <FooterSection />
    </div>
  );
}
