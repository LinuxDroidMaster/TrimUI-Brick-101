const videos = [
  {
    id: 1,
    title: "TrimUI Brick - First Impressions",
    description: "A quick look at the TrimUI Brick and its features.",
    thumbnail: "https://img.youtube.com/vi/LuRzFccr8rw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LuRzFccr8rw",
  },
  {
    id: 2,
    title: "Installing Emulators on TrimUI Brick",
    description: "Step-by-step guide to running emulators on your device.",
    thumbnail: "https://img.youtube.com/vi/cllfVrNmBK0/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=cllfVrNmBK0",
  },
  {
    id: 3,
    title: "Top 10 Games to Play on TrimUI Brick",
    description: "A list of the best games for this handheld console.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  },
];

export default function VideosPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-black p-2 bg-retroBlue text-white block hover:scale-105 transition-transform"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full border-4 border-black"
            />
            <h2 className="text-lg font-bold mt-2">{video.title}</h2>
            <p className="text-sm">{video.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
