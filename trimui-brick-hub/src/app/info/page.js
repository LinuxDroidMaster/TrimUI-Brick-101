export default function InfoPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        TrimUI Brick - Info
      </h1>

      {/* Imagen de la consola */}
      <div className="flex justify-center mb-6">
        <img
          src="/trimui-brick.png"
          alt="TrimUI Brick Handheld"
          className="w-64 border-4 border-black"
        />
      </div>

      {/* Especificaciones técnicas */}
      <h2 className="text-2xl font-bold text-retroBlue mb-2">Technical Specs</h2>
      <ul className="list-disc list-inside text-retroYellow mb-6">
        <li>🔹 CPU: Ingenic X1830 (1GHz)</li>
        <li>🔹 RAM: 128MB DDR2</li>
        <li>🔹 Storage: MicroSD (hasta 128GB)</li>
        <li>🔹 Screen: 2.0" IPS (320x240)</li>
        <li>🔹 Battery: 1,000mAh (4-5 horas)</li>
        <li>🔹 OS: Linux-based Custom Firmware</li>
      </ul>

      {/* Características principales */}
      <h2 className="text-2xl font-bold text-retroBlue mb-2">Features</h2>
      <p className="text-white mb-6">
        The TrimUI Brick is a compact retro handheld console designed for
        **emulation** and lightweight gaming. It supports multiple emulators,
        features a **custom Linux firmware**, and is perfect for on-the-go
        gaming.
      </p>

      {/* Enlaces útiles */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">Useful Links</h2>
      <div className="flex flex-col gap-4">
        <a href="https://example.com" target="_blank" className="retro-button text-center w-full">
          🌍 Official Website
        </a>
        <a href="https://example.com/forum" target="_blank" className="retro-button text-center w-full">
          💬 Community Forum
        </a>
        <a href="https://example.com/manual" target="_blank" className="retro-button text-center w-full">
          📄 User Manual
        </a>
      </div>
    </div>
  );
}
