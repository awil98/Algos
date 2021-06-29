/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Input: nums = [0]
Output: 0
*/

var rob = function(nums) {
    if(nums.length === 1) return nums[0]
   
    return Math.max(findMax(nums.slice(0, nums.length-1)), findMax(nums.slice(1)))
};

function findMax(nums){
    
    let dp = []
   
    for(let i = 0; i <= nums.length; i++){
       dp[i] = 0
    }
    
    dp[1] = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        dp[i+1] = Math.max(nums[i] + dp[i-1], dp[i])
    }
    
    return dp[nums.length]
}
