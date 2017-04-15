function OtherProducts(arr) {
  let holdArray = [];

  arr.forEach((val, ind, theArray) => {
    let newArray = Array.from(theArray)
    newArray.splice(ind,1)

    holdArray[ind] = newArray.reduce((val1, val2) => val1 * val2);
  })

  return holdArray.join('-');
}

console.log( OtherProducts([1, 2, 3, 4, 5]));
console.log( OtherProducts([1, 2, 3, 4, 5, 6])); 