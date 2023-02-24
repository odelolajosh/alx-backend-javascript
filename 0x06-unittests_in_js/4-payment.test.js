const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils.calculateNumber with required args', () => {
    const consoleSpy = sinon.spy(console);
    const mockCalculateNumber = sinon.stub(Utils, 'calculateNumber')
    mockCalculateNumber.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(mockCalculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.log.calledOnceWith('The total is: 10'));
    sinon.restore();
  });
});
