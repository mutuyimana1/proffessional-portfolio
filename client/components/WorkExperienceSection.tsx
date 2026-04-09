import { motion } from "framer-motion";

const experienceItems = [
  {
    date: "2023–2025",
    title: "Frontend Developer",
    company: "Samphone Rwanda",
    website: "https://samphone.rw",
    summary:
      "Led the redesign and implementation of a customer portal using React and Tailwind.",
  },
  {
    date: "2021–2023",
    title: "Full-stack Engineer",
    company: "TechVision LTD",
    website: "https://techvision.rw",
    summary:
      "Built ERP modules and integrated payment workflows with Node.js and PostgreSQL.",
  },
  {
    date: "2019–2021",
    title: "UI/UX Developer",
    company: "DesignHive",
    website: "https://designhive.rw",
    summary:
      "Designed interfaces and interaction flows for web applications and client products.",
  },
  {
    date: "2017–2019",
    title: "Intern Developer",
    company: "CreateLab",
    website: "https://createlab.rw",
    summary:
      "Supported client websites, internal tools, and automation projects for small teams.",
  },
];

export default function WorkExperienceSection() {
  return (
    <motion.section
      className="mt-f10 p-6 sm:p-8 px-4 md:px-8 lg:px-20 xl:px-44 roundded-2xl bg-gradient-to-r from-[#291D1C] via-[#211B1B] to-[#191919]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          Work Experience
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto font-poppins">
          Selected roles where I helped teams build web platforms, backend APIs,
          and operational tools for business growth.
        </p>
      </div>

      <div className="space-y-4">
        {experienceItems.map((item, index) => (
          <div
            key={`${item.company}-${index}`}
            className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/15 rounded-xl p-4 sm:p-5 gap-4 md:gap-6"
          >
            <div className="text-3xl md:text-4xl font-black text-white min-w-[140px]">
              {item.date}
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-black">
                S
              </div>
              <div>
                <div className="text-xl md:text-2xl font-semibold text-white font-poppins">
                  {item.title}
                </div>
                <div className="text-red-400 font-poppins">{item.company}</div>
                <p className="text-sm text-white/70 mt-1 font-poppins">
                  {item.summary}
                </p>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold hover:text-yellow-300 flex items-center gap-2 font-poppins"
            >
              <span>→</span> Visit website
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
