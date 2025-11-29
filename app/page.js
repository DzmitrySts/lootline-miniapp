export default function Home() {
  return (
    <main style={{
      background: "#0c0c0c",
      color: "white",
      minHeight: "100vh",
      padding: "32px",
      fontFamily: "sans-serif"
    }}>
      <div style={{ textAlign: "center" }}>
        <img src="/logo.png" width="140" height="140" style={{ marginBottom: 20 }} />

        <h1 style={{ fontSize: 32, marginBottom: 10 }}>
          LOOTLINE
        </h1>

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
            cursor: "pointer"
          }}
          onClick={() => alert("Лутбоксы появятся чуть позже 🔥")}
        >
          Открыть лутбокс
        </button>
      </div>
    </main>
  );
}
