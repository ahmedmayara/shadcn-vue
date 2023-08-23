import { twMerge } from "tailwind-merge";

export function cn(...args: any[]) {
  return twMerge(...args);
}
