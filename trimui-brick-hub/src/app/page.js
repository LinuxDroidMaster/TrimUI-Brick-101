import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrimUI Brick Hub - Retro Handheld Tutorials & Videos</title>
        <meta
          name="description"
          content="Your ultimate source for the best tutorials and videos on retro handhelds and the TrimUI Brick. Discover guides, firmwares, and more."
        />
        <meta
          name="keywords"
          content="TrimUI, Brick, Retro Handheld, Tutorials, Videos, Firmware, Pico-8, PortMaster, HackROMs, MinUI, CrossMix"
        />
        <meta property="og:title" content="TrimUI Brick Hub - Retro Handheld Tutorials & Videos" />
        <meta
          property="og:description"
          content="Your ultimate source for the best tutorials and videos on retro handhelds and the TrimUI Brick. Discover guides, firmwares, and more."
        />
        <meta property="og:url" content="https://trimui-brick.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://trimui-brick.vercel.app/" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        {/* Main Title */}
        <h1 className="text-4xl mb-4 text-retroPurple dark:text-retroYellow">
          TrimUI Brick Hub
        </h1>
        <p className="text-lg text-retroYellow dark:text-retroBlue">
          Your source for the best tutorials and videos!
        </p>

        {/* Start Button */}
        <a href="/guides" className="retro-button mt-6">
          Start
        </a>

        {/* Separator */}
        <hr className="w-48 border-t-2 border-gray-500 my-8" />

        {/* Support Section */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Enjoying this project? Support me on YouTube, Ko-fi, or by shopping on AliExpress at no extra cost!
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <a
            href="https://www.youtube.com/@LinuxDroidMaster"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
          >
            ▶️ Subscribe
          </a>
          <a
            href="https://ko-fi.com/droidmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#29abe0] hover:bg-[#1f92c0] text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
          >
            ☕ Donate
          </a>
          <a
            href="https://s.click.aliexpress.com/e/_EwN4dte"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF4747] hover:bg-[#D93E3E] text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
          >
            🛒 Buy on AliExpress
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-sm text-gray-600 dark:text-gray-400">
          <p>Need to reach out? Find me on:</p>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a
              href="https://discord.com/invite/ddvpK997Qu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              🔵 Discord
            </a>
            <a
              href="https://www.reddit.com/user/linuxdroidmaster/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              🔴 Reddit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
