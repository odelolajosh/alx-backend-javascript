const { expect } = require("chai")
const getPaymentTokenFromAPI = require("./6-payment_token")

describe('getPaymentTokenFromAPI', function() {
  it('Should resolve with a result', function(done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.haveOwnProperty('data', 'Successful response from the API');
      })
      .then(done);
  });
});
