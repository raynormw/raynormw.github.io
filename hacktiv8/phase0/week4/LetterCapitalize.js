function LetterCapitalize(str) {
	return str.split(" ").map( item => item[0].toUpperCase() + item.slice(1) ).join(" ");
}

console.log(LetterCapitalize("tirta wirya putra"));