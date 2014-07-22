
// Requires & Libraries
var express = require('express'),
	app = express(),
	ejs = require('ejs'),
	bodyParser = require('body-parser');

// State and Setup
	var articles = [{headline: 'foobar'}]; 

	app.use(bodyParser.urlencoded()); 

	app.set('view engine', 'ejs'); 

// Article Views 
	app.get('/', function(req, res) {
		res.render('site/homepage');
	});

	app.get('/articles', function(req, res) {
		res.render('articles/index', {articles: articles});
	});

	app.get('/articles/new', function(req, res) {
		res.render('articles/new');
	});

	app.get('/articles/:id', function(req, res) {
		var index = req.params.id;
		var article = articles[index];
		res.render("articles/summary", {article: article})
	})

	app.post('/articles', function(req, res) {
		articles.push(req.body.articles);
		console.log(articles.push(req.body.articles));
		res.redirect('/articles'); 
		// res.send('thanks!');
	});


// Site Navigation 
	app.get('/site/homepage', function(req, res) {
		res.render('site/homepage');
	});

	app.get('/site/about', function(req, res) {
		res.render('site/about');
	});

	app.get('/site/contact', function(req, res) {
		res.render('site/contact');
	});

// Server listener 
	app.listen(3000, function() {
		console.log("Server started on LocalHost 3000"); 
	});

