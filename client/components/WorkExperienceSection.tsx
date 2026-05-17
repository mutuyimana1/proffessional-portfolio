import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const experienceItems = [
  {
    date: "07/2023 – 01/2026",
    title: "Software Engineer",
    company: "Samphone",
    website: "https://force.samphone.co/",
    summary:
      "Developed and maintained ERP & CRM systems, backend APIs, and mobile applications using Node.js, TypeScript, React Native, and Angular. Integrated RRA and MoMo services while improving system performance and operational efficiency.",
  },
  {
    date: "01/2024 – 08/2025",
    title: "Mobile Developer",
    company: "Outa",
    website: "#",
    summary:
      "Built scalable web and mobile applications with React Native, React.js, and Node.js. Integrated REST APIs, authentication systems, and real-time features while optimizing application stability and user experience.",
  },
  {
    date: "01/2024 – 04/2025",
    title: "Software Engineer",
    company: "TechVilla",
    website: "#",
    summary:
      "Developed frontend applications and REST APIs for scalable systems, ensuring seamless integration between frontend and backend services while collaborating in agile development environments.",
  },
  {
    date: "04/2022 – 07/2023",
    title: "Technical Facilitator (Software Engineering)",
    company: "Igire Rwanda Organization",
    website: "https://igirerwanda.org",
    summary:
      "Trained and mentored students in full-stack and mobile development using Node.js, React.js, Angular, React Native, and Figma while guiding real-world software projects from planning to deployment.",
  },
];

export default function WorkExperienceSection() {
  return (
    <motion.section
      className="mt-f10 p-6 sm:p-8 px-4 md:px-8 lg:px-20 xl:px-44 rounded-2xl bg-gradient-to-r from-[#291D1C] via-[#211B1B] to-[#191919]"
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
          Full-stack software engineering experience building scalable web,
          mobile, ERP, CRM, and enterprise systems with modern technologies and
          integrations.
        </p>
      </div>

      <div className="space-y-6">
        {experienceItems.map((item, index) => (
          <div
            key={`${item.company}-${index}`}
            className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/15 rounded-xl p-4 sm:p-5 gap-4 md:gap-6"
          >
            <div className="text-lg font-black text-white min-w-[160px]">
              {item.date}
            </div>

            <div className="flex items-start gap-10 flex-1">
              {/* <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lg font-bold text-black">
                {item.company.charAt(0)}
              </div> */}

              <div>
                <div className="text-xl md:text-2xl font-semibold text-white font-poppins">
                  {item.title}
                </div>

                <div className="text-red-400 font-poppins">
                  {item.company}
                </div>

                <p className="text-sm text-white/70 mt-1 font-poppins leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>

            {/* <Link
              to={item.website}
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold hover:text-yellow-300 flex items-center gap-2 font-poppins whitespace-nowrap"
            >
              <span>→</span> Visit website
            </Link> */}
          </div>
        ))}
      </div>
    </motion.section>
  );
}