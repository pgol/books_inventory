var express = require('express');
var bodyParser = require('body-parser');
var app = express();



module.exports = function (booksRepo) {
  app.use(bodyParser.json());


  function notFoundError(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    error.message = 'Not found';
    res.status(404).json({error: error.message});
  }


  function internalError(error, req, res, next) {
    res.status(error.status || 500).json({error: error.message});
  }

  app.get('/stock', function (req, res) {
    booksRepo.getBooks()
      .then(function (docs) {
        res.json(docs);
      });
  });


  app.get('/stock/:isbn', function (req, res) {
    booksRepo.getBook(req.params.isbn)
      .then(function (book) {
        res.json(book);
      })
  });

  app.post('/stock', function (req, response) {
    booksRepo.saveBook({
        isbn: req.body.isbn,
        count: req.body.count
      })
      .then(function (book) {
        response.json({isbn: req.body.isbn, count: req.body.count});
      });
  });


  app.use(notFoundError);
  app.use(internalError);

  return app;
};
