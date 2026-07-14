"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const HEADER_OFFSET = 100;

    let current = "home";

    sections.forEach((section) => {
      const top = section.offsetTop - HEADER_OFFSET;

      if (window.scrollY >= top) {
        current = section.id;
      }
    });

   
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50
    ) {
      current = "contact";
    }

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

 
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
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