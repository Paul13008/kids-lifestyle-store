"use client";

// Subtle film grain overlay to add texture.
export default function Noise({ opacity = 0.08, className }: { opacity?: number; className?: string }) {
  // Base64 tiny noise texture (SVG-based)
  const data =
    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.6\"/></svg>')";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      style={{ backgroundImage: data, opacity, mixBlendMode: "overlay" }}
    />
  );
}