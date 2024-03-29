/*
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

 

Example 1:

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
Example 2:

Input: nums = [9], target = 3
Output: 0
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 1000
All the elements of nums are unique.
1 <= target <= 1000
*/

var combinationSum4 = function(nums, target) {
    let memo = {}
    return numOfCombos(nums, target, memo)
};

function numOfCombos(nums, target, memo){
    if(target in memo){
        return memo[target]
    }
    if(target === 0){
        return 1
    }
    if(target < 0){
        return 0
    }
    
    let totalWays = 0
    
    for(let i = 0; i < nums.length; i++){
        let newTarget = target - nums[i]
        totalWays += numOfCombos(nums, newTarget, memo)
    }
    memo[target] = totalWays
    return totalWays
}
