/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node 
from the beginning and the kth node from the end (the list is 1-indexed).

Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
Example 3:

Input: head = [1], k = 1
Output: [1]
Example 4:

Input: head = [1,2], k = 1
Output: [2,1]
Example 5:

Input: head = [1,2,3], k = 2
Output: [1,2,3]
*/

var swapNodes = function(head, k) {
    let val = k 
    let start = head
    
    while(val > 1){
        val--
        start = start.next
    }
    
    let second = head
    let runner = head
    
    while(k > 0){
        runner = runner.next
        k--
    }
    
    while(runner != null){
        runner = runner.next
        second = second.next
    }
    
    let temp = start.val
    start.val = second.val
    second.val = temp
    
    return head
};
