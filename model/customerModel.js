const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  currentLocation: { type: String, required: true },
  numberOfRides: { type: Number, required: true },
  averageRating: { type: Number, required: true },
  driver: { type: String, required: true },
});

const CustomerModel = mongoose.model('custmer', customerSchema);

module.exports = { CustomerModel };
