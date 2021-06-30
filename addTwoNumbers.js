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
*/
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let head3 = null
    
    let current1 = l1
    let current2 = l2
    let current3 = head3
    
    while(current1 != null || current2!= null){
        if(head3 === null){
           let value = current1.val + current2.val
           carry = Math.floor(value / 10)
           head3 = new ListNode((value%10), null)
           current3 = head3 
           current1 = current1.next
           current2 = current2.next
           continue 
        }
        
        let val1 = current1 === null ? 0 : current1.val
        let val2 = current2 === null ? 0 : current2.val
        let total = val1 + val2 + carry
        carry = Math.floor(total / 10)
        total = (total % 10)
        current3.next = new ListNode(total, null)
        current3 = current3.next
        if(current1 != null){
            current1 = current1.next
        }
        if(current2 != null){
            current2 = current2.next
        }
    }
    
    if(carry != 0){
        current3.next = new ListNode(carry, null)
    }
    
    return head3
};
