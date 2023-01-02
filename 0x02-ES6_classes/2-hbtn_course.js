/* eslint-disable no-underscore-dangle */

/**
 * Class HolbertonCourse
 * @class
 */
export default class HolbertonCourse {
  /**
   * Create a {@link HolbertonCourse}
   * @param {string} name
   * @param {number} length
   * @param {Array} students
   * @throws {TypeError} if name is not a string
   * @throws {TypeError} if length is not a number
   * @throws {TypeError} if students is not an array
   * @throws {TypeError} if students is not an array of strings
   * @returns {HolbertonCourse} HolbertonCourse
   * @constructor
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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
   * @throws {TypeError} if newName is not a string
   */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  /**
   * Get the length
   * @returns {number} length
   */
  get length() {
    return this._length;
  }

  /**
   * Set the length
   * @param {number} newLength
   * @throws {TypeError} if newLength is not a number
   */
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  /**
   * Get the students
   * @returns {Array} students
   */
  get students() {
    return this._students;
  }

  /**
   * Set the students
   * @param {Array} newStudents
   * @throws {TypeError} if newStudents is not an array
   * @throws {TypeError} if newStudents is not an array of strings
   */
  set students(newStudents) {
    if (typeof newStudents !== 'object') {
      throw new TypeError('Students must be an array');
    }
    if (!newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
