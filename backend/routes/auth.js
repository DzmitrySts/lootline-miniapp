const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createUser, findUserByEmail } = require("../models/user");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "supersecret";

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await createUser(email, password);
  const token = jwt.sign({ id: user.id }, SECRET);
  res.json({ token, user });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) return res.status(401).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user.id }, SECRET);
  res.json({ token, user: { id: user.id, email: user.email } });
});

module.exports = router;
