const mongoose = require('mongoose');
const validator = require('validator');

const cruiserSchema = mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  email: {
    type: String,
    required: true,
  },
});

const CruiserModel = mongoose.model('cruiser', cruiserSchema);

module.exports = { CruiserModel };
