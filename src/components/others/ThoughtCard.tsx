interface Thought {
  id: string;
  content: string;
  timestamp: string;
}

interface ThoughtCardProps {
  thought: Thought;
}

export default function ThoughtCard({ thought }: ThoughtCardProps) {
  return (
    <div className="p-6 bg-black/80 text-white/80 rounded-lg shadow-md ">
      <p className=" leading-relaxed">{thought.content}</p>
      <div className="mt-4 text-xs text-gray-400">{thought.timestamp}</div>
    </div>
  );
}
