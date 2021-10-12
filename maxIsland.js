var maxAreaOfIsland = function(grid) {
    let max = 0
    
    for(let i = 0; i < grid.length; i++){
        for(let j =0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
               max = Math.max(dfs(grid, i, j), max)
            }
        }
    }
    
    return max
};

function dfs(grid, i, j){
    
    if(i < 0 || i > grid.length -1 || j < 0 || j > grid[i].length -1 || grid[i][j] != 1){
        return 0
    }
    
    grid[i][j] = -1
    
    return dfs(grid, i+1, j) + dfs(grid, i -1, j) + dfs(grid, i, j+1) + dfs(grid, i, j-1) + 1
    
}
