var express = require('express');
var app = express();

var PORT = 3000;

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/about', function(req,res){
	res.render('aboutMe');
});

app.get('/skill', function(req,res){
	res.render('skill');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.listen(app.get('port'), function(){
	console.log("listen to 3000")
});