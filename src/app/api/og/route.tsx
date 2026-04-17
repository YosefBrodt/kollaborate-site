import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#FAF9F6",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Forest green accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#2D4A3E",
          }}
        />

        <div
          style={{
            fontSize: "64px",
            fontWeight: 500,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontFamily: "serif",
          }}
        >
          Kollaborate
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#5C5C5C",
            marginTop: "24px",
            lineHeight: 1.4,
            maxWidth: "800px",
            fontFamily: "sans-serif",
          }}
        >
          Done-for-you growth for local service businesses.
        </div>

        <div
          style={{
            fontSize: "18px",
            color: "#5C5C5C",
            marginTop: "16px",
            fontFamily: "sans-serif",
          }}
        >
          kollaborate.ca
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
