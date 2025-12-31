export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="40"
      height="40"
      aria-label="4Cloud logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: 'rgb(236, 72, 153)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(249, 115, 22)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M 52.7 30.5 C 52.1 20.2 43.6 12 33.1 12 C 25.1 12 18.2 16.9 15.1 23.9 C 14.5 23.7 13.9 23.6 13.3 23.6 C 9.3 23.6 6 26.9 6 31 C 6 35.1 9.3 38.4 13.3 38.4 L 52 38.4 C 57 38.4 61 34.4 61 29.4 C 61 25.3 57.5 21.9 53.4 21.5"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}