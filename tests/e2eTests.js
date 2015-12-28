var request = require('supertest');
var app = require('../app');
var assert = require('assert');

describe('POST stock', function () {
  return it('responds with isbn', function () {
    request(app)
      .post('/stock')
      .send({isbn: 123, count: 10})
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        assert.equal(res.body.isnb, 123);
      });
  });
});
