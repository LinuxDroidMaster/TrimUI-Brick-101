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
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link href="/">TrimUI Brick Hub</Link>
        </h1>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex gap-4">
          <li>
            <Link href="/tutorials" className="hover:text-gray-400">
              Tutorials
            </Link>
          </li>
          <li>
            <Link href="/videos" className="hover:text-gray-400">
              Videos
            </Link>
          </li>
          <li>
            <Link href="/info" className="hover:text-gray-400">
              Info
            </Link>
          </li>
        </ul>

        {/* Botón de modo oscuro */}
        <button onClick={toggleDarkMode} className="hidden md:block retro-button px-4 py-2 text-sm">
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
              <Link href="/tutorials" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Videos
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
