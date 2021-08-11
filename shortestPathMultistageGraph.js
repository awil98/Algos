/*
This program find the shortest path for a multistage graph
and utilizes and adjacency list that has the connected node
at position 0 and the weight of the edge at position 1
*/

let graph = {
  "1": [[2,2], [3,3]],
  "2": [[4,4]],
  "3": [[4,5]],
  "4": []
}

const stages = 3
const nodes = 4
let cost = []
let d = []

for(let i = 0; i <= nodes; i++){
  cost[i] = 0
}

for(let i = 0; i <= stages; i++){
  d[i] = 0
}

cost[nodes] = 0

for(let i = nodes-1; i >= 1; i--){
  let min = Number.MAX_SAFE_INTEGER

  for(let j = 0; j < graph[i].length; j++){
    if(graph[i][j][1] + cost[graph[i][j][0]] < min){
      min = graph[i][j][1] + cost[graph[i][j][0]]
      d[i] = graph[i][j][0]
    }
  }
  cost[i] = min
}

let p = []
p[0] = 0
p[1] = 1
p[stages] = nodes
for(let i = 2; i < stages; i++){
  p[i] = d[p[i-1]]
}
console.log(p, cost[1])
