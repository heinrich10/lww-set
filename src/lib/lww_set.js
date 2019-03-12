
const { isLatest } = require('../utils/index');

class LwwSet {
  /**
   * Creates LWW set with 2 arrays
   *
   * @constructor
   */
  constructor() {
    this.addSet = [];
    this.removeSet = [];
  }

  /**
   * add element to set
   *
   * @param {string} element element to be added
   * @param {number} time timestamp in ms
   */
  add(element, time) {
    this.addSet[element.toString()] = time;
  }

  /**
   * remove element from the set
   *
   * @param {string} element element to be removed
   * @param {number} time timestamp in ms
   */
  remove(element, time) {
    this.removeSet[element.toString()] = time;
  }

  /**
   * check if element exists
   *
   * @param {string} element
   * @return {boolean}
   */
  exist(element) {
    return isLatest(this.addSet, this.removeSet, element.toString());
  }

  /**
   * get all elements from the set
   *
   * @return {array} elements from the set
   */
  get() {
    const returnValue = [];
    const keys = Object.keys(this.addSet);
    for (let i = keys.length - 1; i >= 0; i -= 1) {
      const value = keys[i];
      if (isLatest(this.addSet, this.removeSet, value)) {
        returnValue.push(value);
      }
    }
    return returnValue;
  }
}

module.exports = LwwSet;
