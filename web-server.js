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
app.use(require('less-middleware')({
  dest: path.join(__dirname, 'public', 'styles', 'dest'),
  src: path.join(__dirname, 'public', 'styles', 'src'),
  prefix: '/styles/dest',
  force: true, // Always re-compile less files on each request.
  compress: true
})); // needs to be declared before static middleware (in order to get the recompile working)
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// serve index and view partials
app.get('/', function (req, res) {
  var isDebugging = (req.query.debug !== undefined);
  res.render('index', {inProduction: isDebugging});
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});