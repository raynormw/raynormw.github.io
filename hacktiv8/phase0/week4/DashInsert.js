function DashInsert(str) {
	let arr = String(str).split("");
	let newArr = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1 && arr[i-1] % 2 === 1) newArr.push("-");
		newArr.push(arr[i]);
	}

	return newArr.join("");
}

console.log(DashInsert(454793)); // 4547-9-3
console.log(DashInsert(99946)); // 9-9-946
console.log(DashInsert(56730)); // 567-30
