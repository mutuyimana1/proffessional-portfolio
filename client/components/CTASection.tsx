export default function CTASection() {
  return (
    <div className="px-6 md:px-10">
      <div className="bg-[#ff3b4a] rounded-2xl px-8 md:px-12 py-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* TEXT */}
        <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight max-w-xl font-poppins">
          Send me a message <br />
          and make something <br />
          together.
        </h2>

        {/* BUTTON */}
        <div className="flex md:justify-end w-full md:w-auto">
          <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-black/80 transition font-poppins">
            Contact Us
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
