const express = require('express');
const tweetController = require("../controllers/tweetController.js")

const router = express.Router();

// Route to create a new tweet
router.post('/tweets', tweetController.createTweet);

// Route to fetch all tweets
router.get('/tweets', tweetController.getAllTweets);

module.exports = router;
