import { ThoughtCardProps } from "@/lib/types";
import { Bookmark } from "lucide-react";

export default function ThoughtCard({ thought }: ThoughtCardProps) {
  const handleSave = () => {
    alert("Saved!");
  };

  return (
    <div className="p-6 bg-black/40 text-white/80 rounded-lg shadow-md relative">
      <button onClick={handleSave} className="absolute top-4 right-4">
        <Bookmark
          color="oklch(0.795 0.184 86.047)"
          className="w-5 h-5    hover:fill-primary"
        />
      </button>
      <p className="leading-relaxed">{thought.content}</p>
      <div className="mt-4 text-xs text-gray-400">{thought.timestamp}</div>
    </div>
  );
}
