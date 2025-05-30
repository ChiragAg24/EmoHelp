const mongoose = require('mongoose');
const feedOrderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  foodType: String,
  petType: String,
  relation: String,
  name: String,
  packageType: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('FeedOrder', feedOrderSchema);