var _ = require('lodash');

var books = [
  {
    "isbn": 1,
    "count": 1
  },
  {
    "isbn": 123,
    "count": 2
  }
];

module.exports = {
  getBooks: function () {
    return Promise.resolve(books)
  },
  getBook: function (isbn) {
    var book = _.find(books, {isbn: parseInt(isbn)}) || null;
    return Promise.resolve(book)
  },
  saveBook(bookToSave) {
    books.push(bookToSave);
    return Promise.resolve(bookToSave);
  }
};
