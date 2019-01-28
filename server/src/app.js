var express = require('express');
var path = require('path');
const config = require('config');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.get('db_connection_str'), { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
var cors = require('cors');

var organization = require('./routes/organization.route');
var program = require('./routes/program.route');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/program', program);
app.use('/api/organization', organization);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
})

module.exports = app;
