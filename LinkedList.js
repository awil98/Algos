class LinkedListNode{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
  toString(callback){
    return callback ? callback(this.value): `${this.value}`
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }

  prepend(value){
    /*Adds a node to the head of linked list*/
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode;

    /*If no tail exists make a new one*/
    if(!this.tail){
      this.tail = newNode
    }
    return this;
  }

  append(value){
    const newNode = new LinkedListNode(value)

    if(!this.head){
      this.head = newNode
      this.tail = newNode

      return this;
    }

    const currentTail = this.tail
    currentTail.next = newNode
    this.tail = newNode
    return this
  }

  
  find(value){
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If value is specified then try to compare by value..
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode); 
      nodes.push(currentNode); // For testing if nodes with the same reference are equal
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  
}


let myLinked = new LinkedList
myLinked.append(5)
let arr = myLinked.toArray()
console.log(arr[0] === arr[1]) //This is true because it's a reference to the object
myLinked.toString(console.log)
