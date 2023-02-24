const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function() {
  describe('#type SUM', function() {
    it('Should add two whole integers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber('SUM', 4.3, 4), 8);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber('SUM', 2, 4.4), 6);
    });

    it('Should round down a\' and b\' floating number', function () {
      assert.strictEqual(calculateNumber('SUM', 1.1, 1.2), 2);
    });

    it('Should round up a\' and b\' numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('Should round up b\'s floating numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('Should round up a\'s floating number', function () {
      assert.strictEqual(calculateNumber('SUM', 4.3, 4), 8);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });

  describe('#type SUBTRACT', function () {
    it('Should subtract two whole integers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 12, 3), 9);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.3, 4), 5);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 4.4), -2);
    });

    it('Should round down a\' and b\' floating number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 1.2), 1);
    });

    it('Should round up a\' and b\' numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });

    it('Should round up b\'s floating numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('Should round up a\'s floating number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.3, 4), 0);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.499999, 2.499999), 2);
    });
  });

  describe('#type DIVIDE', function () {
    it('Should divide two whole integers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 12, 3), 4);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 9.3, 3), 3);
    });

    it('Should round down a\'s floating number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 4.4), 0.5);
    });

    it('Should round down a\' and b\' floating number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 1.2), 2);
    });

    it('Should round up a\' and b\' numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    });

    it('Should round up b\'s floating numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('Should round up a\'s floating number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.3, 4), 1);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.499999, 2.499999), 2);
    });

    it('Should return \'Error\' when b rounds to 0', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0.3), 'Error');
    });

    it('Should not return \'Error\' when only a is 0', function () {
      assert.notEqual(calculateNumber('DIVIDE', 0, 4), 'Error');
    });
  });
});
