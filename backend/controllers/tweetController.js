// tweetController.js

const Tweet=require("../models/tweetmodel")
// Controller to handle creating a new tweet

const determineImageFileType = (imageBase64) => {
  // Implement your logic to determine the file type (e.g., using a library)
  // For simplicity, you can assume that the imageBase64 contains the format (e.g., "data:image/png;base64,")
  const formatMatch = imageBase64.match(/^data:image\/([a-zA-Z+]+);base64,(.+)$/);
  return formatMatch ? { contentType: `image/${formatMatch[1]}`, data: formatMatch[2] } : null;
};




// Controller to handle creating a new tweet
exports.createTweet = async (req, res) => {
  try {
    const { text, imageBase64 } = req.body;

    // Validate that the 'text' field is present and not empty
    if (!text || typeof text !== 'string' || text.trim() === '') {
      return res.status(400).json({ error: 'Text field is required and must not be empty.' });
    }

    // Validate and save the image
    let image = null;
    if (imageBase64) {
      const base64Regex = /^data:image\/[a-zA-Z+]+;base64,/;
      if (!base64Regex.test(imageBase64)) {
        return res.status(400).json({ error: 'Invalid base64-encoded image format.' });
      }

      const [, contentType, data] = imageBase64.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);

      // Save the base64-encoded image as an object with content type and data
      image = {
        contentType,
        data: Buffer.from(data, 'base64'), // Convert base64 to Buffer
      };
    }

    const newTweet = new Tweet({
      text,
      image,
    });

    const savedTweet = await newTweet.save();

    res.status(201).json(savedTweet);
  } catch (error) {
    console.error('Error creating tweet:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Controller to handle fetching all tweets
exports.getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find().sort({ createdAt: -1 });

    // Map tweets to include both text and base64-encoded image
    const formattedTweets = tweets.map((tweet) => {
      return {
        id: tweet._id,
        text: tweet.text,
        // Include the base64-encoded image directly
        image: tweet.image,
        createdAt: tweet.createdAt,
      };
    });

    res.status(200).json(formattedTweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};