function SwapCase(str) { 
  let arr = str.split("");
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else if (arr[i] == arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  
  return arr.join(""); 
}

console.log(SwapCase("hELLO wORLD")); // Hello World
console.log(SwapCase("Argument goes here")); // aRGUMENT GOES HERE