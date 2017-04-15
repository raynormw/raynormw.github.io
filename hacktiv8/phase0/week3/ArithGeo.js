function ArithGeo(arr) { 
    
  function arith(arr) {
    for(var i = 1; i < arr.length-1; i++) {
      if((arr[i] - arr[i-1]) !== (arr[i+1] - arr[i])) {
        return false;
      }
    }
  return true;
  }
  
  function geo(arr) {
    for(var j = 1; j < arr.length-1; j++) {
      if((arr[j] / arr[j-1]) !== (arr[j+1] / arr[j])) {
        return false;
      }
    }
  return true;
  }
  
  if(arith(arr)) {
    return "Arithmetic";
  } else if(geo(arr)) {
    return "Geometric";
  } else {
    return -1;
  }    
}

console.log(ArithGeo([2, 4, 6, 8]));
console.log(ArithGeo([2, 6, 18, 54]));
console.log(ArithGeo([1,2,3,100]));