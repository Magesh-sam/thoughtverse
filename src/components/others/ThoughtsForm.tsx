import { Thought } from "@/lib/types";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { getRelativeTime } from "@/lib/utils";

interface ThoughtFormProps {
  handleSubmit: (thought: Thought) => void;
}



function ThoughtsForm({ handleSubmit }: ThoughtFormProps) {
  const [thought, setThought] = useState("");
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleThoughtSubmit();
    }
  };

  const handleThoughtSubmit = () => {
    if (!thought.trim()) {
      setError(true);
      setErrorMsg("Thought cannot be empty");
      return;
    }

    if (thought.length > 500) {
      setError(true);
      setErrorMsg("Thought must be less than 500 characters");
      return;
    }

    try {
      const newThought = {
        id: crypto.randomUUID(),
        content: thought,
        timestamp: getRelativeTime(new Date().getTime())
      };
      handleSubmit(newThought);
      setThought("");
      setError(false);
      setErrorMsg("");
    } catch (err) {
      setError(true);
      setErrorMsg("Failed to post thought. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-2xl grid gap-3 mt-5">
      <Textarea
        value={thought}
        placeholder="What's on your mind?"
        rows={4}
        className="border border-primary/80 w-full"
        onChange={(e) => setThought(e.target.value)}
        onFocus={() => setError(false)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button
        onClick={handleThoughtSubmit}
        className="w-full sm:w-auto justify-self-end"
      >
        Post
      </Button>
      {isError && (
        <p className="text-red-500 text-sm mt-1">{errorMsg}</p>
      )}
    </div>
  );
}

export default ThoughtsForm;
