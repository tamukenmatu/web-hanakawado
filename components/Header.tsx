"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "歴史", href: "#history" },
    { name: "魅力", href: "#categories" },
    { name: "イベント", href: "#event" },
    { name: "加盟店", href: "#map" },
    { name: "お問い合わせ", href: "#contact" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 70;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl font-black tracking-widest text-primary transition-transform hover:scale-105"
        >
          花川戸助六
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-sm font-medium tracking-wider transition-colors duration-200 hover:text-secondary ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          aria-label="メニューを開く"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-primary transition-colors border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
