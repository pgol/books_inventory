module.exports = {
  getBooks: function () {
    return Promise.resolve(
      [
        {
          "isbn": 31231231,
          "count": 22
        },
        {
          "isbn": 31231231,
          "count": 22
        },
        {
          "isbn": 31231231,
          "count": 22
        }
      ]
    )
  }
};
