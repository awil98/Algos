/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n, memo = {}) {
    if(n in memo) return memo[n]
    if(n < 0) return 0
    if(n === 0) return 1

    let sum = 0

    for(let i = 1; i <=2; i++){
        sum += climbStairs(n - i, memo)//so if n becomes negative I'll just not consider it
    }

    memo[n] = sum
    return memo[n]
};

console.log(climbStairs(5))
