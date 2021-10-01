/*
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the 
distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.
*/

class Node{
    constructor(value, prev, next){
        this.value = value === undefined ? 0 : value
        this.prev = prev === undefined ? null : prev
        this.next = next === undefined ? null : next
    }
}

function circleOfNumbers(n, firstNumber) {
    /**
     * Implement a doubly linked list that links the last element to the first element
     * Then use two pointers that both start at the firstNumber and one goes backswards
     * and the other goes forward. whenever they meet this value will be at the radially opposite
     * position
     * 
     * To create a linked list simply make a function call with n and make the functions return
     * value the head of the linked list. So the function will create and return the head of the
     * linked list
     */
    
    let head = createList(n)
    let value = findPosition(head, firstNumber)
    
    return value
}

function findPosition(head, firstNumber){
    let curr = head 
    
    while(curr.value != firstNumber){
        curr = curr.next
    }
    
    let down = curr
    let up = curr
    
    do{
        down = down.prev
        up = up.next
    }while(down.value != up.value)
    
    return down.value
}

function createList(n){
    let head = new Node(0)
    let curr = head 
    let counter = 1
    
    while(counter < n){
        let newNode = new Node(counter)
        curr.next = newNode
        newNode.prev = curr
        curr = newNode
        counter++
    }
    
    curr.next = head
    head.prev = curr
    
    return head
}
