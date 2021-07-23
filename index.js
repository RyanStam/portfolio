var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './webpages');

app.get('/', function (req, res) {
    res.redirect('/homepage');
});
app.get('/homepage', function (req, res) {
    res.render('homepage');
});
app.get('/about-me', function (req, res) {
    res.render('aboutMe');
});
app.get('/projects', function (req, res) {
    res.render('projects');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});


app.listen(3000)