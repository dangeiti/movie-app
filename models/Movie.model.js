let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model('Movie', Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String
  },
  rating: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
}))