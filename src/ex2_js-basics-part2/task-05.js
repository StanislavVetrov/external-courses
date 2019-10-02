function defineIfPrime(num) {
	let result;
	if (num > 1 && num < 1000) {
	  result = `Число ${num} - простое число`;
	  for (let i = 2; i < num; i++) {
		if (num % i === 0) {
		  result = `Число ${num} - составное число`;
		}
	  }
	} else {
	  result = "Данные неверны";
	}
	return result;
  }
  module.exports = defineIfPrime;
  