/*
Huffman coding
step 1: create a leaf node for each unique character and build a min heap
of all leaf nodes
step 2: add the two smallest values and remove them from the heap. The smallest of
the two values will be set as the resulting nodes left and the larger as the
resulting node's right adding either 0 if it's a left child or 1 if its a right child.
So basically create a min heap and convert it to a tree that's stored in the array
as one node with many children elements.
*/

class Node{
  constructor(letter = null, value, code = "", left = null, right = null){
    this.letter = letter
    this.value = value
    this.code = code
    this.left = left
    this.right = right
  }
}

function huffman(chars, values){
  //This is to store my heap nodes
  let minHeap = []
  for(let i = 0; i < chars.length; i++){
      minHeap.push(new Node(chars[i], values[i]))
  }


  while(minHeap.length > 1){
      //Generate huffman tree by finding optimal merge pattern
      let left = minHeap.shift()
      let right = minHeap.shift()
      let sum = left.value + right.value
      //Set the left and right code values
      left.code = "0"
      right.code = "1"
      //Create a new node and add it to the min heap
      let newNode = new Node(null, sum,"", left, right)
      minHeap.push(newNode)
      minHeap.sort((a,b)=>{
        return a.value - b.value
      })
  }

  return minHeap
}

function setCodeAndPrint(node, inputCode=""){
  //keep track of the codes that i've seen
  let nodeCode = inputCode + node.code
  //recursively traverse the Huffman Tree depth first?
  if(node.left != null){
    setCodeAndPrint(node.left, nodeCode)
  }
  if(node.right != null){
    setCodeAndPrint(node.right, nodeCode)
  }
  //When I hit a leaf node update it's code and print it out
  if(node.right === null && node.left === null){
      node.code = nodeCode
      console.log(`${node.letter}-${node.code}`)
  }

}

let ch = ['E', 'A', 'D', 'B', 'C']
let vals = [2, 3, 4, 5, 6]

let huffmanTree = huffman(ch, vals)
setCodeAndPrint(huffmanTree[0])
