let Calculator = {
    current: 0,
    add: function add(a) {
      if (a !== "" && !isNaN(a)) {
        Calculator.current += a;
      }
      return add;
    },
    subtract: function subtract(a) {
      if (a !== "" && !isNaN(a)) {
        Calculator.current -= a;
      }
      return subtract;
    },
    multiply: function multiply(a = 1) {
      if (a !== "" && !isNaN(a)) {
        Calculator.current *= a;
      }
      return multiply;
    },
    divide: function divide(a = 1) {
      if (a !== "" && !isNaN(a)) {
        Calculator.current /= a;
      }
      return divide;
    },
    getResult: function getResult() {
      return Calculator.current;
    },
    reset: function resetResult() {
      Calculator.current = 0;
      return Calculator.current;
    }
  };
  
  module.exports = Calculator;
  