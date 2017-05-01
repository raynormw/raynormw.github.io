function to_roman_old (num) {
  // your implementation code here
}

function to_roman (num) {
	let decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let result = "";

  for (let i = 0; i < decimal.length; i++) {
    while(decimal[i] <= num) {
      result += roman[i];
      num -= decimal[i];
    }
  }

  return result;
}

// Drive code
console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('55    | LV       | ', to_roman_old(55))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

module.exports = {
  to_roman_old,
  to_roman
}
