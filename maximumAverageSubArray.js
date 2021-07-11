/*
O(N) solution with O(1) space

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

var findMaxAverage = function(nums, k) {
    let maxAverage = Number.MIN_SAFE_INTEGER
    let left = 0
    let right = 0
    let total = 0
    let count = 0
    
    for(;right < nums.length; right++){
        total += nums[right]
        count++
        if(count === k){
           maxAverage = Math.max(maxAverage, (total / k))
           total -= nums[left]
           left++
           count-- 
        }
    }
    
    return maxAverage
};
