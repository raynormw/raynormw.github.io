function LetterChanges(str) { 
  let list = "";
  
  for (let i = 0; i < str.length; i++) {
    if(str[i].match(/[a-z]/gi)) {
      list += String.fromCodePoint( str.codePointAt(i) + 1 );
    } else {
      list += str[i];
    }
  }
  return list.replace(/[aeiou]/g, (letter) => letter.toUpperCase());   
}

console.log(LetterChanges("hello*3")); // "Ifmmp*3"
console.log(LetterChanges("fun times!")); // "gvO Ujnft!"