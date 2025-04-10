"use client";

import { useRef, useState } from "react";
import ThoughtCard from "@/components/others/ThoughtCard";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// Sample thoughts data
const initialThoughts = [
  {
    id: "1",
    content:
      "Sometimes I wonder if the stars look down at us and feel the same sense of wonder we feel looking up at them.",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    content:
      "The most profound moments in life often come when we're alone with our thoughts, away from the noise of the world.",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    content:
      "I've found that true growth happens in the spaces between words, in the silence that follows a meaningful conversation.",
    timestamp: "2 days ago",
  },
  {
    id: "4",
    content:
      "There's something beautiful about impermanence - it makes each moment more precious, knowing it won't last forever.",
    timestamp: "3 days ago",
  },
];

export default function ThoughtFeed() {
  const [thoughts, setThoughts] = useState(initialThoughts);
  const textRef = useRef<HTMLTextAreaElement>(null);

  return (
    <main className="min-h-screen bg-black/90 text-white grid place-items-center px-4">
      <div className="w-full max-w-2xl grid gap-3 mt-5">
        <Textarea
          placeholder="What's on your mind?"
          rows={4}
          className="border border-primary/80 w-full"
          ref={textRef}
        />
        <Button
          onClick={() => {
            const newThought = {
              id: Date.now().toString(),
              content: textRef?.current?.value || "",
              timestamp: "Just now",
            };
            setThoughts([newThought, ...thoughts]);
            textRef.current!.value = "";
          }}
          className="w-full sm:w-auto justify-self-end"
        >
          Post
        </Button>
      </div>
      <div className="w-full max-w-2xl grid gap-6 mt-5">
        {thoughts.map((thought) => (
          <ThoughtCard key={thought.id} thought={thought} />
        ))}
      </div>
    </main>
  );
}
