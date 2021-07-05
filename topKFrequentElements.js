/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/


var topKFrequent = function(nums, k) {
    //create a map that corresponds to value and frequency
    let map = {}
    let result = []
    let heap = []
    let holder = []
    
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = map[nums[i]] === undefined ? 1 : map[nums[i]]+1
    }
    let keys = Object.keys(map)
    
    keys.forEach((ele)=>{
        let obj = {
            "num": ele,
            "frequency": map[ele]
        }
        holder.push(obj)
    })
    
    for(let i = 0; i < holder.length; i++){
        insert(heap, holder[i])
    }
   
    for(let i = heap.length -1; i > (heap.length - 1) - k; i--){
        let value = removeElement(heap, i)
        result.push(value['num'])
    }
    
    return result
};

function insert(heap, ele){
   heap.push(ele)
   let current = heap.length - 1     
    
   while(Math.floor((current-1)/2) >= 0 && heap[Math.floor((current-1)/2)]['frequency'] < heap[current]['frequency']){
         let temp = heap[current]
         heap[current] = heap[Math.floor((current-1)/2)]
         heap[Math.floor((current-1)/2)]  = temp
         current = Math.floor((current-1)/2)   
   } 
    
}

function removeElement(heap, n){
    let remove = heap[0]
    heap[0] = heap[n]
    let current = 0
    let leftChild = current * 2 + 1
    
    
    while(leftChild < n){
        if(leftChild+1 < n && heap[leftChild]['frequency'] < heap[leftChild+1]['frequency']){
           leftChild = leftChild+1
        }
        if(heap[current]['frequency'] < heap[leftChild]['frequency']){
            let temp = heap[current]
            heap[current] = heap[leftChild]
            heap[leftChild] = temp
            current = leftChild
            leftChild = leftChild * 2 + 1
        }else{
            break
        }
        
    }
    
    heap[n] = remove
    return remove
}
