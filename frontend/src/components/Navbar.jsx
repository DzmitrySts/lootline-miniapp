import React from "react";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, display: "flex", gap: 20, background: "#111" }}>
      <a href="/">Home</a>
      <a href="/loot">Loot</a>
      <a href="/about">About</a>
    </nav>
  );
}
