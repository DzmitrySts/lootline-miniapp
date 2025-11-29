"use client";
import { useEffect, useState } from "react";

export default function CatchAll() {
  const [route, setRoute] = useState("/");

  useEffect(() => {
    setRoute(window.location.pathname);
  }, []);

  const renderContent = () => {
    switch (route) {
      case "/":
        return (
          <div style={{ textAlign: "center" }}>
            <img src="/logo.png" width={140} height={140} style={{ marginBottom: 20 }} />
            <h1 style={{ fontSize: 32 }}>LOOTLINE</h1>
            <p style={{ opacity: 0.7, fontSize: 16 }}>
              Цифровые дропы. NFT. Криптоподарки. Открывай лутбоксы — получай призы.
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
        );
      case "/loot":
        return <h1 style={{ textAlign: "center", marginTop: 50 }}>Страница Loot</h1>;
      case "/about":
        return <h1 style={{ textAlign: "center", marginTop: 50 }}>Страница About</h1>;
      default:
        return <h1 style={{ textAlign: "center", marginTop: 50 }}>Страница не найдена</h1>;
    }
  };

  return (
    <main style={{ background: "#0c0c0c", color: "white", minHeight: "100vh", padding: "32px", fontFamily: "sans-serif" }}>
      {renderContent()}
    </main>
  );
}
