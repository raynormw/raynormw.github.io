function TimeConvert(num) { 
	let jam = Math.floor(num / 60);
	let menit = num % 60;
	return jam + ":" + menit;
}

console.log(TimeConvert(126));
console.log(TimeConvert(45));
console.log(TimeConvert(63));