/*
Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column),
where k can be of any size. 
At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2
Example 2:

Input: board = [["."]]
Output: 0
*/

var countBattleships = function(board) {
    let count = 0
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === "X"){
                dfs(board, i , j)
                count++
            }
        }
    }
    
    return count
};

function dfs(board, i , j){
    if(i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != "X"){
       return 0
    }
    
    board[i][j] = "."
    dfs(board, i + 1, j)
    dfs(board, i - 1, j)
    dfs(board, i, j + 1)
    dfs(board, i, j - 1)
}
