var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/hok', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
var cors = require('cors');

var organization = require('./routes/organization');
var customer = require('./routes/customer');
var program = require('./routes/program');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/program', program);
app.use('/api/customer', customer);
app.use('/api/organization', organization);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
