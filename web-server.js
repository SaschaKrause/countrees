/**
 * Module dependencies
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = module.exports = express();
var Firebase = require('firebase');
var myRootRef = new Firebase('https://myprojectname.firebaseIO-demo.com/');
myRootRef.set("hello world!");

console.log("NODE_ENV: " + process.env.NODE_ENV);

// HOW TO SETUP SSL IN NODE: http://stackoverflow.com/questions/11567217/unable-to-setup-https-in-express-js

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3004);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());


if (process.env.NODE_ENV !== "staging" && process.env.NODE_ENV !== "production") {
  // only use the *.less middleware when in developement
  console.log("using less middleware");
  app.use(require('less-middleware')({
    dest: path.join(__dirname, 'public', 'app-build', 'css'),
    src: path.join(__dirname, 'public', 'app-src', 'less'),
    prefix: '/app-build/css',
    force: true, // Always re-compile less files on each request.
    compress: true
  })); // needs to be declared before static middleware (in order to get the recompile working)  
} else {
  console.log("skipped less middleware");
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// serve index and view partials


app.get('/debug', function (req, res) {
  res.render('index_debug');
});


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

  
// only use this route if we want to show the "currently offline" site
// app.get('/*', function (req, res) {
//   res.render('maintenance');
// });


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});