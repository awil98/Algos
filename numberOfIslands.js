var numIslands = function(grid) {
    let total = 0
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === "1"){
               dfs(grid, i, j)
               total++ 
            }
        }
    }
    
    return total
};

function dfs(grid, i, j){
    
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] != "1") return 
    
    grid[i][j] = "-1"
    
    dfs(grid, i+1, j) //down
    dfs(grid, i-1, j)//up
    dfs(grid, i, j+1)//right
    dfs(grid, i, j -1)//left
}
