function ABCheck(str) { 
	return /a[a-zA-Z ][a-zA-Z ][a-zA-Z ]b/g.test(str);       
}

console.log(ABCheck("hELLO wORLD")); // false
console.log(ABCheck("lane borrowed")); // true