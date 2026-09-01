export function LockMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 18V14.5C8 8.7 12.5 4 18 4s10 4.7 10 10.5V18"
        stroke="#d4b43a"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <rect x="4" y="18" width="28" height="22" stroke="#d4b43a" strokeWidth="3" />
      <circle cx="18" cy="28" r="2.4" fill="#d4b43a" />
      <path d="M18 30.4V36" stroke="#d4b43a" strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}

export function LockPoster() {
  return (
    <svg viewBox="0 0 200 260" fill="none" aria-hidden="true">
      <path
        d="M58 92V70c0-23 18-42 42-42s42 19 42 42v22"
        stroke="#d4b43a"
        strokeWidth="10"
        strokeLinecap="square"
      />
      <rect x="40" y="92" width="120" height="128" stroke="#d4b43a" strokeWidth="10" />
      <circle cx="100" cy="148" r="10" fill="#d4b43a" />
      <path d="M100 158v32" stroke="#d4b43a" strokeWidth="10" strokeLinecap="square" />
    </svg>
  );
}
