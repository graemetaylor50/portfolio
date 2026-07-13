"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  console.log("Sections:", sections);

  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-25% 0px -50% 0px",
    threshold: 0.1,
  }
);

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link href="/" className="header__logo">
          <div className="logo-mark">
            <span className="logo-g">G</span>
            <span className="logo-t">T</span>
          </div>

          <span className="header__logo-name">
            Graeme Taylor
          </span>
        </Link>

        {/* Navigation */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`header__link ${
                activeSection === link.id ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle (placeholder) */}
        <button
          className="header__theme-button"
          aria-label="Toggle theme"
        >
          ☀
        </button>
      </div>
    </header>
  );
}