const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function() {
  describe('#type SUM', function() {
    it('Should add two whole integers', function () {
      assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber(4.3, 4, 'SUM'), 8);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber(2, 4.4, 'SUM'), 6);
    });

    it('Should round down a\' and b\' floating number', function () {
      assert.strictEqual(calculateNumber(1.1, 1.2, 'SUM'), 2);
    });

    it('Should round up a\' and b\' numbers', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7, 'SUM'), 6);
    });

    it('Should round up b\'s floating numbers', function () {
      assert.strictEqual(calculateNumber(1, 3.7, 'SUM'), 5);
    });

    it('Should round up a\'s floating number', function () {
      assert.strictEqual(calculateNumber(4.3, 4, 'SUM'), 8);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(2.499999, 3.499999, 'SUM'), 5);
    });
  });

  describe('#type SUBTRACT', function () {
    it('Should subtract two whole integers', function () {
      assert.strictEqual(calculateNumber(12, 3, 'SUBTRACT'), 9);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber(9.3, 4, 'SUBTRACT'), 5);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber(2, 4.4, 'SUBTRACT'), -2);
    });

    it('Should round down a\' and b\' floating number', function () {
      assert.strictEqual(calculateNumber(2.2, 1.2, 'SUBTRACT'), 1);
    });

    it('Should round up a\' and b\' numbers', function () {
      assert.strictEqual(calculateNumber(3.7, 1.5, 'SUBTRACT'), 2);
    });

    it('Should round up b\'s floating numbers', function () {
      assert.strictEqual(calculateNumber(1, 3.7, 'SUBTRACT'), -3);
    });

    it('Should round up a\'s floating number', function () {
      assert.strictEqual(calculateNumber(4.3, 4, 'SUBTRACT'), 0);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(4.499999, 2.499999, 'SUBTRACT'), 2);
    });
  });

  describe('#type DIVIDE', function () {
    it('Should divide two whole integers', function () {
      assert.strictEqual(calculateNumber(12, 3, 'DIVIDE'), 4);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber(9.3, 3, 'DIVIDE'), 3);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber(2, 4.4, 'DIVIDE'), 0.5);
    });

    it('Should round down a\' and b\' floating number', function () {
      assert.strictEqual(calculateNumber(2.2, 1.2, 'DIVIDE'), 2);
    });

    it('Should round up a\' and b\' numbers', function () {
      assert.strictEqual(calculateNumber(3.7, 1.5, 'DIVIDE'), 2);
    });

    it('Should round up b\'s floating numbers', function () {
      assert.strictEqual(calculateNumber(1, 3.7, 'DIVIDE'), 0.25);
    });

    it('Should round up a\'s floating number', function () {
      assert.strictEqual(calculateNumber(4.3, 4, 'DIVIDE'), 1);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(4.499999, 2.499999, 'DIVIDE'), 2);
    });

    it('Should return \'Error\' when b rounds to 0', function () {
      assert.equal(calculateNumber(1.4, 0.3, 'DIVIDE'), 'Error');
    });

    it('Should not return \'Error\' when only a is 0', function () {
      assert.notEqual(calculateNumber(0, 4, 'DIVIDE'), 'Error');
    });
  });
});
