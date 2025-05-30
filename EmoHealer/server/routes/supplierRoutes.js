const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');
const auth = require('../utils/authMiddleware');

router.post('/', auth, async (req, res) => {
  const profile = new Supplier({ ...req.body, user: req.user.id });
  await profile.save();
  res.json(profile);
});

router.get('/', async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
});

module.exports = router;