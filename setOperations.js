/*
Given a set element which are all parents of their set
Implement functions that creates unions of the set
and find the parent of any element in any set
*/

let set = [-1, -1, -1, -3, -4, 3, -1, 4, 4, 3, 4]


function union(node1, node2){
  /*it's going to take in two nodes and which ever node is either the parent of other
  nodes or has more children nodes will be made the parent
  */
  if(set[node1] < set[node2]){
    set[node1] = set[node1] + set[node2] //increase the elements in larger
    set[node2] = node1 //update the parent
  }else{
    set[node2] = set[node1] + set[node2]
    set[node1] = node2 //update the parent
  }
}


function find(node){
    //Basically just find the parent of a given node
    let parent = node //this is just to hold index value of parent
    /*I want to repeat tasks while set[i]  > 0*/
    while(set[parent] > 0){
      parent = set[parent]
    }
    return parent
}

union(3,4)
console.log(set)
console.log(find(9))//should return 4
console.log(find(3))//should return 4
