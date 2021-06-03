/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.
*/

function solution(array) {
    let sorted = array.sort((a,b) => a - b)//sort the array
    let updated = sorted.filter((ele)=> ele > 0)//filter out negative values

    if(updated.length === 0 || updated[0] != 1){
      //If the there are no values in the array or if the first value isn't 1
      return 1
    }

    let updateTwo = [] //remove duplicate values

    updated.forEach((item) => {
      if(!updateTwo.includes(item)){
        updateTwo.push(item)
      }
    });

    //If theres a skipped value then return that value
    for(let i = 1; i < updateTwo.length; i++){
      if(updateTwo[i] != updateTwo[i-1] + 1){
        return (updateTwo[i-1]+1)
      }
    }
    //return what the next value in the array would be
    return updateTwo[updateTwo.length -1] + 1
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))
console.log(solution([-1, -3, 4]))
console.log(solution([-1, -3, 1, 2, 4]))
