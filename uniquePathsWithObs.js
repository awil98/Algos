
/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right


Input: obstacleGrid = [[0,1],[0,0]]
Output: 1

Input obstacleGrid = [[0,0],[0,1]]
Output: 0
*/
var uniquePathsWithObstacles = function(obstacleGrid) {
    let memo = {}
    return getTotal(obstacleGrid, 0, 0, memo)
};

function getTotal(grid, row, col, memo){
    let key = row + "," + col
    
    if(key in memo){
        return memo[key]
    }
    
    if(row === grid.length -1 && col === grid[0].length -1){
        return 1
    }
    
    if(row < 0 || col < 0 || row === grid.length || col === grid[0].length || grid[row][col] === 1){
        return 0
    }
    
    memo[key] = getTotal(grid, row+1, col, memo) + getTotal(grid, row, col+1, memo)
    return memo[key]
}
