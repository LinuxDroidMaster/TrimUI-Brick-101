"use client";
import { useState, useEffect } from "react";

export default function GuidesPage() {
  const [data, setData] = useState({ videos: [], guides: [] });
  const [search, setSearch] = useState(""); // Estado de búsqueda
  const [filteredVideos, setFilteredVideos] = useState([]); // Videos filtrados
  const [filteredGuides, setFilteredGuides] = useState([]); // Guías filtradas

  useEffect(() => {
    fetch("/data/tutorials.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFilteredVideos(json.videos);
        setFilteredGuides(json.guides);
      })
      .catch((err) => console.error("Error loading guides:", err));
  }, []);

  // Función para filtrar videos y guías mientras el usuario escribe
  useEffect(() => {
    const lowerSearch = search.toLowerCase();

    setFilteredVideos(
      data.videos.filter(
        (video) =>
          video.title.toLowerCase().includes(lowerSearch) ||
          video.description.toLowerCase().includes(lowerSearch)
      )
    );

    setFilteredGuides(
      data.guides.filter(
        (guide) =>
          guide.title.toLowerCase().includes(lowerSearch) ||
          guide.description.toLowerCase().includes(lowerSearch)
      )
    );
  }, [search, data]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        Guides & Tutorials
      </h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Search videos or guides..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 border-4 border-black text-black"
      />

      {/* Sección de videos */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">Video Tutorials</h2>
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredVideos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black p-2 bg-retroBlue text-white block hover:scale-105 transition-transform"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full border-4 border-black"
              />
              <h2 className="text-lg font-bold mt-2">{video.title}</h2>
              <p className="text-sm">{video.description}</p>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-retroBlue font-bold">No videos found.</p>
      )}

      {/* Sección de guías */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">Written Guides</h2>
      {filteredGuides.length > 0 ? (
        <ul className="space-y-4">
          {filteredGuides.map((guide) => (
            <li key={guide.id} className="border-4 border-black p-4 bg-retroPurple text-white">
              <h2 className="text-xl font-bold">{guide.title}</h2>
              <p className="text-sm">{guide.description}</p>
              <a
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button mt-2 inline-block"
              >
                Read Guide
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-retroBlue font-bold">No guides found.</p>
      )}

      {/* Mensaje si no hay coincidencias en ninguna categoría */}
      {filteredVideos.length === 0 && filteredGuides.length === 0 && (
        <p className="text-center text-retroRed font-bold mt-6">No results found.</p>
      )}
    </div>
  );
}
