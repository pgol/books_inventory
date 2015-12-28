var booksRepo = require('./booksRepo');
var app = require('./app')(booksRepo);
var port = 3000;
var server = app.listen(port, function () {
  console.log('Server running on port: ', port);
});

