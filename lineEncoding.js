/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".
*/

function lineEncoding(s) {
    /***
     * Create a holder array and a position variable. Use a while loop that loops throught the 
     * string s. inside of this while loop create a str var that keeps track of the substring 
     * consisting of identical characters. Next create a inner while loop that continues to 
     * advance the position variable while the char at the current position is the same keep
     * copying chars then advance the position variable. After exiting the loop push the
     * newly created string on the array.
     * 
     * After finishing the while loops simply create a result variable and a for loop that loops 
     * through the substring in array and it adds number of chars with .length if > 1 and 
     * char at arr[0][0] 
     */
    
    let holder = []
    let position = 0
    
    while(position < s.length){
        let str = ""
        str += s[position++]
        while(s[position] === str[0]){
            str += s[position++]
        }
        holder.push(str)
    }
    
    
    let result = ""
    for(let i = 0; i < holder.length; i++){
        if(holder[i].length > 1){
            result = result + (holder[i].length).toString() + holder[i][0]
        }else{
            result = result + holder[i][0]
        }
    }
    return result
}
