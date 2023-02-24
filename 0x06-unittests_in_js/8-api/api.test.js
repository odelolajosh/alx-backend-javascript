const { expect } = require('chai');
const request = require('request');

const BASE_URL = 'https://localhost:7865';

describe('Payment API', function() {
  it('GET /', function(done) {
    request(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
