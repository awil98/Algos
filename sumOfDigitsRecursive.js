/*
Write a recursive function that, given a number  n, returns the sum of the digits of the
number n.
*/

/*Thoughts:
simplest input is a number with only 1 digit
If the number only has 1 digit return that 1 digit and it's the base case
sum(1) -> 1 -> n[0]
sum(9) -> 9 -> n[0]
sum(11) -> 2 -> n[0] + sum(n, 1)
sum(11) -> 2 -> n[counter] + sum(n, counter++)
*/
function sum(n, counter){
  let value = n.toString()

  if(counter === value.length -1){
    return parseInt(value[counter])
  }

  let number = parseInt(value[counter])
  counter += 1
  return number + sum(n, counter)
}

console.log(sum(910, 0))
console.log(sum(911, 0))
console.log(sum(5243, 0))
