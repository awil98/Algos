/*
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.
*/
var partition = function(s) {
    let result = []
    
    function generateParts(starting=0, combos=[]){
        
        if(starting === s.length){
            result.push([...combos])
            return null
        }
        
        for(let i = starting; i < s.length; i++){
            let possibility = s.substring(starting, i+1)
            if(checkIsPalin(possibility)){
                combos.push(possibility)
                generateParts(i+1, combos)
                combos.pop()
            }
        }
    }
    
    function checkIsPalin(str){
        let start = 0
        let end = str.length -1
        while(start <= end){
            if(str[start] != str[end]){
               return false
            }
            start++
            end--
        }
        return true
    }
    
    generateParts()
        
    return result
};
