import { ImageResponse } from "next/og";

export const alt = "Lock Desk — UK bike lock comparisons";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b100e",
          color: "#f3eee3",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          <svg
            fill="none"
            height="40"
            viewBox="0 0 48 48"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" fill="#0b100e" />
            <g
              fill="none"
              stroke="#d4b43a"
              strokeLinecap="square"
              strokeWidth="3"
            >
              <path d="M14 20v-3.5C14 11.7 18.5 7 24 7s10 4.7 10 9.5V20" />
              <rect height="21" width="28" x="10" y="20" />
              <path d="M24 32.4V38" />
            </g>
            <circle cx="24" cy="30" fill="#d4b43a" r="2.3" />
          </svg>
          <span style={{ color: "#d4b43a" }}>LOCK DESK</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 58,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            UK bike lock comparisons.
          </div>
          <div style={{ fontSize: 28, color: "#c9c2b3", maxWidth: 820 }}>
            Sold Secure grades, insurance, and which lock you will actually carry.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
