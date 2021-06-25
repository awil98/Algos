/*
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

var subsetsWithDup = function(nums) {
    let result = []
    nums.sort((a,b) => a - b)
    
    function getSubSet(index=0, subset=[]){

        result.push([...subset])
        
        for(let i = index; i < nums.length; i++){
            if(i != index && nums[i] === nums[i-1]){
                continue
            }
            subset.push(nums[i])
            getSubSet(i+1, subset)
            subset.pop()
        }
    }
    
    getSubSet()
    
    return result
};
