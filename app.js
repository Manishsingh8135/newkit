const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 4010;

mongoose.connect('mongodb://localhost/newapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view-engine', 'ejs');
app.use(express.static('assets'));

app.get('/about', function(req, res) {
	res.render('about.ejs');
});

app.get('/blog', function(req, res) {
	res.render('blog1.ejs');
});

app.get('/landing', function(req, res) {
	res.render('landing.ejs');
});

app.get('/blogpost', function(req, res) {
	res.render('blog-post.ejs');
});

app.listen(port, function() {
	console.log('Congratulations you are connected now');
});
