function AlphabetSoup(str) {
	return str.split("").sort().join("");
}

console.log(AlphabetSoup("hello")); // ehllo
console.log(AlphabetSoup("world")); // dlorw
