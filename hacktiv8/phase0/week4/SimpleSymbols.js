function SimpleSymbols(str) { 

  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
    return false;
  } else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
    return false;
  } else {
    return true;
  }

}

console.log(SimpleSymbols("+d+=3=+s+")); // true
console.log(SimpleSymbols("f++d+")); // false