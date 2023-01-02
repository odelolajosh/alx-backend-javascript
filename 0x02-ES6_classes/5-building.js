/* eslint-disable no-underscore-dangle */

/**
 * Building class
 * @class
 */
export default class Buiding {
  /**
   * Create a {@link Building}
   * @param {number} sqft
   * @throws {TypeError} if sqft is not a number
   * @throws {Error} if the class extending Building does not override evacuationWarningMessage
   * @returns {Building} Building
   * @constructor
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Buiding && !typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /**
   * Get the sqft
   * @returns {number} sqft
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Set the sqft
   * @param {number} newSqft
   * @throws {TypeError} if newSqft is not a number
   */
  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }
}
