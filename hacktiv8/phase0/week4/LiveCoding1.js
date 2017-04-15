function nextTargetName(angka) {
	let newArr = angka.map(item => String.fromCodePoint(item+96) ).join("").split("`");
	return newArr.map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
}

console.log(nextTargetName([1,12,1,19,20,1,9,18,0,1,18,3,8,9,5]));
console.log(nextTargetName([20,9,18,20,1,0,23,9,18,25,1,0,16,21,20,18,1]));