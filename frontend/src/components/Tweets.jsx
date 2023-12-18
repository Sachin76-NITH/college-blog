import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('https://college-blog-alpha.vercel.app/gettweets');
        if (response.status === 200) {
          setTweets(response.data);
        } else {
          console.error('Failed to fetch tweets.');
        }
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  const handleTweetChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTweetSubmit = async () => {
    try {
      const response = await axios.post('https://college-blog-alpha.vercel.app/tweets', {
        text: tweetText,
        imageBase64: imageBase64,
      });

      if (response.status === 201) {
        console.log('Tweet submitted successfully!');
        setTweetText('');
        setImageBase64('');

        // Fetch updated tweets after submitting
        const tweetsResponse = await axios.get('https://college-blog-alpha.vercel.app/gettweets');
        if (tweetsResponse.status === 200) {
          const updatedTweets = tweetsResponse.data;
          console.log('Fetched Tweets:', updatedTweets);
          setTweets(updatedTweets);
        }
      } else {
        console.error('Failed to submit tweet.');
      }
    } catch (error) {
      console.log("yaha");
      console.error('Error submitting tweet:', error);
    }
  };
  const storedToken = localStorage.getItem('token');
  if(storedToken){
  return (
    <div className="tweets-container">
      <div className="tweet-input-container">
        <textarea
          placeholder="What's happening?"
          value={tweetText}
          onChange={handleTweetChange}
          className="tweet-input"
        />

        {/* Input for image selection */}
        <input type="file" onChange={handleImageChange} className='imagefile' />

        <button onClick={handleTweetSubmit} className="tweet-button">
          Tweet
        </button>
      </div>

      {/* Display all tweets */}
      <div className="tweet-list">
        <h2>All Tweets</h2>
        <ul>
          {tweets.map((tweet) => (
            <li className="tt" key={tweet.id}>
              <div className='tweetext'> {tweet.text}</div>
             

              {/* Display the image if available */}
              {tweet.image && tweet.image.data && (
                <div>
                 <img
  src={tweet.image && tweet.image.data && `data:${tweet.image.contentType};base64,${arrayBufferToBase64(tweet.image.data.data)}`}
  alt="Tweet"
  style={{ maxWidth: '100%' }}
  onError={(e) => console.error('Error loading image:', e, e.nativeEvent)}
/>

                </div>
              )}

              {/* If the image is null or data is not available, display a message or placeholder */}
              {/* {(!tweet.image || !tweet.image.data) && <div>No image available</div>} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Function to convert ArrayBuffer to base64
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}}

export default Tweets;
