
/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Input: graph = [[1],[]]
Output: [[0,1]]
Example 4:

Input: graph = [[1,2,3],[2],[3],[]]
Output: [[0,1,2,3],[0,2,3],[0,3]]
Example 5:

Input: graph = [[1,3],[2],[3],[]]
Output: [[0,1,2,3],[0,3]]
*/
var allPathsSourceTarget = function(graph) {
    let holder = []
    let result = []
    
    dfs(graph, 0, holder, result)
    
    return result
};

function dfs(graph, index, holder, result){
    if(index === graph.length -1){
        holder.push(index)
        result.push([...holder])
        holder.pop()
    }else{
        for(let i = 0; i < graph[index].length; i++){
            holder.push(index)
            dfs(graph, graph[index][i], holder, result)
            holder.pop()
        }
    }
}
