import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <main className="min-h-screen bg-black/90 text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl px-6 py-4 flex justify-between items-center border-b border-primary">
        <h1 className="text-2xl font-bold text-primary tracking-tight">
          Thoughts-Verse
        </h1>
        <Button variant="default" className="cursor-pointer">
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-24 px-4 w-full max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Share Your <span className="text-primary">Thoughts</span>.
          <br /> Read Others'.
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Thoughts-Verse is a minimalist space for honest expression and quiet
          discovery. No likes. No clout. Just pure thoughts.
        </p>
        <Button variant={"link"}>
          <Link to="/thoughts">Get Started</Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="mt-32 px-6 w-full max-w-5xl grid gap-16 md:grid-cols-3 text-center">
        <div className="space-y-2  border-primary  border-l-2 p-3 ">
          <h3 className="text-xl font-semibold">Raw & Real</h3>
          <p className="text-gray-400">
            Post what's on your mind—no filters, no followers, no pressure.
          </p>
        </div>
        <div className="space-y-2  border-primary  border-l-2 p-3 ">
          <h3 className="text-xl font-semibold">Mood Reactions</h3>
          <p className="text-gray-400">
            React with vibes, not metrics. Emotions over numbers.
          </p>
        </div>
        <div className="space-y-2  border-primary  border-x-2 p-3 ">
          <h3 className="text-xl font-semibold">Discover Minds</h3>
          <p className="text-gray-400">
            Scroll through a stream of consciousness. Find ideas worth pausing
            for.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 mb-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Toughts-Verse. Built for thoughts.
      </footer>
    </main>
  );
}
