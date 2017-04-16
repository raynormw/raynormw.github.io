function ProductDigits(num) { 
  var val = 1;
  var min = null;
  
  while(val * val <= num) {

    if (num % val === 0) {
      var other = num / val;
      let leng1 = String(val).length;
      let leng2 = String(other).length;

      if (min === null || leng1 + leng2 < min) min = leng1 + leng2;
    }

    val += 1;
  }

  return min;
}

console.log(ProductDigits(8)); // 2
console.log(ProductDigits(24)); // 2
console.log(ProductDigits(90)); // 3
