const experienceItems = [
  {
    date: "2023–2025",
    title: "Frontend Developer",
    company: "Samphone Rwanda",
    website: "https://samphone.rw",
  },
  {
    date: "2021–2023",
    title: "Full-stack Engineer",
    company: "TechVision LTD",
    website: "https://techvision.rw",
  },
  {
    date: "2019–2021",
    title: "UI/UX Developer",
    company: "DesignHive",
    website: "https://designhive.rw",
  },
  {
    date: "2017–2019",
    title: "Intern Developer",
    company: "CreateLab",
    website: "https://createlab.rw",
  },
];

export default function WorkExperienceSection() {
  return (
    <section className="mt-f10 p-6 sm:p-8 px-4 md:px-8 lg:px-20 xl:px-44 roundded-2xl bg-gradient-to-r from-[#291D1C] via-[#211B1B] to-[#191919]">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          My Work Experience
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto font-poppins">
          Must explain to you how all this mistaken idea of denouncing pleasure
          born and give you a complete account the system.
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
              </div>
            </div>
            <a
              href={item.website}
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold hover:text-yellow-300 flex items-center gap-2 font-poppins"
            >
              <span>→</span> Go to Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
