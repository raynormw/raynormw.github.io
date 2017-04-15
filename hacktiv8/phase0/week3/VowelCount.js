function VowelCount(str) {
	return str.replace(/[^aiueo]/gi, "").length;
}

console.log(VowelCount("All cows eat grass and moo"));