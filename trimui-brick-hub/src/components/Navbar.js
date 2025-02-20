import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link href="/">TrimUI Brick Hub</Link>
        </h1>
        <ul className="flex gap-4">
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
      </nav>
    </header>
  );
}
