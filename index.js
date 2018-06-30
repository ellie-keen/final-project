var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
    res.render('index.html');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;
app.listen(port, () => console.log('Listening on port 3000!'));
