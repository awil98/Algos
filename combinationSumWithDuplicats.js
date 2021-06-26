/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    let hash = []
    candidates.sort((a,b)=> a-b)
    for(let i = 0; i < candidates.length; i++){
        hash[i] = true
    }
    
    function comboSum2(startingIndex, target, combos=[]){
        if(target === 0){
            result.push([...combos])
            return null
        }
        
        if(target < 0){
           return null
        }
        
        for(let i = startingIndex; i < candidates.length; i++){
            if(i != startingIndex && hash[i-1] && candidates[i] === candidates[i-1]){
               continue
            }
            let newTarget = target - candidates[i]
            hash[i] = false
            combos.push(candidates[i])
            comboSum2(i+1, newTarget, combos)
            hash[i] = true
            combos.pop()
        }
    }
    
    
    comboSum2(0, target)
    
    return result
};
