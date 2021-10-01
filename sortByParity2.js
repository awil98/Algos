/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3]
*/

var sortArrayByParityII = function(nums) {
   /*I'm going to use a modified selection sort algorithm
    *if i is even and the value at i is even i can continue
    *if the value at i is odd then while j < nums.length
    *I just want to check if j is odd and the value at j is odd once satisfied stop
    *searching and swap i and j
    *Do the same if the i value is odd and nums[i] is even
    */
    for(let i = 0; i < nums.length; i++){
        let j = i + 1
        
        if(nums[i] % 2 === 0 && i % 2 === 0 || nums[i] % 2 != 0 && i % 2 != 0){
           
            continue
            
        }else if(nums[i] % 2 != 0 && i % 2 === 0){
            
            while(j < nums.length){
                if(j % 2 != 0 && nums[j] % 2 === 0){
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break
                }
                j++
            }
            
            continue
            
        }else if(nums[i] % 2 === 0 && i % 2 != 0){
            
            while(j < nums.length){
                if(j % 2 === 0 && nums[j] % 2 != 0){
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break
                }
                j++
            }
            
            continue
        }
    }
    
    return nums
};
