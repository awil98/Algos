/*
You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

 

Example 1:

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
Example 2:

Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
 

Constraints:

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] consists only of digits '0' and '1'.
1 <= m, n <= 100
*/

var findMaxForm = function(strs, m, n, index=0, memo={}) {
    let key = m + "," + n + "," + index
    if(key in memo){
        return memo[key]
    }
    //check if all space is used up and all indecies processed
    if(m === 0 && n === 0 || index >= strs.length){
       return 0
    }
    
   //get the number of m's and n's at the current position
   let mnObj = getMAndNs(strs[index]) 
   //check if current index is valid meaning m and n at index is less than remaining m and ns
    if(mnObj.m > m || mnObj.n > n){
      memo[index] = findMaxForm(strs, m, n, index+1, memo)
      return memo[index]
    } 
   //if index not valid then skip index 
    memo[key] = Math.max(findMaxForm(strs, m, n, index+1, memo), 
                           findMaxForm(strs, m-mnObj.m, n-mnObj.n, index+1, memo) + 1
                          )
    return memo[key]
    
};

function getMAndNs(str){
    /* Get the number of 1s and 0s from the current string
        to determine whether or not its a valid canidate
    */
    let m = 0
    let n = 0
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === "0"){
           m++
        }else{
            n++
        }
    }
    let obj = { m: m, n: n}
    return obj
}
