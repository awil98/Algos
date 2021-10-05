/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
*/


var oddEvenList = function(head) {
    
    /*
    Create a even dummy that'll contain all of the nodes at even indices
    Create a odd dummy that'll contain all of the nodes at odd indices
    Then remerge all of the nodes at even indices then all at odd by making
    evenCurrent.next = oddDummy.next
    */
    let oddDummy = new ListNode()
    let evenDummy = new ListNode()
    let oddCurrent = oddDummy
    let evenCurrent = evenDummy
    
    let val = 1
    while(head != null){  
        //break the link
        let next = head.next
        head.next = null
        
        if(val % 2 === 0){
           evenCurrent.next = head
           evenCurrent = evenCurrent.next
           evenCurrent.next = null 
        }else{
            oddCurrent.next = head
            oddCurrent = oddCurrent.next
        }
        head = next
        val++
    }
    
    oddCurrent.next = evenDummy.next
    return oddDummy.next
};
