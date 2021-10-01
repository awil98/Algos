/*
Given an integer array nums, move all the even integers 
at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
class Node{
        constructor(value, next){
            this.value = value === undefined ? 0 : value
            this.next = next === undefined ? null : next
        }
}
//I basically used a modified bucket sort algorithm O(n) time and space
var sortArrayByParity = function(nums) {
    let holder = []
    
    /* Loop through the input array and if a value is odd
    * add a node at index 1 of holder. If the value is 
    * even add it to index 0 of the holder array
    */
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
           insert(nums[i], 0, holder)
        }else{
           insert(nums[i], 1, holder) 
        }
    }
    
    //place the values in the linked lists into the nums array
    update(holder, nums)
    
    
    return nums
};

function update(holder, nums){
    /*Create an index variable that keeps track of index in nums array
     *Check if holder of 0 is undefined
     *if it is do nothing otherwise 
     *loop through the linked list and add values into nums array
     *use same logic for holder of 1
     */
    let index = 0
    
    if(holder[0] != undefined){
        let curr = holder[0]
        
        while(curr != null){
            nums[index++] = curr.value
            curr = curr.next
        }
        
    }
    
    if(holder[1] != undefined){
        let curr = holder[1]
        
        while(curr != null){
            nums[index++] = curr.value
            curr = curr.next
        }
    }
}


function insert(val, index, holder){
    /*If the value at holder of index is null then simply
    *create a new node with given val and place it the given index
    *If the value at given index isn't null then set curr
    *equal to the node at that index and traverse the linked list 
    *While curr.next != null 
    *After loop breaks simply set curr.next equal to the new node
    */
    let newNode = new Node(val)
    
    if(holder[index] === undefined){
       holder[index] = newNode
    }else{
        let curr = holder[index]
        while(curr.next != null){
            curr = curr.next
        }
        curr.next = newNode
    }
}
