function Palindrome(str) { 
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let balikStr = str.split("").reverse().join("");

  return (str === balikStr) ? true : false;
}

console.log(Palindrome("Argument goes here"));
console.log(Palindrome("Tirta2Wirya1 P3utra"));
console.log(Palindrome("Ono oPo onO"));