/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
*/

var maxProduct = function(nums) {
    /*
    O(n^2) solution
    if(nums.length === 1) return nums[0]
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < nums.length; i++){
        let total = nums[i];
        if(total > max){ //this is to handle the edge case where I have a zero
            max = total
        }
        for(let j = i+1; j < nums.length; j++){
            total *= nums[j]
            if(total > max){
                max = total
            }
        }
    }
    
    return max
    */
    //O(n) solution
    let max = Number.MIN_SAFE_INTEGER
    let currentMin = 1
    let currentMax = 1
    
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === 0){
            currentMin = 1
            currentMax = 1
        }
        
        let temp = currentMin
        currentMin = Math.min(currentMin * nums[i], currentMax * nums[i], nums[i])
        currentMax = Math.max(currentMax * nums[i], temp * nums[i], nums[i])
        max = Math.max(max, currentMax)
    }
    
    return max
};
