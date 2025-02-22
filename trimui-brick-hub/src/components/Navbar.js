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
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        {/* Logo */}
        <h1 className="text-lg font-bold">
          <Link href="/">TrimUI Brick Hub</Link>
        </h1>

        {/* Menú para pantallas grandes */}
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
            <Link href="/info" className="hover:text-gray-400 px-2">
              Info
            </Link>
          </li>
        </ul>

        {/* Botón de modo oscuro */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block retro-button px-3 py-1 text-xs"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Botón hamburguesa para móvil */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white p-4 mt-2 rounded-lg">
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
              <Link href="/info" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Info
              </Link>
            </li>
          </ul>

          {/* Botón de modo oscuro dentro del menú móvil */}
          <button onClick={toggleDarkMode} className="mt-4 w-full retro-button">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </header>
  );
}
