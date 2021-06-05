/*
Write a recursive function that checks whether a string is a palindrome (a palindrome is
a string that's the same when reads forwards and backwards.)
*/

/*
Thoughts:
The first thing that I need to do is break the problem down into simpler pieces
I need to find the reverse str and I need to compare it to the normal str and if they're
equl i need to return true else return false
So basically I'm going to implement reverse and I'm going to to add two more cases and
that differ what the return value will be
*/

function isPalindrome(str, counter){
  if(counter === 0){
    return str[counter]
  }else if(counter < str.length - 1){
    let char = str[counter]
    counter -= 1
    return char + isPalindrome(str, counter)
  }else{
    let char = str[counter]
    counter -= 1
    let reverse = char + isPalindrome(str, counter)
    return str === reverse
  }
}

console.log(isPalindrome('aba', 'aba'.length-1))
console.log(isPalindrome('ab', 'ab'.length-1))
console.log(isPalindrome('aa', 'aa'.length-1))
