/* eslint-disable no-underscore-dangle */
import Buiding from './5-building';

/**
 * SkyHighBuilding class
 * @class
 */
export default class SkyHighBuilding extends Buiding {
  /**
   * Create a {@link SkyHighBuilding}
   * @param {number} sqft
   * @param {number} floors
   * @throws {TypeError} if sqft is not a number
   * @throws {TypeError} if floors is not a number
   * @returns {SkyHighBuilding} SkyHighBuilding
   * @constructor
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Get the floors
   * @returns {number} floors
   * @getter
   */
  get floors() {
    return this._floors;
  }

  /**
   * Set the floors
   * @param {number} newFloors
   * @throws {TypeError} if newFloors is not a number
   * @setter
   */
  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = newFloors;
  }

  /**
   * Get the evacuation warning message
   * @returns {string} evacuation warning message
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
