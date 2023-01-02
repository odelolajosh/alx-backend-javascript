/* eslint-disable no-underscore-dangle */

/**
 * Currency class
 * @class
 */
export default class Currency {
  /**
   * Create a {@link Currency}
   * @param {string} code
   * @param {string} name
   * @constructor
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Get the code
   * @returns {string} code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code
   * @param {string} newCode
   */
  set code(newCode) {
    this._code = String(newCode);
  }

  /**
   * Get the name
   * @returns {string} name
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name
   * @param {string} newName
   */
  set name(newName) {
    this._name = String(newName);
  }

  /**
   * Display the full currency info
   * @returns {string} - A string representation of the currency
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
