function ExOh(str) {
	let total = 0;

	for (let char of str) {
		if (char == "x") total += 1;
	}
	return (str.length / 2 === total) ? true : false;
}

console.log(ExOh("xooxxo"));
console.log(ExOh("xooxxox"));
console.log(ExOh("x"));