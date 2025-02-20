export default function InfoPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple dark:text-retroYellow text-center mb-6">
        Specs & Features
      </h1>

      {/* Imagen de la consola */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/trimui-brick.png"
          alt="TrimUI Brick Handheld"
          className="w-64 border-4 border-black"
        />
      </div>

      {/* Main Features */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Main Features
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li>
          🎮 <strong>3.2-inch IPS full-fit screen</strong>: Crystal-clear display
          for an immersive gaming experience with eye protection.
        </li>
        <li>
          🔥 <strong>Cool atmosphere light</strong>: RGB lighting on the back,
          shoulder buttons (L1/L2/R1/R2), and F1/F2 keys with adjustable
          breathing effect.
        </li>
        <li>
          ✨ <strong>Personalized customization</strong>: CNC metal back plate
          for engraving, removable shoulder keys, and customizable styling.
        </li>
      </ul>

      {/* Specifications */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Specs
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li>🖥️ <strong>Display:</strong> 3.2 inches, 1024x768 IPS, fully laminated</li>
        <li>💾 <strong>System:</strong> Linux</li>
        <li>🧩 <strong>Material:</strong> Plastic, Glass, Electronic Components</li>
        <li>🎨 <strong>Colors:</strong> White, Black, Red, Purple</li>
        <li>⚙️ <strong>CPU:</strong> Allwinner A133P 1.8GHz</li>
        <li>🎮 <strong>GPU:</strong> PowerVR GE8300 660MHz</li>
        <li>🚀 <strong>RAM:</strong> 1GB LPDDR4x</li>
        <li>💾 <strong>Storage:</strong> 8GB eMMC</li>
        <li>📶 <strong>WiFi:</strong> WLAN 802.11 b/g/n</li>
        <li>🔵 <strong>Bluetooth:</strong> BT2.1 + EDR/4.2</li>
        <li>🔊 <strong>Audio:</strong> Stereo speakers (2x1W), 3.5mm headphone jack, microphone</li>
        <li>🔋 <strong>Battery:</strong> 3000mAh (5 hours of battery life)</li>
        <li>💾 <strong>External TF Card:</strong> Supports 64GB, 128GB, 256GB</li>
        <li>⚡ <strong>Charging:</strong> USB-C (5V/1.5A), supports shutdown charging</li>
        <li>💡 <strong>Lighting:</strong> RGB backlight, integrated power button indicator</li>
        <li>🎮 <strong>Function Keys:</strong> FN lock switch, F1/F2 shortcut keys</li>
        <li>🔌 <strong>Ports:</strong> USB-C (charging & OTG), USB host (for controllers)</li>
        <li>💥 <strong>Other Features:</strong> Built-in WiFi for online multiplayer, single-channel vibration motor</li>
      </ul>

      {/* Product Dimensions */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Product Dimensions
      </h2>
      <p className="text-black dark:text-white mb-6">
        📏 <strong>Size:</strong> 10.99 x 7.32 x 1.18 cm
      </p>

      {/* What's in the Box */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        What's in the Box?
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li>🕹️ <strong>TrimUI Brick Game Console</strong></li>
        <li>🔌 <strong>Type-C Charging Cable</strong></li>
        <li>📖 <strong>User Manual</strong></li>
      </ul>

      {/* Community Links */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Join the Community
      </h2>
      <div className="flex flex-col gap-4">
        <a
          href="https://www.reddit.com/r/trimui/"
          target="_blank"
          className="bg-[#FF4500] hover:bg-[#cc3700] text-white font-bold py-2 px-4 text-center border-4 border-black shadow-lg"
        >
          Join the TrimUI Reddit Community
        </a>
        <a
          href="https://discord.gg/c4xWQW6w"
          target="_blank"
          className="bg-[#5865F2] hover:bg-[#4a55d1] text-white font-bold py-2 px-4 text-center border-4 border-black shadow-lg"
        >
          Join the Retro Handhelds Discord
        </a>
      </div>
    </div>
  );
}

