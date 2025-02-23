import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        />
      </head>
      <body className="bg-background text-foreground font-retro transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
        <Analytics /> 
      </body>
    </html>
  );
}
