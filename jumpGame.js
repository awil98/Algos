/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/


var canJump = function(nums) {
   let memo = {} 
   return getSolution(nums, 0, memo)
};

function getSolution(nums, index, memo){
    if(index in memo){
        return memo[index]
    }
    if(index >= nums.length -1){
       return true
    }
    
    
    for(let i = 1; i <= nums[index]; i++){
        let newIndex = index + i
        if(getSolution(nums, newIndex, memo)){
            memo[index] = true
            return true
        }
    }
    memo[index] = false
    return false
}
