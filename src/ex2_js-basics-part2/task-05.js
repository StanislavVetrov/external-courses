function getMax(array) {
	let maxElement = 0;
	for (let i = 0; i < array.length; i++) {
	  if (array[i] > maxElement) {
		maxElement = array[i];
	  }
	}
	return maxElement;
  }
  
  module.exports = getMax;
  