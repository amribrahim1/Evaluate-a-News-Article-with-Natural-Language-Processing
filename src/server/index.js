const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const getAPI = require('./getAPI.js');

const app = express();

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/article', getAPI)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
