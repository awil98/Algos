/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101
*/

function deleteDigit(n) {
    /**
     * Create a max int var that initally set to smallest possible value
     * next create a position variable that keeps track of position to skip
     * use two for loops loops outer for loop will use the position var to 
     * keep track of what index to skip. Inside of outer for loop create a str
     * that will be built using inner loop. Inner for loop will add digits to str
     * skipping the position index. After finishing loop simply do 
     * max = Math.max(max, parseInt(str))
     */
    
    let max = Number.MIN_SAFE_INTEGER
    let position = 0
    n = n.toString()
    
    for(; position < n.length; position++){
        let str = ""
        for(let i = 0; i < n.length; i++){
            if(i === position){
                continue
            }else{
                str += n[i]
            }
        }
        max = Math.max(max, parseInt(str))
    }
    
    return max
}
