// Function 2 Competency Test

function removeDash(str) {
  return str.split("-").join(" ");
}

function capitalizeString(str) {
	let arr = str.split(" ");
	arr = arr.map(item => item[0].toUpperCase() + item.slice(1));
	return arr.join(" ");
}


function transformTextToNumber(str) {
	str = str.split("");
	let arr = [["i", "I", "e", "E", "s", "S", "o", "O", "a", "A"], [1, 1, 3, 3, 5, 5, 0, 0, 4, 4]];

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			if (str[i] == arr[0][j]) str[i] = arr[1][j];
		}
	}
	
	return str.join("");
}

function stringManipulator(str) {
  let cleanedStr = removeDash(str);
  let capitalizedStr = capitalizeString(cleanedStr);
  let transformedStr = transformTextToNumber(capitalizedStr);
  return transformedStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
