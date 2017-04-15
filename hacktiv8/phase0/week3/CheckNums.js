function CheckNums(num1,num2) {
	return (num2 > num1) ? true : (num1 === num2) ? -1 : false;
}

console.log(CheckNums(5, 7));
console.log(CheckNums(5, 5));
console.log(CheckNums(7, 5));