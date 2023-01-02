/* eslint-disable no-underscore-dangle */

export default class Airport {
  /**
   * Create an {@link Airport}
   * @param {string} name
   * @param {string} code
   * @throws {TypeError} if name is not a string
   * @throws {TypeError} if code is not a string
   * @returns {Airport} Airport
   * @constructor
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Get the name
   * @returns {string} name
   * @getter
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name
   * @param {string} newName
   * @throws {TypeError} if newName is not a string
   * @setter
   */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = newName;
  }

  /**
   * Get the code
   * @returns {string} code
   * @getter
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code
   * @param {string} newCode
   * @throws {TypeError} if newCode is not a string
   * @setter
   */
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }

  /**
   * Get the toStringTag
   * @returns {string} toStringTag
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
