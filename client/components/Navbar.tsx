import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navLinks.map((link) => link.href.substring(1));
          const scrollPosition = window.scrollY + 150; // Offset for navbar height + some buffer

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionBottom = sectionTop + sectionHeight;

              if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
              ) {
                setActiveLink(navLinks[i].label);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update active link immediately for better UX
      const linkIndex = navLinks.findIndex((link) => link.href === href);
      if (linkIndex !== -1) {
        setActiveLink(navLinks[linkIndex].label);
      }
    }
  };

  return (
    <nav className="w-full px-10 md:px-10 2xl:px-64 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link
        to="#home"
        className="text-white font-bold text-2xl md:text-2xl font-poppins shrink-0"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#home");
        }}
      >
        Alice.M
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <li
            key={link.label}
            className="relative flex flex-col items-center gap-1"
          >
            <Link
              to={link.href}
              className="text-white font-poppins text-base lg:text-md font-normal hover:text-brand-green transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.label}
            </Link>
            {activeLink === link.label && (
              <span className="block h-1 w-10 rounded-full bg-brand-green transition-all duration-300" />
            )}
          </li>
        ))}
      </ul>

      {/* Resume Button */}
      <button className="hidden md:block bg-brand-green text-white font-poppins text-base lg:text-lg font-normal px-7 py-3 rounded-full hover:bg-green-600 transition-colors shrink-0">
        Resume
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {mobileOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1F393F]/95 backdrop-blur-sm flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-white font-poppins text-lg hover:text-brand-green transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
                setMobileOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-brand-green text-white font-poppins text-base font-normal px-7 py-3 rounded-full hover:bg-green-600 transition-colors mt-2">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
