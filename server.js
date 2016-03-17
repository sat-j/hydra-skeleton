var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', './server/views');
app.set('view engine', 'jade');

app.use(stylus.middleware ({
    src: './public',
    compile: compile
}));
app.use(express.static('./public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/'+ req.params.partialPath);
});
app.get('*', function(req, res) {
    res.render('index');
});

var port = 50000;
app.listen(port);
console.log('listening in 50000');
