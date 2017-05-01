'use strict'

class Calculator {
  //write your code here
  constructor (number = 1) {
    this.data = number;
  }
  add (number) {
    this.data += number;
    return this;
  }
  substract (number) {
    this.data -= number;
    return this;
  }
  multiply (number) {
    this.data *= number;
    return this;
  }
  divide (number) {
    this.data /= number;
    return this;
  }
  square () {
    this.data = Math.pow(this.data, 2);
    return this;
  }
  squareRoot () {
    this.data = Math.sqrt(this.data);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const calc = new Calculator();
const data = Object.keys(calc);
console.log(calc[data]);

const newCalc = calc.add(2);
console.log(newCalc[data]);

const substract = calc.substract(1);
console.log(substract[data]);

const multiply = calc.multiply(11);
console.log(multiply[data]);

const divide = calc.divide(2);
console.log(divide[data]);

const square = calc.square();
console.log(square[data]);

const sqroot = calc.squareRoot();
console.log(sqroot[data]);

module.exports = {
  Calculator
}
