/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Example 3:

Input: m = 7, n = 3
Output: 28
Example 4:

Input: m = 3, n = 3
Output: 6

*/

var uniquePaths = function(m, n) {
    let memo = {}
    return findPaths(m, n,1,1, memo)
};

function findPaths(m,n,cm,cn, memo){
    
    let key = cm +"," + cn
    if(key in memo){
        return memo[key]
    }
    
    if(cm === m && cn === n){
       return 1
    }
    
    let totalWays = 0
    
    if(cm < m){
       totalWays += findPaths(m, n, cm+1, cn, memo)
    }
    
    if(cn < n){
        totalWays += findPaths(m, n, cm, cn+1, memo)
    }
    
    memo[key] = totalWays
    return totalWays
}
