export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* Título Principal */}
      <h1 className="text-4xl mb-4 text-retroPurple dark:text-retroYellow">
        TrimUI Brick Hub
      </h1>
      <p className="text-lg text-retroYellow dark:text-retroBlue">
        Your source for the best tutorials and videos!
      </p>

      {/* Botón de inicio */}
      <a href="/guides" className="retro-button mt-6">
        Start
      </a>

      {/* Sección de Apoyo */}
      <h2 className="text-retroBlue text-2xl md:text-3xl mt-10 mb-4 font-bold">
        Support the Project
      </h2>
      <p className="text-black dark:text-white max-w-2xl">
        If you enjoy this project, you can support me by subscribing to my YouTube channel or donating on Ko-fi!
      </p>

      {/* Botones de apoyo (YouTube y Ko-fi) */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <a
          href="https://www.youtube.com/@LinuxDroidMaster"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 border-4 border-black shadow-lg w-64 text-center"
        >
          ▶️ Subscribe on YouTube
        </a>
        <a
          href="https://ko-fi.com/droidmaster"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#29abe0] hover:bg-[#1f92c0] text-white font-bold py-2 px-6 border-4 border-black shadow-lg w-64 text-center"
        >
          ☕ Donate on Ko-fi
        </a>
      </div>

      {/* Sección de Contacto (más pequeña) */}
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
  );
}
