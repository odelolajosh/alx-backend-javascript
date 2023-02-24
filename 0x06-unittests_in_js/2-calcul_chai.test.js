const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function() {
  describe('#type SUM', function() {
    it('Should add two whole integers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
    });

    it('Should round down a\'s floating number', function () {
      expect(calculateNumber('SUM', 4.3, 4)).to.be.equal(8);
    });

    it('Should round down a\'s floating number', function () {
      expect(calculateNumber('SUM', 2, 4.4)).to.be.equal(6);
    });

    it('Should round down a\' and b\' floating number', function () {
      expect(calculateNumber('SUM', 1.2, 1.2)).to.be.equal(2);
    });

    it('Should round up a\' and b\' numbers', function () {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.be.equal(6);
    });

    it('Should round up b\'s floating numbers', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.be.equal(5);
    });

    it('Should round up a\'s floating number', function () {
      expect(calculateNumber('SUM', 4.3, 4)).to.be.equal(8);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.be.equal(5);
    });
  });

  describe('#type SUBTRACT', function () {
    it('Should subtract two whole integers', function () {
      expect(calculateNumber('SUBTRACT', 12, 3)).to.be.equal(9);
    });

    it('Should round down a\'s floating number', function () {
      expect(calculateNumber('SUBTRACT', 9.3, 4)).to.be.equal(5);
    });

    it('Should round down a\'s floating number', function () {
      expect(calculateNumber('SUBTRACT', 2, 4.4)).to.be.equal(-2);
    });

    it('Should round down a\' and b\' floating number', function () {
      expect(calculateNumber('SUBTRACT', 2.2, 1.2)).to.be.equal(1);
    });

    it('Should round up a\' and b\' numbers', function () {
      expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.be.equal(2);
    });

    it('Should round up b\'s floating numbers', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.be.equal(-3);
    });

    it('Should round up a\'s floating number', function () {
      expect(calculateNumber('SUBTRACT', 3.3, 3)).to.be.equal(0);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('SUBTRACT', 4.499, 2.499)).to.be.equal(2);
    });
  });

  describe('#type DIVIDE', function () {
    it('Should divide two whole integers', function () {
      expect(calculateNumber('DIVIDE', 12, 3)).to.be.equal(4);
    });

    it('Should round down a\'s floating number', function () {
      expect(calculateNumber('DIVIDE', 9.3, 3)).to.be.equal(3);
    });

    it('Should round down a\'s floating number', function () {
      expect(calculateNumber('DIVIDE', 2, 4.4)).to.be.equal(0.5);
    });

    it('Should round down a\' and b\' floating number', function () {
      expect(calculateNumber('DIVIDE', 2.2, 1.2)).to.be.equal(2);
    });

    it('Should round up a\' and b\' numbers', function () {
      expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.be.equal(2);
    });

    it('Should round up b\'s floating numbers', function () {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.be.equal(0.25);
    });

    it('Should round up a\'s floating number', function () {
      expect(calculateNumber('DIVIDE', 3.3, 3)).to.be.equal(1);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('DIVIDE', 4.49999, 2.499999)).to.be.equal(2);
    });

    it('Should return \'Error\' when b rounds to 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0.3)).to.be.equal('Error');
    });

    it('Should not return \'Error\' when only a is 0', function () {
      expect(calculateNumber('DIVIDE', 0, 4)).not.equal('Error');
    });
  });
});
