/*
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 

Constraints:

1 <= n <= 104
*/

var numSquares = function(n, memo={}) {
    if(n in memo){
        return memo[n]
    }
    if(n === 0){
        return 0
    }
    
    let total = 0
    for(let i = 1; i*i <= n; i++){
        let value = numSquares(n - i * i, memo) + 1
        total = total === 0 ? value : Math.min(total, value)
    }
    memo[n] = total 
    return total
};
