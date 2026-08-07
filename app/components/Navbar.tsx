"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [showTop, setShowTop] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "Home", link: "#hero", id: "hero" },
    { name: "About", link: "#about", id: "about" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Projects", link: "#projects", id: "projects" },
  ];

  // Show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          sticky top-0 z-50
          py-4
          bg-background/95
          backdrop-blur-md
          border-b border-border
          animate-fade-down
        "
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="font-black text-2xl md:text-3xl">
            QOZEEM<span className="text-primary">[OPE]</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center justify-between gap-10">
            {menuItems.map((menu) => {
              const isActive = menu.id === activeSection;

              return (
                <li
                  key={menu.id}
                  className={`
                    transition-all duration-300
                    ${
                      isActive
                        ? "font-bold text-primary"
                        : "text-text hover:text-primary-hover"
                    }
                  `}
                >
                  <Link
                    href={menu.link}
                    className="transition-colors duration-300"
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="
                border border-border
                text-text
                px-3 py-2
                rounded-md
                hover:bg-card-secondary
                transition-all duration-200
                hover:-translate-y-0.5
                active:scale-95
                cursor-pointer
              "
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* CONTACT */}
            <a
              href="mailto:qozeemopeyemi2008@gmail.com"
              className="
                bg-primary
                cursor-pointer
                text-white
                py-2 px-4
                rounded-sm
                hover:bg-primary-hover
                transition-all duration-200
                hover:-translate-y-0.5
                active:scale-95
              "
            >
              Contact me
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="
              md:hidden
              text-3xl
              text-text
              cursor-pointer
              transition-transform
              duration-200
              active:scale-90
            "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
              md:hidden
              mt-6
              bg-card
              rounded-xl
              border border-border
              p-5
              animate-fade-down
            "
          >

            {/* MOBILE LINKS */}
            <ul className="flex flex-col gap-5">
              {menuItems.map((menu) => {
                const isActive = menu.id === activeSection;

                return (
                  <li
                    key={menu.id}
                    className={`
                      transition-colors duration-300
                      ${
                        isActive
                          ? "font-bold text-primary"
                          : "text-text hover:text-primary-hover"
                      }
                    `}
                  >
                    <Link
                      href={menu.link}
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 mt-6">

              {/* THEME */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="
                  border border-border
                  text-text
                  px-3 py-2
                  rounded-md
                  hover:bg-card-secondary
                  transition-all duration-200
                  active:scale-95
                  cursor-pointer
                "
              >
                {dark ? "☀️" : "🌙"}
              </button>

              {/* CONTACT */}
              <a
                href="mailto:qozeemopeyemi2008@gmail.com"
                className="
                  flex-1
                  bg-primary
                  text-center
                  text-white
                  py-2 px-4
                  rounded-sm
                  hover:bg-primary-hover
                  transition-all duration-200
                  active:scale-95
                "
              >
                Contact me
              </a>

            </div>

          </div>
        )}

      </nav>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-12
            h-12
            rounded-full
            bg-primary
            text-white
            flex
            items-center
            justify-center
            shadow-lg
            transition-all
            duration-300
            hover:bg-primary-hover
            hover:-translate-y-1
            hover:shadow-[0_0_20px_rgba(36,184,29,0.35)]
            active:scale-90
            cursor-pointer
          "
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Navbar;