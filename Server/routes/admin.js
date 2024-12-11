// // routes/admin.js
// const express = require("express");
// const router = express.Router();
// const { adminEmail, checkPassword } = require("../constants/adminCredentials");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = process.env.JWT_SECRET;

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (email !== adminEmail) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   const isPasswordValid = await checkPassword(password);

//   if (!isPasswordValid) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

//   res.status(200).json({ token });
// });

// module.exports = router;
// // routes/admin.js
const express = require('express');
const router = express.Router();
const { adminEmail, checkPassword } = require('../constants/adminCredentials');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email !== adminEmail) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const isPasswordValid = await checkPassword(password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
});

router.get('/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.email !== adminEmail) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    res.status(200).json({ message: 'Token is valid' });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

router.post("/logout", (req, res) => {
  // This route can be a simple placeholder
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;