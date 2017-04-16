function Division(num1,num2) { 
	return (num2 === 0) ? num1 : Division(num2, num1 % num2);
}

console.log(Division(12, 16));
console.log(Division(7, 3));
console.log(Division(36, 54));