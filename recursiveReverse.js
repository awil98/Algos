/*
Write a recursive function that, given a string s, prints the characters of s in reverse order.
*/

/*
Thoughts:
the simplest case will occur when my input string is only a single character
reverse('a') -> a
reverse('ab') -> str[str.length-1] + reverse('a')
reverse('abc') -> str[str.length-1] + reverse('ab')
so I could use counter variable that keeps track of where I am in the string and
if the counter === 0 then return the character
*/

function reverse(str, counter){
  if(counter === 0){
    return str[counter]
  }
  let char = str[counter]
  counter -= 1
  return char + reverse(str, counter)
}

console.log(reverse('a', 'a'.length-1))
console.log(reverse('ab', 'ab'.length-1))
console.log(reverse('abc', 'abc'.length-1))
