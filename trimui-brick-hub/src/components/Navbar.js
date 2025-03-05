"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-base sm:text-xl font-bold text-retroYellow whitespace-nowrap overflow-hidden truncate pr-4 border-r-2 border-gray-600 mr-4 transition-transform duration-200 hover:scale-105">
              <Link href="/">TrimUI Brick Hub</Link>
            </h1>
          </div>
          {/* Menú Desktop */}
          <ul className="hidden md:flex gap-6 text-sm">
            <li>
              <Link href="/faqs" className="hover:text-gray-400 px-2">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-gray-400 px-2">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/firmwares" className="hover:text-gray-400 px-2">
                Firmwares
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="hover:text-gray-400 px-2">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/specs" className="hover:text-gray-400 px-2">
                Specs
              </Link>
            </li>
          </ul>
          {/* Botón de modo oscuro (Desktop) */}
          <div className="hidden md:flex items-center">
            <button onClick={toggleDarkMode} className="retro-button px-3 py-1 text-xs ml-6">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
          {/* Botón hamburguesa (Móvil) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </nav>
      </div>
      {/* Menú móvil */}
      {menuOpen && (
        <div className="bg-gray-900 text-white px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/faqs" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Guides
              </Link>
            </li>
            <li>
              <Link href="/firmwares" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Firmwares
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/specs" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Specs
              </Link>
            </li>
          </ul>
          <button onClick={toggleDarkMode} className="mt-4 w-full retro-button">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </header>
  );
}
