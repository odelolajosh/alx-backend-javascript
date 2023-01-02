/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

/**
 * Pricing class
 * @class
 */
export default class Pricing {
  /**
   * Create a {@link Pricing}
   * @param {number} amount
   * @param {Currency} currency
   * @throws {TypeError} if amount is not a number
   * @throws {TypeError} if currency is not a Currency
   * @returns {Pricing} Pricing
   * @constructor
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Get the amount
   * @returns {number} amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount
   * @param {number} newAmount
   * @throws {TypeError} if newAmount is not a number
   * @returns {number}
   */
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  /**
   * Get the currency
   * @returns {Currency} currency
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency
   * @param {Currency} newCurrency
   * @throws {TypeError} if newCurrency is not a Currency
   * @returns {Currency}
   */
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = newCurrency;
  }

  /**
   * Display the full price
   * @returns {string} - A string representation of the price
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Convert the price to a different currency
   * @param {number} conversionRate - The conversion rate
   * @returns {number} - The converted price
   * @static
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
