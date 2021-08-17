

function sales(graph, visited, currNode){
  let allvisited = true
  for(let i = 0; i < visited.length; i++){
    if(visited[i] === 0){
      allvisited = false
      break;
    }
  }

  if(allvisited){
      return graph[currNode][1]
  }

  let min = Number.MAX_SAFE_INTEGER
  for(let i = 0; i < graph[currNode].length; i++){
    if(visited[i] != 1 && graph[currNode][i] != 0){
        visited[i] = 1
        let cost = graph[currNode][i]
        min = Math.min(min, cost + sales(graph, visited, i))
        visited[i] = 0
    }
  }

  return min
}

let graph = [[0, 10, 15, 20], [5, 0, 9, 10], [6, 13, 0, 12], [8, 8, 9, 0]]
let visited = [1, 0, 0, 0]


console.log(sales(graph, visited, 0))
