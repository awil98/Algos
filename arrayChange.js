/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be -> [1, 2, 1] -> [1, 2, 2] -> [1, 2, 3]
arrayChange(inputArray) = 3
*/

function arrayChange(inputArray) {
    /*
      Just keep track of what the lowest value is and if the value at your current index isn't 
      greater than the value that means it needs to be incremented
    */
    let lowest = inputArray[0]
    let count = 0
    let index = 1
    
    while(index < inputArray.length){

        while(inputArray[index] <= lowest){
            count++
            inputArray[index]++
        }
        
        lowest = inputArray[index++]
    }
    
    
    return count
}
