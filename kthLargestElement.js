/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

var findKthLargest = function(nums, k) {
    let heap = []
    
    for(let i = 0; i < nums.length; i++){
        insert(heap, nums[i])
    }
    
    for(let i = heap.length -1; i >= 0; i--){
        removeEle(heap, i)
    }
    
    return heap[heap.length-k]
};

function insert(heap, ele){
    heap.push(ele)
    
    let current = heap.length -1
    
    while(Math.floor((current-1)/2) >= 0 && heap[current] > heap[Math.floor((current-1)/2)]){
        let temp = heap[current]
        heap[current] = heap[Math.floor((current-1)/2)]
        heap[Math.floor((current-1)/2)] = temp
        current = Math.floor((current-1)/2)
    }
}

function removeEle(heap, n){
    let remove = heap[0]
    heap[0] = heap[n]
    let current = 0
    let largerChild = current * 2 + 1
    
    while(largerChild < n){
        if(largerChild+1 < n && heap[largerChild +1] > heap[largerChild]){
           largerChild = largerChild + 1
        }
        
        if(heap[largerChild] > heap[current]){
           let temp = heap[current]
           heap[current] = heap[largerChild]
           heap[largerChild] = temp
           current = largerChild
           largerChild = largerChild * 2 + 1 
        }else{
           break            
        }
    }
    
    heap[n] = remove
    return remove
}
