/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
*/

var minPathSum = function(grid) {
    let memo = {}
    let holder = []
    
    return findMinPath(0, 0, grid, memo) 
};

function findMinPath(i, j, grid, memo){
    let key = i + "," + j
    
    if(key in memo){
        return memo[key]
    }
    if(i >= grid.length ||  j >= grid[i].length){
        return Number.MAX_SAFE_INTEGER
    }
    
    if(i === grid.length-1 && j === grid[i].length -1){
        return grid[i][j]
    }
    
    
    memo[key]= grid[i][j] + Math.min(findMinPath(i+1, j, grid, memo), findMinPath(i, j+1, grid, memo))
    
    return memo[key]
}
