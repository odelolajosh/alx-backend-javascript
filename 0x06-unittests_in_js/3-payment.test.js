const { expect } = require("chai");
const Sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils.calculateNumber with required args', () => {
    const spy = Sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
    sinon.restore();
  });
});
