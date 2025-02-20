const tutorials = [
  {
    id: 1,
    title: "How to Install Custom Firmware",
    description: "Step-by-step guide to installing a custom OS on the TrimUI Brick.",
    link: "https://example.com/custom-firmware",
  },
  {
    id: 2,
    title: "Best RetroArch Settings",
    description: "Optimize your emulator settings for the best performance.",
    link: "https://example.com/retroarch-settings",
  },
  {
    id: 3,
    title: "Adding New Games",
    description: "Learn how to transfer and organize your game library.",
    link: "https://example.com/adding-games",
  },
];

export default function TutorialsPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">Tutorials</h1>
      <ul className="space-y-4">
        {tutorials.map((tutorial) => (
          <li key={tutorial.id} className="border-4 border-black p-4 bg-retroBlue text-white">
            <h2 className="text-xl font-bold">{tutorial.title}</h2>
            <p className="text-sm">{tutorial.description}</p>
            <a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button mt-2 inline-block"
            >
              View Tutorial
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
