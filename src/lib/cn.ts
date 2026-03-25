import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs: Array<string | undefined | null | false>) {
  return twMerge(clsx(inputs));
}

