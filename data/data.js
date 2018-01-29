const Twit = require('twit');
const twitterConfig = require('../config/data.config')

const twitterBot = new Twit({
    consumer_key:         twitterConfig.consumer_key,
    consumer_secret:      twitterConfig.consumer_secret,
    access_token:         twitterConfig.access_token,
    access_token_secret:  twitterConfig.access_token_secret,
    timeout_ms:           60000,
});

module.exports = twitterBot;