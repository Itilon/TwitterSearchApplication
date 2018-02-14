/* eslint-disable require-jsdoc */

const Twit = require('twit');
const twitterConfig = require('../config/data.config');

const twitterBot = new Twit({
    consumer_key: twitterConfig.consumer_key,
    consumer_secret: twitterConfig.consumer_secret,
    access_token: twitterConfig.access_token,
    access_token_secret: twitterConfig.access_token_secret,
    timeout_ms: 60000,
});

class Data {
    constructor(twitterBot) {
        this.twitterBot = twitterBot;
    }

    search(searchTerm, searchStartDate, searchEndDate, num) {
        return this.twitterBot.get('search/tweets',
        {
            q: `${searchTerm} since:${searchStartDate} until:${searchEndDate}`,
            count: num,
            tweet_mode: 'extended',
        },
        (err, data, response) => {
            console.log(response);
            return data;
        });
    }
}

module.exports = new Data(twitterBot);
