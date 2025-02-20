export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center text-sm">
      <p>TrimUI Brick Hub</p>
      <p className="mt-2 flex justify-center items-center gap-2">
        With
        <img
          src="/images/pixel_heart.svg"
          alt="Pixel Heart"
          className="w-5 h-5"
        />
        by{" "}
        <a
          href="https://www.youtube.com/@LinuxDroidMaster"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          DroidMaster
        </a>
      </p>
    </footer>
  );
}
