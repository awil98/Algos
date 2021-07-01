var countSubstrings = function(s) {
    let total = 0
    //O(n^2) solution
    for(let i = 0; i < s.length; i++){
        let left = i
        let right = i
        while(left >=0 && right < s.length && s[left] === s[right]){
              total++
              left--
              right++  
        }
        
        left = i
        right = i+1
        while(left >= 0 && right < s.length && s[left] === s[right]){
            total++
            left--
            right++
        }
    }
    
    return total
};
