/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.

Example:
Input: root = [3,9,20,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
*/

var averageOfLevels = function(root) {
    let solution = []
    let queue = []
    let current = root
    queue.push(current)
    
    while(queue.length != 0){
        let size = queue.length
        let sum = 0
        for(let i = 0; i < size; i++){
            let element = queue.shift()
            sum += element.val
            if(element.left != null){
               queue.push(element.left)
            }
            if(element.right != null){
               queue.push(element.right)
            }
        }
        solution.push(sum / size)
    }
    return solution
};
