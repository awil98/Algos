/**
Given a set of n people (numbered 1, 2, ..., n), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
 */
var possibleBipartition = function(n, dislikes) {
    let adjList = {}
    let visited = []
    
    for(let i = 1; i <= n; i++){
        adjList[i] = []
        visited[i] = 0
    }
    
    for(let i = 0; i < dislikes.length; i++){
        adjList[dislikes[i][0]].push(dislikes[i][1])
        adjList[dislikes[i][1]].push(dislikes[i][0])
    }
    
    for(let i = 1; i <= n; i++){
        if(visited[i] === 0 && !dfs(adjList, visited, 1, i)){
            return false   
        }
    }
    return true
};

function dfs(adjList, visited, group, val){
    visited[val] = group
    
    for(let i = 0; i < adjList[val].length; i++){
        if(visited[adjList[val][i]] === group){
           //check if neighbor is in same group
           return false 
        }
        if(visited[adjList[val][i]] === 0 && !dfs(adjList, visited, group * -1, adjList[val][i])){
            //check if it's already visited and if I can group my neighbor's neighbors
            return false
        }
    }
    return true
    
}
