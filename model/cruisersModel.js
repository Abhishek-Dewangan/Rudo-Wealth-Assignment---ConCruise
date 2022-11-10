const mongoose = require('mongoose');

const cruiserSchema = mongoose.Schema({
  name: String,
  number: Number,
  email: String,
});

const CruiserModel = mongoose.model('cruiser', cruiserSchema);

module.exports = {CruiserModel};
