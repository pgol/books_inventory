var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost/books_inventory';
var collection = MongoClient.connect(dbUrl).then(function (db) {
  console.log('connected');
  return db.collection('books');
});

function getBooks() {
  return collection.then(function (booksCollection) {
      return booksCollection.find({}).toArray();
    })
    .then(function (books) {
      return books.map(function (book) {
        return {
          isbn: book.isbn || null,
          count: book.count || null
        };
      });
    });
}

function getBook(isbn) {
  return collection.then(function (booksCollection) {
    return booksCollection.find({isbn: parseInt(isbn)}).limit(1).next();
  }).then(function (book) {
    if (book) {
      return book;
    } else {
      return null;
    }
  });
}

function saveBook(bookToSave) {
  return collection.then(function (booksCollection) {
    return booksCollection.updateOne(
      {isbn: bookToSave.isbn},
      bookToSave,
      {upsert: true}
    );
  });
}

module.exports = {
  getBooks: getBooks,
  saveBook: saveBook,
  getBook: getBook
};
