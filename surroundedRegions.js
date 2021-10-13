/*
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

Example 1:


Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if 
they are adjacent cells connected horizontally or vertically.
Example 2:

Input: board = [["X"]]
Output: [["X"]]
*/

var solve = function(board) {
    
    for(let i = 0; i< board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(i === 0 || i === board.length -1 || j === 0 || j === board[i].length -1){
               dfs(board, i, j) 
            }
        }
    }
    
    
    for(let i = 0; i< board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === "O"){
               board[i][j] = "X"
            }
            if(board[i][j] === "Z"){
               board[i][j] = "O"      
            }
        }
    }
};

function dfs(board, i, j){
    if(i < 0 || i > board.length -1 || j < 0 || j > board[i].length - 1 || board[i][j] != "O"){
        return    
    }
    
    board[i][j] = "Z"
    
    dfs(board, i+1, j)
    dfs(board, i-1, j)
    dfs(board, i, j+1)
    dfs(board, i, j-1)
}
