const express = require('express');
const router = express.Router();
const FeedOrder = require('../models/FeedOrder');
const auth = require('../utils/authMiddleware');

router.post('/', auth, async (req, res) => {
  const order = new FeedOrder({ ...req.body, buyer: req.user.id });
  await order.save();
  res.json(order);
});

router.get('/', auth, async (req, res) => {
  const orders = await FeedOrder.find({ buyer: req.user.id });
  res.json(orders);
});

module.exports = router;