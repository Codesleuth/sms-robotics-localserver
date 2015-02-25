var express = require('express'),
    log = require('./logger');

var app = express();

app.use(log.middleware());
app.use(express.static(__dirname + '/public'));

app.use(function (req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end();
});

app.listen(51000, function () {
  log.info('Local server hosted on port 51000.');
});