import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      className="mt-14 p-8 px-4 md:px-8 lg:px-20 xl:px-44 rounded-2xxl bg-gradient-to-r from-[#191919] via-[#191919] to-[#1f1822]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-white/10 p-8 bg-white/5 backdrop-blur-sm">
          <h2 className="text-7xl font-black text-yellow-300">04</h2>
          <p className="mt-2 text-white/80 text-lg">Years of Experience</p>
          <div className="mt-6 rounded-lg border border-white/30 p-4 bg-white/5">
            <p className="text-4xl font-extrabold text-emerald-400">100%</p>
            <p className="text-sm text-white/80">Clients Satisfaction</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-white text-xl font-semibold font-poppins">
            What I bring
          </p>
          <p className="text-white/70 font-poppins">
            I’m a software developer focused on end-to-end web products, from
            clean interfaces to backend services. I work with teams to make
            products faster, more reliable, and easier to scale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["React & UI", "text-white"],
              ["Backend APIs", "text-emerald-300"],
              ["Cloud Services", "text-rose-300"],
              ["Data Integration", "text-amber-300"],
              ["Automation", "text-cyan-300"],
              ["Team Collaboration", "text-violet-300"],
            ].map(([label, color]) => (
              <div
                key={label}
                className="rounded-lg border border-white/30 p-4 bg-white/5 text-center"
              >
                <p className="text-4xl font-black text-white">98%</p>
                <p className={`mt-1 text-lg font-semibold ${color}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
