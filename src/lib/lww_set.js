
const { getLatest } = require('../utils/index');

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
		this.addSet[element] = time;
	}

	/**
	 * remove element from the set
	 *
	 * @param {string} element element to be removed
	 * @param {number} time timestamp in ms
	 */
	remove(element, time) {
		this.removeSet[element] = time;
	}

	/**
	 * check if element exists
	 *
	 * @param {string} element
	 * @return {boolean}
	 */
	exist(element) {
		return getLatest(this.addSet, this.removeSet, element);
	}

	/**
	 * get all elements from the set
	 *
	 * @return {array} elements from the set
	 */
	 get() {
		 const returnValue = [];
		 for (let value in this.addSet) {
			 if(getLatest(this.addSet, this.removeSet, value)) {
				 returnValue.push(value);
			 }
		 }
		 return returnValue;
	 }
}

module.exports = LwwSet;
