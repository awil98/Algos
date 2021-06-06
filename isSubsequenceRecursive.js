/*
Write a recursive function that, given two strings, returns whether the first string is a
subsequence of the second. For example, given hac and cathartic, you should return true,
but given bat and table, you should return false.
*/

/*
First attemp:
  if(counter === sub.length - 1){
    return str.indexOf(sub[counter])
  }
  let index = str.indexOf(sub[counter])
  counter += 1
  return index < isSubsequence(str, sub, counter)
  This won't work because if sub char is present in the str multiple times
  it won't just return the value of the one after the first sub char
*/
/*
Second Attempt Thoughts:
  I can take in the sub, the string, and a counter for sub and string.
  If sub[i] === string[j] I want to increase i
  if sub[i] != string[j] I want to increase j
  if i reach the end of string before I reach the end of sub I want to return false
  if I reach the end of sub before I reach the end of string I want to return true
  and if they're both at the end I want to return true which means I need to put if(i === sub.length) return true first
*/

function isSubsequence(string, sub, i, j){
  if(i === sub.length){
    return true
  }else if(j === string.length){
    return false
  }else if(string[j] === sub[i]){
    i += 1
    j += 1
    return isSubsequence(string, sub, i, j)
  }else{
    j += 1
    return isSubsequence(string, sub, i, j)
  }
}


console.log(isSubsequence('cathartic', 'hac', 0, 0))
console.log(isSubsequence('table', 'bat', 0, 0))
