export default function FirmwaresPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        Custom Firmwares for TrimUI Brick
      </h1>

      {/* Video de YouTube */}
      <div className="mb-8 text-center">
        <h2 className="text-xl font-bold text-retroBlue mb-2">
          🎥 Quick Firmware Installation Guide
        </h2>
        <p className="text-black dark:text-white mb-4">
          Watch this video to learn how to install the most popular firmwares on the TrimUI Brick!
        </p>
        <div className="relative aspect-w-16 aspect-h-9 max-w-full mx-auto">
          <iframe
            className="w-full h-64 md:h-80 border-4 border-black"
            src="https://www.youtube.com/embed/H1YYyXFfxeY"
            title="TrimUI Brick Firmware Installation Guide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Stock Firmware & Modified Versions */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">
        📦 Official Stock Firmware & Modified Versions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FirmwareCard
          title="Stock Firmware"
          description="The original firmware that comes with the TrimUI Brick."
          link="https://github.com/trimui/assets_brick/releases"
        />
        <FirmwareCard
          title="CrossMix"
          description="An experimental custom firmware with new features."
          link="https://github.com/cizia64/CrossMix-OS/releases"
          badge="🚧 In Development"
        />
        <FirmwareCard
          title="StockMix"
          description="An enhanced version of the stock firmware with extra features."
          link="https://github.com/costlyclick/stockmix/"
        />
      </div>

      {/* Major Community Projects */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">
        🌟 Major Community Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FirmwareCard
          title="MinUI"
          description="A lightweight and optimized firmware focused on minimalism."
          link="https://github.com/shauninman/MinUI/releases"
        />
        <FirmwareCard
          title="Knulli"
          description="A firmware based on Batocera, currently in development."
          link="https://github.com/knulli-cfw/distribution/releases"
          badge="🚧 In Development"
        />
      </div>

      {/* Other Community Firmwares */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">
        🔧 Other Community Firmwares
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FirmwareCard
          title="AnotherStockMix"
          description="A custom version of StockMix modified by the community."
          link="https://github.com/rulerofoz/AnotherStockMix"
        />
      </div>

      {/* Extra Tools Section */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">🛠️ Tools & Utilities</h2>
      <p className="text-black dark:text-white text-center mb-6">
        There are also community-made tools that enhance your firmware experience.
        Learn more in my repository:
      </p>
      <div className="flex justify-center">
        <a
          href="https://github.com/LinuxDroidMaster/TrimUI-Brick-101"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 border-4 border-black shadow-lg text-center"
        >
          🔗 TrimUI Brick 101 Repo
        </a>
      </div>
    </div>
  );
}

// Reusable Firmware Card Component with Optional Badge
function FirmwareCard({ title, description, link, badge }) {
  return (
    <div className="border-4 border-black p-4 bg-gray-200 dark:bg-gray-800 text-center">
      <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
      {badge && (
        <div className="mt-2 mb-2">
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 border-2 border-black inline-block">
            {badge}
          </span>
        </div>
      )}
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="retro-button mt-2 inline-block"
      >
        Learn More
      </a>
    </div>
  );
}

