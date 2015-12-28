var request = require('supertest');
var assert = require('assert');


var testStore = require('./testStore');
var app = require('../app')(testStore);

describe('POST stock', function () {
  it('responds with isbn', function (done) {
    request(app)
      .post('/stock')
      .send({isbn: 123, count: 10})
      .set('Content-Type', 'application/json')
      .expect(200, {isbn: 123, count: 10}, done);
  });
});

describe('GET stock', function () {
  it('responds with list of books', function () {
    return request(app)
      .get('/stock')
      .expect(200)
  });

  it('responds with single book', function (done) {
    request(app)
      .get('/stock/1')
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        console.log('end!');
        if (err) {
          done(err);
        }
        assert.equal(res.res.body.isbn, 1);
        done();
      })
  });
});
