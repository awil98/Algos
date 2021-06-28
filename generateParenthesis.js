/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/


var generateParenthesis = function(n) {
    let result = []
    
    function getCombos(opening, closing, combos){
        if(opening === closing && opening === n){
            result.push(combos)
            return null
        }
        if(opening === closing && opening != n){
           let updatedCombo = combos + '('
           getCombos(opening+1, closing, updatedCombo)
        }if(opening != n && opening > closing){
            let updatedCombo = combos + '('
            getCombos(opening+1, closing, updatedCombo)
            let updatedCombo2 = combos + ')'
            getCombos(opening, closing+1, updatedCombo2)
        }if(opening === n){
            let updatedCombo2 = combos + ')'
            getCombos(opening, closing+1, updatedCombo2)
        }
        
    }
    
    getCombos(0,0,"")
    
    return result
};
