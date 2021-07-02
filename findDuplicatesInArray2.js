/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, 
return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
*/

var findDuplicates = function(nums) {
    let result = []
    
    for(let i = 0; i < nums.length; i++){ //keeping track of all of the values already seen by making related indices negative
        if(nums[Math.abs(nums[i])-1] > 0){
           nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1]
        }else{
            result.push(Math.abs(nums[i]))
        }
    }
    
    return result
};
