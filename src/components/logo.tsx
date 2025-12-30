import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-8", className)}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="4Cloud Logo"
    >
      <path
        d="M48.79,21.32A16,16,0,0,0,34.2,8.19a12,12,0,0,0-23.6,5.12,10,10,0,0,0-1,19.95H47.48a12.5,12.5,0,0,0,1.31-25Z"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 20 L30 20 L30 26 L36 26 M30 26 L30 32"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
