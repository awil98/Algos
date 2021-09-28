/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim"
*/

function reverseInParentheses(inputString) {
    let result = ""
    let index = 0
    
    while(index < inputString.length){
        if(inputString[index] === "("){
            let obj = reverse(inputString, index+1)
            console.log(obj)
            index = obj.index 
            result += obj.string
        }else{
            //just copy the character to the result string
            result += inputString[index++]
        }
    }
    
    return result
}

function reverse(input, index){
    let string = ""
    
    while(input[index] != ")"){
        if(input[index] === "("){
            let obj = reverse(input, index+1)
            string += obj.string
            index = obj.index
        }else{
            string += input[index++]
        }
    }
  
    index++
    
    //Revese the string and store it in result
    let res = ""
    let j = string.length-1
    while(j >= 0){
        res += string[j--]
    }
    
    string = res
    
    return { string, index }
}
