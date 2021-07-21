/*
There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. 
You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). 
You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. 
Since the answer can be very large, return it modulo 109 + 7.

 

Example 1:


Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6
Example 2:


Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12
*/

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let memo = {}
    
    return findTotal(m, n, maxMove, startRow, startColumn, memo)
};
    
function findTotal(m, n, maxMove, startRow, startColumn, memo){
    let key = startRow + "," + startColumn + "," + maxMove
    if(key in memo){
        return memo[key]
    }
    //if I'm out of bounds then i can return 1
    if(startRow < 0 || startColumn < 0 || startRow === m || startColumn === n){
       return 1
    }
    //if I'm out of moves then i need to return 0
    if(maxMove === 0){
       return 0
    }
    
    //otherwise the total number of ways to get out of bounds is sum of ways of out of up down left right
    memo[key] = (findTotal(m, n, maxMove-1, startRow+1, startColumn, memo) + 
        findTotal(m, n, maxMove-1, startRow-1, startColumn, memo) + 
        findTotal(m, n, maxMove-1, startRow, startColumn+1, memo) +
        findTotal(m, n, maxMove-1, startRow, startColumn-1, memo)) % 1000000007
    return memo[key]
    
}
