/*
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 
edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an 
edge between the nodes ui and vi. Return the center of the given star graph.

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
Example 2:

Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
*/

var findCenter = function(edges) {
    let adjacencyList = {}
    
    for(let i = 0; i < edges.length + 1; i++){
        adjacencyList[i+1] = []
    }
    
    for(let i = 0; i < edges.length; i++){
        adjacencyList[edges[i][0]].push(edges[i][1])
        adjacencyList[edges[i][1]].push(edges[i][0])
    }
    
    let largest = 0
    let value = 0
    
    let keys = Object.keys(adjacencyList)
    
    for(let i = 0; i < keys.length; i++){
        largest = Math.max(largest, adjacencyList[keys[i]].length)
        if(adjacencyList[keys[i]].length === largest){
            value = keys[i]
        }
    }
    
    
    return value
};
