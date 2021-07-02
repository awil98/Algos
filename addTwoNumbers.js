/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Examples:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
var addTwoNumbers = function(l1, l2) {
    let carry = 0 //keep track of potential carries in addition
    let head3 = null
    
    let current1 = l1 //I take a variable so that I don't have to overwrite my heads
    let current2 = l2
    let current3 = head3
    
    while(current1 != null || current2!= null){ //while either aren't null I still have to add values from a node
        if(head3 === null){ 
           let value = current1.val + current2.val
           carry = Math.floor(value / 10) //check for potential carry i.e. number > 10
           head3 = new ListNode((value%10), null)
           current3 = head3 
           current1 = current1.next
           current2 = current2.next
           continue 
        }
        
        let val1 = current1 === null ? 0 : current1.val //check if either node is null if it is then just set it to zero
        let val2 = current2 === null ? 0 : current2.val
        let total = val1 + val2 + carry //if there is a carry then it should added otherwise it'll be zero
        carry = Math.floor(total / 10) //recompute the carry
        total = (total % 10)
        current3.next = new ListNode(total, null)//Make my current's next node the new node
        current3 = current3.next //Then move to this node
        if(current1 != null){ //check whether I have to advance the nodes
            current1 = current1.next
        }
        if(current2 != null){
            current2 = current2.next
        }
    }
    
    if(carry != 0){ // edge case where I've gone through all of my nodes but I still have a carry ex: 8+7 = 5 with a 1 that is carried
        current3.next = new ListNode(carry, null)
    }
    
    return head3
};
