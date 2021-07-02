/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's,
and return the matrix.

You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

var setZeroes = function(matrix) {
    let colLen = matrix[0].length //the number of columns in my matrix
    let rowLen = matrix.length // the number of rows in my matrix
    let setFirstRow = false //this is going to let know if I need to set the entire first row to 0 with potentially causing me to set to many things to zero
    
    for(let i = 0; i < rowLen; i++){ //loop through the entire array and search for values that are set to zero
        for(let j = 0; j < colLen; j++){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0 //Once I find a zero I can set that columns first element to zero to notate that I have to set this column to zero
                if(i > 0){  //Then I can check if I'm in the first row. If I'm not I can set that rows first item to zero otherwise I need to set my first row to true
                   matrix[i][0] = 0
                }else{
                    setFirstRow = true
                }
            }
        }
    }
    
    for(let i = 1; i < rowLen; i++){ //I skip the first row and column and set the other rows and columns that start with zero to zero
        for(let j = 1; j < colLen; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
               matrix[i][j] = 0
            }
        }
    }
    
    if(matrix[0][0] === 0){ // I check if my first element is a zero if it is then I can make the first column zero
        for(let i = 0; i < rowLen; i++){
            matrix[i][0] = 0
        }
    }
    
    if(setFirstRow){ // Now I can safely make my first row zero without accidentally adding to many zeros
        for(let j = 0; j < colLen; j++){
            matrix[0][j] = 0
        }
    }
};
