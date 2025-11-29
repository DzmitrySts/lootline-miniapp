"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [route, setRoute] = useState("/");

  useEffect(() => {
    // ловим текущий путь из браузера
    setRoute(window.location.pathname);
  }, []);

  return (
    <main style={{ background: "#0c0c0c", color: "white", minHeight: "100vh", padding: "32px" }}>
      {route === "/" && (
        <div style={{ textAlign: "center" }}>
          <img src="/logo.png" width={140} height={140} style={{ marginBottom: 20 }} />
          <h1 style={{ fontSize: 32 }}>LOOTLINE</h1>
          <p style={{ opacity: 0.7, fontSize: 16 }}>
            Цифровые дропы. NFT. Криптоподарки.
            Открывай лутбоксы — получай призы.
          </p>
          <button
            style={{
              marginTop: 40,
              padding: "14px 24px",
              borderRadius: 12,
              background: "#ff4d00",
              border: "none",
              color: "white",
              fontSize: 18,
              cursor: "pointer",
            }}
            onClick={() => alert("Лутбоксы появятся чуть позже 🔥")}
          >
            Открыть лутбокс
          </button>
        </div>
      )}

      {route === "/loot" && <h2 style={{ textAlign: "center" }}>Страница Loot</h2>}
      {route === "/about" && <h2 style={{ textAlign: "center" }}>Страница About</h2>}
    </main>
  );
}
