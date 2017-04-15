function LargestPair(num) {
	let largest = 0;
	num = String(num);

	for (let i = 0; i < num.length; i++) {
		let temp = num[i] + num[i+1];
		if (temp > largest) largest = +temp;
	}
	return largest;
}

console.log(LargestPair(4759472));