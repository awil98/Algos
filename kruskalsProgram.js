/*
This algorithm states that you shuld find the lowest
weight not already visited and if it doesn't form a
cycle then add it.
*/
//This is to ensure that I always start with a value larger than my min
const maxNum = Number.MAX_SAFE_INTEGER

let edges = [
  [1,1,2,2,3,4,4,5,5],
  [2,6,3,7,4,5,7,6,7],
  [25,5,12,10,8,16,14,20,18]
]

let visited = [0,0,0,0,0,0,0,0,0]
let set = [-1,-1,-1,-1,-1,-1,-1,-1]

function union(node1, node2){
  //Now we're working only with the set creating union
  //Make the larger set the parent
  if(set[node1] < set[node2]){
    set[node1] = set[node1] + set[node2]
    set[node2] = node1
  }else{
    set[node2] = set[node1] + set[node2]
    set[node1] = node2
  }
}

function find(node){
  let parent = node
  //traverse the set until i find the parent
  while(set[parent] > 0){
    parent = set[parent]
  }

  return parent
}

function kruskals(n){
  //First off my spanning tree will have n-1 edges meaning I will need to loop through my edges that many times
  let loopCounter = 0//This is going to control how many times my loop executes 0->n-1 (6 times)
  let sum = 0 //This is going to be the cost of the min spanning tree
  let spanningTree = []

  while(loopCounter < n-1){
    let smallest = maxNum //this is going to keep track of the actual value at that index
    let index = 0//this is going to keep track of my lowest value index

    for(let i = 0; i < edges[2].length; i++){ //find the minimum value that hasn't been visited yet
      if(edges[2][i] < smallest && visited[i] != 1){
        index = i
        smallest = edges[2][i]
      }
    }

    //Mark that as index as visited so that it's skipped when searching for next min
    visited[index] = 1
    //Determine if using edges at index will create a cycle if so don't take them if not add them to union
    if(find(edges[0][index]) != find(edges[1][index])){
      sum += edges[2][index] //increment the sum
      //union(edges[0][index],edges[1][index]) //create a union with the parent of the verties not the specific verties
      union(find(edges[0][index]), find(edges[1][index]))
      let vertiesArray = [edges[0][index], edges[1][index]] //store the two verties in ds
      spanningTree.push(vertiesArray) // add them to my tree
      loopCounter++ //If vertex is added to union then i've found one of the verties of my tree and i need to increment
    }

    //loopCounter++ you don't put it here because it'll still run if element forms cycle and nothing added
  }
  console.log(sum)
  return spanningTree
}

console.log(kruskals(7))
