"use client";

import { useState } from "react";
import ThoughtCard from "@/components/others/ThoughtCard";
import ThoughtsForm from "./ThoughtsForm";
import { Thought } from "@/lib/types";
import { getRelativeTime } from "@/lib/utils";

// Sample thoughts data
const initialThoughts = [
  {
    id: "1",
    content:
      "Sometimes I wonder if the stars look down at us and feel the same sense of wonder we feel looking up at them.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: "2",
    content:
      "The most profound moments in life often come when we're alone with our thoughts, away from the noise of the world.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    id: "3",
    content:
      "I've found that true growth happens in the spaces between words, in the silence that follows a meaningful conversation.",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    id: "4",
    content:
      "There's something beautiful about impermanence - it makes each moment more precious, knowing it won't last forever.",
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(), // 3 days ago
  },
].reverse(); // Store in reverse order initially

export default function ThoughtFeed() {
  const [thoughts, setThoughts] = useState(initialThoughts);

  const handleSubmit = (thought: Thought) => {
    setThoughts([thought,...thoughts])
  };

  return (
    <main className="min-h-screen bg-black/90 text-white grid place-items-center px-4">
      <ThoughtsForm handleSubmit={handleSubmit} />
      <div className="w-full max-w-2xl grid gap-6 mt-5">
        {thoughts.map((thought) => (
          <ThoughtCard
            key={thought.id}
            thought={{
              ...thought,
              timestamp: getRelativeTime()
            }}
          />
        ))}
      </div>
    </main>
  );
}
