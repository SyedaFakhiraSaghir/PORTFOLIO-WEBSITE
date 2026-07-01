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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050816",
          borderRadius: 8,
          fontSize: 18,
          fontWeight: 700,
          color: "#38bdf8",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
