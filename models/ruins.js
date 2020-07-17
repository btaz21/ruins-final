const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ruinSchema = new mongoose.Schema({
  name: { type: String, default: "Undesignated Ruin" },
  city: { type: String, default: "Undesignated City" },
  image: { type: Array, required: true },
  description: { type: String, required: true, default: "Description not provided" },
  location: { type: Object, required: true },
  likes: { type: Number, default: 0 },
  rating: Array,
  comments: Array
})

const Ruin = mongoose.model('Ruin', ruinSchema)
module.exports = Ruin;
