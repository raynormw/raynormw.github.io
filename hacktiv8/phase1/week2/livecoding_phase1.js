// 1. Indeks Prima (30)
function indexPrima(n){
  //write your code here
  let result = [];
  let max = 5000;
	let temp = [];
	let found;

  for (let i = 2; i <= max; i++) {
    if (!temp[i]) {
      // i has not been marked -- it is prime
      result.push(i);
      for (let j = i << 1; j <= max; j += i) {
        temp[j] = true;
      }
    }
  }

  result.map((element, index) => {
		if (index === n-1) {
			found = element;
		}
  });

  return found;
}

console.log(indexPrima(4)); 
//result: 7
//penjelasan
//angka prima: 2,3,5,7, …, N
//karena angka prima ke-4 adalah 7 maka return 7

console.log(indexPrima(50)); //result: 229


// 2. Unique Coin Combination (50)

function getCoins(value) {
  //write your code here
  if (value > 33) {
		return "Max value is 33";
  }

  let coin = [1,5,7,9,11];
  let powerSet = [[]];
  let result = [];

  for (let i = 0; i < coin.length; i++) {
    for (let j = 0, len = powerSet.length; j < len; j++) {
      powerSet.push(powerSet[j].concat(coin[i]));
    }
  }

  powerSet.map((element) => {
		let total = element.reduce((sum, current) => sum + current, 0);
		if (total == value) {
			result.push(element);
		}
  });

  return (result.length === 0) ? -1 : result;
} 

// Contoh 1 : 
console.log(getCoins(12));

//Result yang diharapkan, ada 2 kombinasi, yaitu : 
// [1, 11]
// [5, 7]

// Contoh 2 : 
console.log(getCoins(17));

//Result yang diharapkan, ada 2 kombinasi, yaitu : 
// [1, 5, 11] dan [1,7,9]

// Contoh 3 : 
console.log(getCoins(3));

//Result yang diharapkan, ada 0 kombinasi, yaitu : 
-1

// 3. Completing a Calculation (20)
function solvePola(str) {
  //write your code here
  let clean = str.replace(/[*=]/g, "").split(" ");
	let arrayNum1 = clean[0].split("");
	let arrayResult = clean[4].split("");
	let index1 = clean[0].indexOf("#");
	let indexResult = clean[4].indexOf("#");
	let hidden = [];

	for (let i = 0; i <= 9; i++) {
		for (let j = 0; j <= 9; j++) {
			arrayNum1.splice(index1, 1, i);
			arrayResult.splice(indexResult, 1, j);
			if (arrayNum1.join("") * clean[2] == arrayResult.join("")) {
				hidden.push(i);
				hidden.push(j);
				break;			
			}
		}
	}

	return hidden;
}

console.log(solvePola("42#3 * 188 = 80#204")); 
// result: [8, 5]
// Karena,  4283 * 188 = 805204

console.log(solvePola("8#61 * 895 = 78410#5")); 
// [7,9]
// Karena,  8761 * 895 = 7841095

console.log(solvePola("8#61 * 800 = 692880#"));
// expected:
// [6,0]
// 8661*800 = 6928800
