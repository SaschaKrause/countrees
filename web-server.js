/**
 * Module dependencies
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// serve index and view partials
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});