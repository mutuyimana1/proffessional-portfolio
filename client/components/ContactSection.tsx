import { useState, FormEvent } from "react";

const services = [
  "Web Design",
  "Web Development",
  "Product Design",
  "Project Management",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `Message sent!\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}`,
    );
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-[#0f1113] via-[#16191d] to-[#0b0f12] shadow-2xl border border-white/10"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Let’s Talk</h2>
        <p className="text-white/70 mt-2">
          Chat with me through message box, email, phone or come to my office
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-[#151a1f] border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col text-white/80">
              Your Name
              <input
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-2 bg-transparent border-b border-white/30 focus:border-emerald-400 outline-none text-white py-2"
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col text-white/80">
              Your Email
              <input
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mt-2 bg-transparent border-b border-white/30 focus:border-emerald-400 outline-none text-white py-2"
                placeholder="Your Email"
              />
            </label>
          </div>

          <div className="mt-6">
            <label className="flex flex-col text-white/80">
              Your Phone
              <input
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-2 bg-transparent border-b border-white/30 focus:border-emerald-400 outline-none text-white py-2"
                placeholder="Your Phone"
              />
            </label>
          </div>

          <div className="mt-6">
            <label className="flex flex-col text-white/80">
              Choose a Service
              <select
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="mt-2 bg-transparent border-b border-white/30 focus:border-emerald-400 outline-none text-white py-2"
              >
                <option value="" className="text-black">
                  Choose a Service
                </option>
                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6">
            <label className="flex flex-col text-white/80">
              Message
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                className="mt-2 bg-transparent border-b border-white/30 focus:border-emerald-400 outline-none text-white py-2"
                placeholder="Message"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-semibold transition"
          >
            Submit Now →
          </button>
        </form>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#1a2127] border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-yellow-300">
              📍
            </div>
            <div>
              <p className="text-white">Ruyenzi, Kamonyi, Rwanda</p>
              <p className="text-white/70 text-sm">Office Address</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#1a2127] border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-yellow-300">
              ✉️
            </div>
            <div>
              <p className="text-white">amutuyimana64@gmail.com</p>
              <p className="text-white/70 text-sm">Office Mail</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#1a2127] border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-yellow-300">
              📞
            </div>
            <div>
              <p className="text-white">+250782099213</p>
              <p className="text-white/70 text-sm">Office Phone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
