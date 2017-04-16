function PrimeTime(num) { 

  if (num < 2) return false;
  
  for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
  }
  return true;
}

console.log(PrimeTime(15));
console.log(PrimeTime(9));
console.log(PrimeTime(7));
console.log(PrimeTime(2));