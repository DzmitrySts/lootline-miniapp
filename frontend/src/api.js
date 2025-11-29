const BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function login(email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function getLootboxes() {
  const res = await fetch(`${BASE}/api/lootboxes`);
  return res.json();
}

export async function openLootbox() {
  const res = await fetch(`${BASE}/api/lootboxes/open`, { method: "POST" });
  return res.json();
}
