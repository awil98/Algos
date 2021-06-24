/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.
*/

var setZeroes = function(matrix) {
    let colLen = matrix[0].length //the number of columns in my matrix
    let rowLen = matrix.length // the number of rows in my matrix
    let setFirstRow = false
    
    for(let i = 0; i < rowLen; i++){
        for(let j = 0; j < colLen; j++){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0
                if(i > 0){
                   matrix[i][0] = 0
                }else{
                    setFirstRow = true
                }
            }
        }
    }
    
    for(let i = 1; i < rowLen; i++){
        for(let j = 1; j < colLen; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
               matrix[i][j] = 0
            }
        }
    }
    
    if(matrix[0][0] === 0){
        for(let i = 0; i < rowLen; i++){
            matrix[i][0] = 0
        }
    }
    
    if(setFirstRow){
        for(let j = 0; j < colLen; j++){
            matrix[0][j] = 0
        }
    }
};
