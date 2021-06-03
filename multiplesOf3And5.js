/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
  let sum = 0;
  let nums = [] //holds the multiples
  let counter = 1;
  while((counter * 3) < number){
    nums.push(counter * 3)
    counter++
  }
  counter = 1

  while((counter * 5) < number){
    //Check to see if the val already exists
    if(!nums.includes(counter*5)){
      nums.push(counter*5)
    }
    counter++
  }

  for(let i = 0; i< nums.length; i++){
    sum += nums[i]
  }

  console.log(sum)
  return sum;
}

multiplesOf3and5(49);
