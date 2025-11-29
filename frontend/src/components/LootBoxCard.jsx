import React from "react";

export default function LootBoxCard({ lootbox, onOpen }) {
  return (
    <div style={{ padding: 20, border: "1px solid #444", borderRadius: 12, margin: 10 }}>
      <h3>{lootbox.name}</h3>
      <p>Prize: {lootbox.prize}</p>
      <p>Rarity: {lootbox.rarity}</p>
      <button onClick={() => onOpen(lootbox)}>Open</button>
    </div>
  );
}

