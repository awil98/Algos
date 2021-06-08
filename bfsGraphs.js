/*
Preform a bfs on a graph that's represented with a adjacency matrix

*/

let adjacencyMatrix = [
  [0,0,0,0,0,0,0,0],
  [0,0,1,1,1,0,0,0],
  [0,1,0,1,0,0,0,0],
  [0,1,1,0,1,1,0,0],
  [0,1,0,1,0,1,0,0],
  [0,0,0,1,1,0,1,1],
  [0,0,0,0,0,1,0,0],
  [0,0,0,0,0,1,0,0]
]

function bsf(matrix, n, start){
  let queue = []//this is for holding the verties that need to be explored
  let visited = []//this is for keeping track of the verties that have been visted
  let u; // this is for holding the current vertex that being explored
  for(let i = 0; i <=n; i++){
    //fill the visted array with zeros to notate that none of the verties have been visted
    visited[i] = 0;
  }
  visited[start] = 1
  console.log(`Visited: ${start}`)
  //set start vertex for exploration
  queue.unshift(start)
  while(queue.length != 0){
    u = queue.shift() // dequeue first item and explore it's edges
    for(let i = 1; i <= 7; i++){
      if(matrix[u][i] != 0 && visited[i] === 0){
        visited[i] = 1
        queue.push(i)
        console.log(`Visited: ${i}`)
      }
    }
  }

}

bsf(adjacencyMatrix, 7, 1)
