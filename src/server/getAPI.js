const dotenv = require('dotenv');
dotenv.config();

const aylien = require("aylien_textapi");

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

console.log(`Your API key is ${process.env.API_KEY}`);

function getAPI(req, res, next) {
    console.log(req)
    // textapi.entities({
    // textapi.classify({
    textapi.sentiment({
        url: req.body.url
      }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response)
        } else {
            console.log(error)
        }
    });
}

module.exports = getAPI 