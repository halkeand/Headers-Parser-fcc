// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.get("/", (req, res) => {
  const userAgent = req.headers['user-agent']
  const ip = req.headers['x-forwarded-for'].split(',')[0]
  const language = req.headers['accept-language'].split(',')[0]
  res.json({userAgent, ip, language})
  res.end()
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
