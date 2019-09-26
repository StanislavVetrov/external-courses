function countEvenOdd(array) {
	let result =[0,0,0]; 
	for(let i=0;i<array.length;i++) {
		if (typeof array[i] === 'number') {
			if (array[i] %2 === 0 && array[i] !== 0) {
				result[0] += 1; 
			} else if (array[i] %2 === 1) {
				result[1] += 1;  
			} else if (array[i] === 0) {
				result[2] += 1;  
			}
		}	
	}			
	return result;
}

module.exports = countEvenOdd;
