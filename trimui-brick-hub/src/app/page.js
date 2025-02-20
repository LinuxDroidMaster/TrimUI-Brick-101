export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl mb-4 text-retroPurple dark:text-retroYellow">
        TrimUI Brick Hub
      </h1>
      <p className="text-lg text-retroYellow dark:text-retroBlue">
        Your source for the best tutorials and videos!
      </p>
      <button className="retro-button mt-6">Start</button>
    </div>
  );
}
