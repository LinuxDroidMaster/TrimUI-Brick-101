export default function FirmwaresPage() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
          Custom Firmwares for TrimUI Brick
        </h1>
        <p className="text-lg text-black dark:text-white text-center mb-4">
          Explore and install the best custom firmwares for your TrimUI Brick.
        </p>
  
        <ul className="list-disc list-inside text-black dark:text-white space-y-2">
          <li>
            <a
              href="https://github.com/LinuxDroidMaster/TrimUI-Brick-101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              TrimUI Brick 101 – Complete Firmware Guide
            </a>
          </li>
          <li>
            <a
              href="https://github.com/trimui/MinUI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              MinUI – Lightweight and optimized firmware
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KnulliOS/Knulli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Knulli – Based on Batocera
            </a>
          </li>
          <li>
            <a
              href="https://github.com/StockMix/StockMix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              StockMix – Enhanced stock firmware
            </a>
          </li>
          <li>
            <a
              href="https://retrogamecorps.com/2024/12/09/my-simple-trimui-brick-setup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Retro Game Corps Setup Guide
            </a>
          </li>
        </ul>
      </div>
    );
  }
  