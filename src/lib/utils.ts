import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRelativeTime(timestamp?: number) {
  const now = new Date().getTime();
  const targetTime = timestamp || now;
  const diffInSeconds = Math.floor((now - targetTime) / 1000);
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days === 0) {
    if (hours === 0) {
      if (minutes === 0) {
        return "just now";
      }
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}