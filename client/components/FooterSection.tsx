export default function FooterSection() {
  return (
    <div className="mt-10 space-y-6">
      
      {/* 🔴 CTA SECTION */}
      <div className="bg-[#ff3b4a] text-white rounded-2xl  px-4 md:px-8 lg:px-20 xl:px-44 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-xl leading-snug">
          Send me a message <br />
          and make something <br />
          together.
        </h2>

        <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition">
          Contact Us
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* 🟢 FOOTER */}
      <footer className="px-10 py-14 bg-gradient-to-r from-[#0b1f17] via-[#1c3a2b] to-[#1a3927] text-white rounded-2xl border border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Left Section */}
          <div className="md:pr-8 md:border-r md:border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-black font-semibold">
                A
              </div>
              <p className="text-lg font-semibold">Alice.M</p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Welcome and open yourself to your truest love this year with us!
              With the Release Process
            </p>

            <div className="flex items-center gap-3 mt-6 text-white/70">
              {["✉️", "f", "in", "×"].map((icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition cursor-pointer text-sm"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              {["About", "Contact", "Projects", "Recent Post"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-white/40">—</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">All Services</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              {[
                "Web Design",
                "Web Development",
                "Product Design",
                "Project Management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-white/40">—</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Must explain to you how all this mistaken idea pleasure born and
              give you a complete account.
            </p>

            <div className="mt-5 flex items-center bg-black/30 border border-white/10 rounded-lg px-3 py-2">
              <input
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
                placeholder="Email address *"
              />
              <button className="ml-2 w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                ✉️
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}