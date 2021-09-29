/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4
*/

function avoidObstacles(inputArray) {
    let position = 0
    let jump = 1
    let largest = Number.MIN_SAFE_INTEGER
    let map = {}
    
    for(let i = 0; i < inputArray.length; i++){
        largest = Math.max(largest, inputArray[i])
        map[inputArray[i]] = inputArray[i]
    }
    
    while(position < largest){
        position += jump
        if(position in map){
            jump++
            position = 0
        }
    }
    
    return jump
}
