/*
In the popular Minesweeper game you have a board with some mines and those cells that don't 
contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
*/


function minesweeper(matrix) {
    let result = []
    
    for(let i = 0; i < matrix.length; i++){
        result.push([])
    }
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let total = 0
            if(j > 0 && matrix[i][j-1] === true){ //left
                total += 1
            }
            if(j < matrix[i].length - 1 && matrix[i][j+1] === true){ //right
                total += 1
            }
            if(i > 0 && matrix[i-1][j] === true){ //up
                total += 1
            }
            if(i < matrix.length -1 && matrix[i+1][j] === true){ //down
                total += 1
            }
            if(i > 0 && j > 0 && matrix[i-1][j-1] === true){ //up left
                total += 1
            }
            if(i < matrix.length -1 && j < matrix[i].length -1 && matrix[i+1][j+1] === true){ 
                //up right
                total += 1
            }
            if(i < matrix.length - 1 && j > 0 && matrix[i+1][j-1] === true){ //down left
                total += 1
            }
            if(i > 0 && j < matrix[i].length - 1 && matrix[i-1][j+1] === true){ //down right
                total += 1
            }
            result[i][j] = total
        }
    }
    
    
    return result
}
