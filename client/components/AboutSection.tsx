export default function AboutSection() {
  return (
    <section className="mt-14 p-8 px-4 md:px-8 lg:px-20 xl:px-44 rounded-2xxl bg-gradient-to-r from-[#191919] via-[#191919] to-[#1f1822] ">
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
          <p className="text-white text-xl font-semibold font-poppins">My Advantage</p>
          <p className="text-white/70 font-poppins">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual and praising pain was
            born.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["Figma", "text-white"],
              ["UI/UX", "text-emerald-300"],
              ["Frontend", "text-rose-300"],
              ["Backend", "text-amber-300"],
              ["Product Design", "text-cyan-300"],
              ["Project Management", "text-violet-300"],
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
    </section>
  );
}
