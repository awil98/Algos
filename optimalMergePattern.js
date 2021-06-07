/*
GREEDY METHOD
An optimal merge pattern can be found by using a min heap and
always adding the smallest values in the min heap. These values should
always be the first two values. After adding these values remove them
from the heap and put their sum in the min heap
*/

function optimal(input){
  input.sort(function(a,b){ return a - b})
  let count = 0
  while(input.length > 1){
    //remove the first two elements
    let num1 = input.shift()
    let num2 = input.shift()
    //add them up and add sum to the min heap
    let sum = num1 + num2
    count += sum
    input.push(sum)
    //resort heap so that first two values always give smallest sum
    input.sort((a,b)=>(a-b))
  }
  return count
}

let filesSizes = [ 20, 30, 10, 5, 30 ]
let filesSizes2 = [ 6, 5, 2, 3 ]
console.log(optimal(filesSizes))
console.log(optimal(filesSizes2))
