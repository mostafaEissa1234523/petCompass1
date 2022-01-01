const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const adsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  petOwnerId: {
    type: String,
    required: true,
  },
  healthCondition: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  
});
const Advertisement = mongoose.model('Advertisement',adsSchema);
module.exports = Advertisement;
