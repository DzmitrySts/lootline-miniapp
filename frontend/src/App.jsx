import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Loot from "./pages/Loot.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const [route, setRoute] = useState("/");

  useEffect(() => setRoute(window.location.pathname), []);

  const renderPage = () => {
    switch (route) {
      case "/loot": return <Loot />;
      case "/about": return <About />;
      default: return <Home />;
    }
  };

  return (
    <div style={{ background: "#0c0c0c", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <Navbar />
      {renderPage()}
    </div>
  );
}
