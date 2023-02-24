const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('#calculateNumber', function() {
  it('Should add two whole integers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Should round down a\'s floating number', function () {
    assert.strictEqual(calculateNumber(4.3, 4), 8);
  });

  it('Should round down a\'s floating number', function () {
    assert.strictEqual(calculateNumber(2, 4.4), 6);
  });

  it('Should round down a\' and b\' floating number', function () {
    assert.strictEqual(calculateNumber(1.1, 1.2), 2);
  });

  it('Should round up a\' and b\' numbers', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('Should round up b\'s floating numbers', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('Should round up a\'s floating number', function() {
    assert.strictEqual(calculateNumber(4.3, 4), 8);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
