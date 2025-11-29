const express = require("express");
const router = express.Router();

// Примеры лутбоксов
const lootboxes = [
  { id: 1, name: "Bronze Box", prize: "10 coins", rarity: "common" },
  { id: 2, name: "Silver Box", prize: "50 coins", rarity: "rare" },
  { id: 3, name: "Gold Box", prize: "NFT", rarity: "epic" }
];

router.get("/", (req, res) => {
  res.json(lootboxes);
});

router.post("/open", (req, res) => {
  const random = lootboxes[Math.floor(Math.random() * lootboxes.length)];
  res.json(random);
});

module.exports = router;
