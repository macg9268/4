import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-8", className)}
      viewBox="0 0 165 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="4Cloud Logo"
    >
        <path d="M62.593 42.1333H16.3263V35.9467H56.4063V8.37333H62.593V42.1333Z" fill="currentColor" className="text-primary"/>
        <path d="M107.649 42.1333C107.649 20.6389 90.2582 2.37999 66.8449 1.2V8.37333C86.8093 9.47778 101.436 24.8489 101.436 44.1756C101.436 47.9511 100.817 51.6356 99.6763 55.0489H105.863C107.003 51.6356 107.649 47.9511 107.649 42.1333Z" fill="currentColor" className="text-primary"/>
        <path d="M21.8033 42.0267C21.8033 22.7 38.2166 7.32889 58.181 6.23334V0.0466614C34.7677 1.22889 17.3773 19.6733 17.3773 42.0267C17.3773 49.44 19.3417 56.3956 22.8433 62.4244H29.0299C25.4373 56.3956 21.8033 51.6111 21.8033 42.0267Z" fill="currentColor" className="text-primary"/>
    </svg>
  );
}