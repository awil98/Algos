/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

*/

function largestPrimeFactor(number) {
  let facs = []
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      facs.push(i)
      while(number % i === 0){
        number = number / i
      }
    }
  }
  if(number != 1){
    facs.push(number)
  }

 return facs[facs.length-1]
}

largestPrimeFactor(600851475143);
