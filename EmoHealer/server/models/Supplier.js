const mongoose = require('mongoose');
const supplierSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  petName: String,
  petType: String,
  age: Number,
  foodOptions: [String],
});
module.exports = mongoose.model('Supplier', supplierSchema);