/*
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
*/

var combine = function(n, k) {
    let result = []
   
    let nums = []
    
    for(let i = 0; i < n; i++){
        nums[i] = i+1
    }
    

    function combos(combo=[], startingIndex = 0){
        
        if(combo.length === k){
            result.push([...combo])
            return null
        }
        
       
        for(let i = startingIndex; i < nums.length; i++){
            combo.push(nums[i])
            combos(combo, i+1)
            combo.pop()
        }
        
    }
    
    combos()
    
    return result
};
