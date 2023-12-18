// tweetModel.js
const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    contentType: {
      type: String,
    },
    data: {
      type: Buffer,
    },},
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
