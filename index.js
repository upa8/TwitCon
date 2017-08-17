'use strict'

let Twit = require('twit');

let config = require('./config/config.dev.js'); // Change this to prod

var T = new Twit(config);


/*
T.post('statuses/update', { status: 'I am Twitter Bot !!!' }, function(err, data, response) {
    console.log(data)
})
*/


/*
 T.get('followers/ids',  function (err, data, response) {
 console.log(data)
 })*/


T.get('search/tweets', { q: 'technical ', count: 100 }, function(err, data, response) {
    console.log(data)
})