/*
Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.
*/

var letterCasePermutation = function(s) {
    let holder = []
    
    
    function backT(index=0, value=""){
        
        if(index === s.length){
            holder.push(value)
            return null
        }
        
        if(s[index] >= '0' && s[index] <= '9'){
           backT(index+1, value+=s[index])
        }else{
            let result = value + s[index].toUpperCase()
            let result2 = value + s[index].toLowerCase()
            backT(index+1, result)
            backT(index+1, result2)
        }
    }
    
    backT()
    
    return holder
};
