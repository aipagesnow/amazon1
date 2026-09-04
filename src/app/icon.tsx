import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b100e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          fill="none"
          height="26"
          viewBox="0 0 48 48"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
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
      </div>
    ),
    { ...size },
  );
}
