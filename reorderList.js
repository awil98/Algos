/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/

var reorderList = function(head) {
    if(head.next === null){
        return
    }
    let walker = head
    let runner = head
    let pre = null
    
    while(runner != null && runner.next != null){
        pre = walker
        walker = walker.next
        runner = runner.next.next
    }
    
    pre.next = null
    pre = null
    
    while(walker != null){
        let next = walker.next
        walker.next = pre
        pre = walker
        walker = next
    }
    
    let dummy = new ListNode(0)
    let dc = dummy
    
    while(head != null){
        dc.next = head
        head = head.next
        dc = dc.next
        dc.next = pre
        pre = pre.next
        dc = dc.next
    }
    
    while(pre != null){
        dc.next = pre
        dc = dc.next
        pre = pre.next
    }
    
    head = dummy.next
};
