var longestPalindrome = function(s) {
   
    let longest = ""
    
    for(let i = 0; i < s.length; i++){
        //odd length palindrome check
        let left = i
        let right = i
        let current = ""
        while(left >= 0 && right < s.length && s[left] === s[right]){
            
            if(left != right){
               current = s[left] + current + s[right]
            }else{
                current += s[left]
            }
            
            if(current.length > longest.length){
               longest = current
            }
            left--
            right++
        }
        //even length palidrome check
        right = i+1
        left = i
        current = ""
        while(left >= 0 && right < s.length && s[left] === s[right]){
            current = s[left] + current + s[right]
            if(current.length > longest.length){
                longest = current
            }
            left--
            right++
        }
    }
    
    return longest
     
   /*Brute Force O(n^2)*/
   /* let longest = ""
    for(let i = 0; i < s.length; i++){
        let current = ""
        for(let j = i; j < s.length; j++){
             current += s[j]
             if(isPalindrome(current)){
                longest = (longest.length >= current.length) ? longest : current
            }
        }
    }
    return longest*/
    
};
/*
function isPalindrome(str){
    let start = 0
    let end = str.length - 1
    
    while(start <= end){
        if(str[start] != str[end]){
            return false
        }
        start++
        end--
    }
    
    return true
}*/
