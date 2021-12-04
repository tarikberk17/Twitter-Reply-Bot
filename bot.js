var Twit = require('twit');
var quotes = require('./quotes.json');
var config = require('./config');
var T = new Twit(config);
require('dotenv').config();
console.log('The bot is starting Beep boop...');

var params = {
    q: '@trkbrkgrsll',
    count: 1
}

T.get('search/tweets', params, gotData);

let replyTweetId = 0;

function gotData(err, data, response) {
    replyTweetId = data.search_metadata.max_id;
    console.log(data);
    //replyTweet();
}
replyTweet();

function replyTweet() {
    //var quote = quotes[Math.floor(Math.random() * quotes.length)]
    var tweet = {
        status: 'çok mantıklı',
        max_id: 1466681449625665500

    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log('Something went wrong!');
        } else {
            console.log('Tweeted successfully!');
        }
    }
}