module.exports = function (booksRepo) {
  return {
    get: function (req, res) {
      return booksRepo.getBooks()
        .then(function (docs) {
          res.json(docs);
        });
    },
    getOne: function (req, res) {
      return booksRepo.getBook(req.params.isbn)
        .then(function (book) {
          res.json(book);
        });
    },
    post: function (req, response) {
      booksRepo.saveBook({
          isbn: req.body.isbn,
          count: req.body.count
        })
        .then(function () {
          response.json({isbn: req.body.isbn, count: req.body.count});
        });
    },
    notFoundError: function (req, res, next) {
      var err = new Error('Not found');
      err.status = 404;
      error.message = 'Not found';
      next(err);
    },
    internalError: function (error, req, res, next) {
      res.status(error.status || 500);
      console.error(error.stack);
      res.json({error: error.message});
    }
  };
};
