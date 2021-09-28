/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
    /*
    A string can be rearranged to form a palindrome if at most one 
    of the characters in the string has a frequency of one
    
    With a time cap of 4 seconds. And upto a 50 char string a backtracking algorithm
    would take to much time
    */
    let map = {}
    
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] in map){
            map[inputString[i]]++
        }else{
            map[inputString[i]] = 1 
        }
    }
    
    let oddChars = 0
    
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]] % 2 != 0){
            oddChars++
            if(oddChars > 1){
                return false
            }
        }
    }
    
    return true
}
