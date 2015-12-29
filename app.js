var express = require('express');
var bodyParser = require('body-parser');
var app = express();

module.exports = function (booksRepo) {
  var routes = require('./routes')(booksRepo);
  app.use(bodyParser.json());




  app.get('/stock', routes.get);
  app.get('/stock/:isbn', routes.getOne);
  app.post('/stock', routes.post);


  app.use(routes.notFoundError);
  app.use(routes.internalError);

  return app;
};
