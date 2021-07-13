/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

var mergeKLists = function(lists) {
    let heap = []
    
    for(let i = 0; i < lists.length; i++){
        let head = lists[i]
        while(head != null){
            insert(heap, head.val)
            head = head.next
        }
    }
    
    let first = true
    let head = null
    let current = head
    
    while(heap.length != 0){ 
        let val = remove(heap)
        if(first){
            head = new ListNode(val)
            current = head
            first = false
        }else{
            current.next = new ListNode(val)
            current = current.next
        }
    }
    
   
   return head
};

function insert(heap, element){
    heap.push(element)
    let current = heap.length - 1
    
    while(Math.floor((current -1)/ 2) >= 0 && heap[current] < heap[Math.floor((current-1)/2)]){
          let temp = heap[current]
          heap[current] = heap[Math.floor((current -1)/ 2)]
          heap[Math.floor((current -1)/ 2)] = temp
          current = Math.floor((current -1)/ 2)
    }
}
function remove(heap){
    if(heap.length === 1){
       return heap.pop()
    }
    let removed = heap.shift()
    heap.unshift(heap.pop())
    
    let current = 0
    let smallerChild = current * 2 + 1
    
    while(smallerChild < heap.length){
        if(smallerChild + 1 < heap.length && heap[smallerChild + 1] < heap[smallerChild]){
            smallerChild = smallerChild + 1
        }
        if(heap[smallerChild] < heap[current]){
           let temp = heap[current]
           heap[current] = heap[smallerChild]
           heap[smallerChild] = temp
           current = smallerChild
           smallerChild = smallerChild * 2 + 1 
        }else{
            break
        }
    }
    
    return removed
}
