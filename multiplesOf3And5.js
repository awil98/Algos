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
