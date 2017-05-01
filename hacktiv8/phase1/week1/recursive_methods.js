let choose_team = (n, k) => {
  return ((1 <= k) && (k <= n-1)) ? choose_team(n-1, k-1) + choose_team(n-1, k) : 1;
}

console.log(choose_team(6, 2)); // 15
console.log(choose_team(6, 3)); // 30
console.log(choose_team(24, 4)); // 10626
console.log(choose_team(18, 1)); // 18
