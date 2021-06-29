/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/


var letterCombinations = function(digits) {
    let result = []
    
    let mappings = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    
    if(digits.length === 0 || digits === null){
        return result
    }
    
    function generateCombinations(index, current){
        if(index === digits.length){
            result.push(current)
            return null
        }
        
        let letters = mappings[digits[index]]
        for(let i = 0; i < letters.length; i++){
            generateCombinations(index+1, current + letters[i])
        }
    }
    
    generateCombinations(0, "")
    
    return result
};
