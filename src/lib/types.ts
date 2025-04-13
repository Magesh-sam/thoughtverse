export interface Thought {
    id: string;
    content: string;
    timestamp: string;
}

export interface ThoughtCardProps {
    thought: Thought;
}
