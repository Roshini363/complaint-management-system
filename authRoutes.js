// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Dummy in-memory user database
let users = [];

// Register User
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }
  users.push({ name, email, password });
  res.json({ message: "User registered successfully" });
});

// Login User
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
});

module.exports = router;
