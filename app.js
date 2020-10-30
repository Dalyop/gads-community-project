var createError = require('http-errors');
var express = require('express');
var path = require('path');
const chalk = require('chalk');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var debug = require('debug')('app');
var http = require('http');
var app = express();
var port = process.env.PORT || 3000

// view engine setup
app.set('views','./src/views');
app.set('view engine', 'pug');

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.redirect('home')
})
app.get('/home', (req, res) => {
  res.render('index')
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/symptomschecker', (req, res) => {
  res.render('symptomschecker')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function(){
  debug(`Listening on port ${chalk.green(port)}`)
});