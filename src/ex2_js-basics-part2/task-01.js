function defineValue (value) {
	if (typeof value === 'string') {
		return 'string';
	} else if (typeof value === 'number' && value !== NaN) {
		return 'number';
	} 
	return undefined;	
}

module.exports = defineValue;
