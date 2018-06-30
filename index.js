var express = require('express');
var app = express();
var path = require('path');

var port = (process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
    res.render('index.html');
});

// use port 3000 unless there exists a preconfigured port
app.listen(port, () => console.log(`Listening on port ${port}`));
