
function findMax(numberArr) {
	return numberArr.reduce((prev, current) => Math.max(prev, current));
}

function findMin(numberArr) {
	return numberArr.reduce((prev, current) => Math.min(prev, current));
}

function findMean(numberArr) {
	let hasil = numberArr.reduce((sum, current) => sum + current) / numberArr.length;
	return Math.floor(hasil);
}


function findOdds(numberArr) {
	let hasil = [];
	for (let num of numberArr) {
		if (num % 2 === 1) hasil.push(num);
	}
	return hasil.join("-");
}

function findEvens(numberArr) {
	let hasil = [];
	for (let num of numberArr) {
		if (num % 2 === 0) hasil.push(num);
	}
	return hasil.join("-");
}

function numberProcessing(numberArr) {
	return "Min: " + findMin(numberArr) + ", Max: " + findMax(numberArr) + ", Mean: " + findMean(numberArr) +
	", Odds: " + findOdds(numberArr) + ", Evens: " + findEvens(numberArr);
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
