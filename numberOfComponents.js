/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, 
then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/


var findCircleNum = function(isConnected) {
    
    let visited = []
    
    for(let i = 0; i < isConnected.length; i++){
        visited[i] = false
    }
    
    
    let count = 0
    for(let i = 0; i < isConnected.length; i++){
        if(visited[i] === false){
            count++
            dfs(isConnected, visited, i)
        }    
    }
    
    return count
};


function dfs(graph, visited, index){
    visited[index] = true
    
    for(let i = 0; i < graph[index].length; i++){
        if(visited[i] == false && graph[index][i] != 0){
            dfs(graph, visited, i)
        }
    }
}
