function buildPalindrome(st) {
    /**
     * Start at first character and ask if adding it to the end of the string will
     * create a palindrome. Next start at the second character and ask if second char and
     * then the first char will create a palindrome. Next start at the third char and ask
     * if third second and first char added to end of the string will create a palindrome
     */
    
    
    if(isPal(st)){
        return st
    }
    
    let start = 0
    
    while(start < st.length){
        
        let possPal = st 
        let counter = start 
        
        while(counter >= 0){
            possPal += st[counter--]
        }
        
        if(isPal(possPal)){
            return possPal
        }
        start++
    }
    
}

function isPal(str){
    let s = 0
    let e = str.length -1
    
    while(s < e){
        if(str[s] != str[e]){
            return false
        }
        s++
        e--
    }
    
    return true
}
