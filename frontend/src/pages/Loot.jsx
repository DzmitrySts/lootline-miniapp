import React, { useEffect, useState } from "react";
import { getLootboxes, openLootbox } from "../api.js";
import LootBoxCard from "../components/LootBoxCard.jsx";

export default function Loot() {
  const [lootboxes, setLootboxes] = useState([]);
  const [opened, setOpened] = useState(null);

  useEffect(() => {
    getLootboxes().then(setLootboxes);
  }, []);

  const handleOpen = async () => {
    const prize = await openLootbox();
    setOpened(prize);
    alert(`You got: ${prize.prize}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Loot Boxes</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {lootboxes.map((box) => (
          <LootBoxCard key={box.id} lootbox={box} onOpen={handleOpen} />
        ))}
      </div>
      {opened && <p>Last prize: {opened.prize}</p>}
    </div>
  );
}
