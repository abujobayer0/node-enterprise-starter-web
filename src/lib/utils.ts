import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const copyToClipboard = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      navigator.clipboard.writeText(text).then(resolve).catch(reject);
    } catch (err) {
      reject(err);
    }
  });
};
