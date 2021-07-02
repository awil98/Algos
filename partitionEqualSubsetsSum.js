/*
Given a non-empty array nums containing only positive integers, find if the array can be 
partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
*/

var canPartition = function(nums) {
    let sum = 0
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    
    if(sum % 2 != 0) return false
    let memo = {}
    
    return getSolution(nums, sum/2, 0, memo)
};


function getSolution(nums, target, index, memo){
    
    if(target in memo) return memo[target]
    
    if(target === 0){
        return true
    }
    
    if(target < 0 || index >= nums.length){
        return false
    }
    
    if(getSolution(nums, target-nums[index], index+1, memo) || getSolution(nums, target, index+1, memo)){ 
        memo[target] = true
        return true
    }
    memo[target] = false
    return false
}
