const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  message: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', logSchema);
