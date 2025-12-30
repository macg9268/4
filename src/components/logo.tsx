import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-8", className)}
      viewBox="0 0 52 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="4Cloud Logo"
    >
      <path
        d="M37.82,18.82A13.91,13.91,0,0,0,25.4,7.12a10.5,10.5,0,0,0-20.65,4.48,8.75,8.75,0,0,0-.87,17.5H41.64a10.94,10.94,0,0,0,1.15-21.88Z"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 24 L39 24 M36 21 L36 27"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
