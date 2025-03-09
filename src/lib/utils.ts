import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function resetScroll() {
  if (typeof window !== 'undefined')
      window.scrollTo({ top: 0, behavior: 'smooth' })
}