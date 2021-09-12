const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  Humidity: {
    type: String,
    // required: true,
  },
  Temprature: {
    type: String,
    // required: true,
  },
  Smoke: {
    type: String,
    // required: true,
  },
  Fire: {
    type: String,
    // required: true,
  },
  Sound: {
    type: String,
    // required: true,
  },
  Inches: {
    type: String,
    // required: true,
  },
  Cm: {
    type: String,
    // required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('nodedatas', DataSchema);
