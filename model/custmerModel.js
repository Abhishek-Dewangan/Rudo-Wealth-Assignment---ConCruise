const mongoose = require('mongoose');

const custmerSchema = mongoose.Schema({
  name: String,
  currentLocation: String,
  numberOfRides: String,
  averageRating: Number,
  driver: String,
});

const CustmerModel = mongoose.model('custmer', custmerSchema);

module.exports = { CustmerModel };
