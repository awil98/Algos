/*
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. 
Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

 

Example 1:

Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
Example 2:

Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
Example 3:

Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.
*/

var heightChecker = function(heights) {
    let count = 0
    let expected = []
    
    //load values into expected
    for(let i = 0; i < heights.length; i++){
        expected.push(heights[i])
    }
    
    //sort the values so that they are the expected values
    mergeSort(expected, 0, heights.length -1)
    
    // compare values at indices if they are different increment count
    console.log(expected)
    for(let i = 0; i < heights.length; i++){
        if(expected[i] != heights[i]){
            count++
        }
    }
    return count
};

function mergeSort(expected, l, h){
    if(l < h){
       let mid = Math.floor((l+h)/2)
       mergeSort(expected, l, mid)
       mergeSort(expected, mid+1, h)
       merge(expected, l, mid, h) 
    }
}

function merge(expected, l, mid, h){
    let arr = []
    
    let i = l
    let j = mid+1
    let k = l
    
    while(i <= mid && j <= h){
        if(expected[i] < expected[j]){
           arr[k++] = expected[i++] 
        }else{
           arr[k++] = expected[j++] 
        }
    }
    
    while(i <= mid){
        arr[k] = expected[i]
        i++
        k++
    }
    while(j <= h){
        arr[k] = expected[j]
        j++
        k++
    }
    for(let p = l; p <= h; p++){
        expected[p] = arr[p]
    }
}
