const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils.calculateNumber with required args', () => {
    const spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
    spy.calculateNumber.restore();
  });
});
