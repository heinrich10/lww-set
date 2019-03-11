
/**
* Return true if latest state of element is add
*
* @param array - the add entries
* @param array - the remove entries
* @param element - the element in check
* @return {boolean}
*/
exports.getLatest = (add, remove, element) => {
	const addTimestamp = add[element] || 0;
	const removeTimestamp = remove[element] || 0;

	if (addTimestamp > removeTimestamp) {
		return true;
	} else {
		return false;
	}
}
