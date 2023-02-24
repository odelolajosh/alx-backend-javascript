const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    consoleSpy.log.resetHistory();
  });

  it('(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.log.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.log.calledOnceWith('The total is: 20')).to.be.true;
  });
});
