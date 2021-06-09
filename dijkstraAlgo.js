

const maxNum = Number.MAX_SAFE_INTEGER //this is just to simulate infinity being at an index


let parents = [-1, -1, -1, -1, -1, -1] //This is a set to keep track of what my tree should look like

let graph = [
  [0,1,4,0,0,0],
  [1,0,4,2,7,0],
  [4,4,0,3,5,0],
  [0,2,3,0,4,6],
  [0,7,5,4,0,7],
  [0,0,0,6,7,0]
]

function updateParent(parentIndex, childIndex){
  //to make this function as expected i need to make it so that a child which is a parent points to parent node
  parents[parentIndex] = parents[parentIndex] + parents[childIndex] //update parent to show total number of children
  parents[childIndex] = parentIndex // make child point to parent
}


function dijkstra(start,n){
  let values = [] //this is going to keep track of my accumulated distances as i traverse graph
  let visited = [] //this is going to store the indexes that have already been visited
  let minValue = maxNum //this is to ensure my smallest value isn't looked over
  let indexOfMinValue = maxNum //this is keep track of where my smallest value is occuring

  for(let i = 0; i < n; i++){
    if(i === start){ //make the startingIndex value equal to zero since the distance to that point is zero
      values[i] = 0
      continue
    }
    values[i] = maxNum //make every other value the largest value possible
  }

  while(visited.length < n){
    //find the index value of smallest value in values array
    for(let i = 0; i < values.length; i++){
      if(!visited.includes(i) && values[i] < minValue){
        indexOfMinValue = i
        minValue = values[i]
      }
    }

    //now that i have the value of my smallest I need to relax any values that havent already been explored
    for(let j = 0; j < graph[indexOfMinValue].length; j++){
        if((graph[indexOfMinValue][j] != 0) && graph[indexOfMinValue][j] + values[indexOfMinValue] < values[j] && !visited.includes(j)){
          values[j] = graph[indexOfMinValue][j] + values[indexOfMinValue] //update the value in value array at adjacent position
          updateParent(indexOfMinValue, j) //update the parent of the child element
        }
    }

    visited.push(indexOfMinValue)//add the index value so i don't look at it again
    minValue = maxNum //if you don't reset this value here it stays at 0 because there's no other number that's smaller than it
  }

  return values
}


let distances = dijkstra(0, 6)
console.log(`With graph\n \n${graph[0]}:\n${graph[1]}:\n${graph[2]}:\n${graph[3]}:\n${graph[4]}:\n${graph[5]}:\n`)
distances.forEach((item, i)=>{
  console.log(`Shortest distance from 0 to ${i} is ${item}`)
})
