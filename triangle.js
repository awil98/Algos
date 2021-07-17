/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if 
you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10
*/

var minimumTotal = function(triangle) {
    let memo = {}
    return minTot(0, 0, triangle, memo)
};

function minTot(i, j, triangle, memo){
    let key = i + "," + j
    
    if(key in memo){
        return memo[key]
    }
    
    if(i === triangle.length-1){
       return triangle[i][j]
    }
    
    memo[key] = triangle[i][j] + Math.min(minTot(i+1, j, triangle, memo), minTot(i+1, j+1, triangle, memo))
    return memo[key]
}
