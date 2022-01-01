const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const annSchema = new Schema({
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
});
const Announcement = mongoose.model("Announcement", annSchema);
module.exports = Announcement;
