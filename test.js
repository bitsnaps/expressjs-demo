var request = require('supertest');
var app = require('./app');

describe('Request to the root path', function () {

  it('Returns a 200 status code', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(error){
        if (error) throw error;
        done();
      });
  });

});


describe('Listening cities on /cities', function () {
  it('Returns 200 status code', function (done) {
    request(app)
    .get('/cities')
    .expect(200, done);
  });
  it('Returns JSON format', function (done) {
    request(app)
    .get('/cities')
    .expect('Content-Type', /json/, done);
  });

  it('Returns initial cities', function (done) {
    request(app)
    .get('/cities')
    .expect(JSON.stringify(['Alger', 'Oran', 'Annaba']), done);
  })
});
