"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 20) {
        setShowNavbar(true);
      } else if (current > lastScrollY && !menuOpen) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1700px] items-center border-b border-white/10 bg-black/80 px-5 backdrop-blur-xl md:px-8 lg:px-10">

          {/* Logo */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              src="/sss-logo.png"
              alt="SSS Logo"
              className="h-9 w-9 md:h-11 md:w-11"
            />
          </button>

          {/* Desktop Menu */}
          <div className="ml-auto hidden items-center gap-12 lg:flex">

            {["about", "projects", "testimonials"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative text-[13px] uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
              >
                {item}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Start a Project →
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="ml-auto text-white lg:hidden"
          >
            <Menu size={28} />
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        <div className="flex h-16 items-center justify-between px-6">

          <img
            src="/sss-logo.png"
            className="h-10"
            alt=""
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <X size={28} />
          </button>

        </div>

        <div className="mt-20 flex flex-col items-center gap-10">

          <button
            onClick={() => scrollToSection("about")}
            className="text-3xl font-light"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="text-3xl font-light"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-3xl font-light"
          >
            Testimonials
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 rounded-full border border-white/20 px-8 py-3"
          >
            Start a Project →
          </button>

        </div>
      </div>
    </>
  );
}