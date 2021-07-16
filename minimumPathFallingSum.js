/*
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. 
Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

 

Example 1:

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum underlined below:
[[2,1,3],      [[2,1,3],
 [6,5,4],       [6,5,4],
 [7,8,9]]       [7,8,9]]
Example 2:

Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is underlined below:
[[-19,57],
 [-40,-5]]
Example 3:

Input: matrix = [[-48]]
Output: -48
*/

var minFallingPathSum = function(matrix) {
    
    let memo = {}
    let result = Number.MAX_SAFE_INTEGER
    
    for(let j = 0; j < matrix[0].length; j++){
        let value = findFallingPathSum(0, j, matrix, memo)
        result = Math.min(result, value)
    }
    
    return result
};

function findFallingPathSum(i, j, matrix, memo){
    let key = i + "," + j
    if(key in memo){
        return memo[key]
    }
    if(i >= matrix.length || j >= matrix[i].length || j < 0){
        return Number.MAX_SAFE_INTEGER
    }
    
    if(i === matrix.length -1){
       return matrix[i][j]
    }
    
    memo[key] = matrix[i][j] + Math.min(findFallingPathSum(i+1, j, matrix, memo),findFallingPathSum(i+1, j+1, matrix, memo),findFallingPathSum(i+1, j-1, matrix, memo))
    return memo[key]
}
