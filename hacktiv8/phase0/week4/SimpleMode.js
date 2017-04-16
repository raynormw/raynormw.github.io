function SimpleMode(arr) {
	let temp = {};

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		temp[num] === undefined ? temp[num] = 1 : temp[num] += 1;
	}

	let result = {number: null, count: 1};

	for (let num in temp) {
		if (temp[num] > result.count) {
			result.number = num;
			result.count = temp[num];
		}
	}

	return result.count === 1 ? -1 : result.number;
}

console.log(SimpleMode([10, 4, 5, 2, 4])); // 4
console.log(SimpleMode([5, 10, 10, 6, 5])); // 5
console.log(SimpleMode([4,4,5,6,7,8,8,8,8,8])); // 8
console.log(SimpleMode([1,2,3,100])); // -1