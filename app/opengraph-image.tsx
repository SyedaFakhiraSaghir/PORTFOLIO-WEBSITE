import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/resume";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Portfolio`;
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050816 0%, #0f172a 50%, #1e1b4b 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#38bdf8",
            marginBottom: 16,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            marginTop: 20,
            maxWidth: 800,
          }}
        >
          {siteConfig.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
