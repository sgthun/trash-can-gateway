var express = require('express');
var http = require('http');
var app = express();

app.get('/status', function(req, res) {
    return res.send('Server A\n');
});

http.createServer(app).listen(9090, function() {
    console.log('Listening on port 9090');
});
