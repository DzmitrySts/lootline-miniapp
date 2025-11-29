const pool = require("../db");
const bcrypt = require("bcrypt");

async function createUser(email, password) {
  const hash = await bcrypt.hash(password, 10);
  const res = await pool.query("INSERT INTO users(email, password_hash) VALUES($1, $2) RETURNING id, email", [email, hash]);
  return res.rows[0];
}

async function findUserByEmail(email) {
  const res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return res.rows[0];
}

module.exports = { createUser, findUserByEmail };
