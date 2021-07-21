var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './webpages');

app.get('/', function (req, res) {
    res.render('homepage');
});

app.listen(3000)