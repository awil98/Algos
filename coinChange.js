/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [1], amount = 0
Output: 0
*/



/*
Top-Down Memoized Version
var coinChange = function(coins, amount) {  
    let memo = {}
    memo[0] = 0 //I know that 0 can only be formed with 0
    
    for(let i = 0; i < coins.length; i++){ //each of the coins in my coins can be formed with 1 coin
        memo[coins[i]] = 1    
    }
    
    function getSmallest(amount){ 
       if(amount in memo){ //check if the amount is already in my memo so that I don't need to recompute
           return memo[amount]
       }
       
       let min = -1 //If i can't subtract anything from my amount my min won't change and I'll be able to just return -1
       
       for(let i = 0; i < coins.length; i++){ //Make decision at current node with coins
            if(coins[i] <= amount){
                let updatedAmount = amount - coins[i]
                let possibleSol = getSmallest(updatedAmount)
                if(possibleSol != -1){ //if min hasn't been updated then just set it
                    if(min === -1){
                        min = possibleSol + 1
                    }else{
                        min = Math.min(min, possibleSol+1)   //otherwise check if the solution is more optimal
                    }   
                }
            }
       }
       memo[amount] = min 
       return min
    }
    
    return getSmallest(amount)
   
};

*/

var coinChange = function(coins, amount) {
    let dp = []
    
    for(let i = 0; i <= amount; i++){
        dp[i] = amount + 1 //Initalize your dp array to a value you know isn't possible
    }
    
    dp[0] = 0 //base case
    
    for(let i = 1; i <= amount; i++){ //build up from amount equals 1
        for(let j = 0; j < coins.length; j++){ // starting at the first coin
            if(i >= coins[j]){
               dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]) //the minimum will either be 1 + a pervious value or a value that's currently there
            }
        }
    }
    
    return dp[amount] === amount + 1 ? -1 : dp[amount] //check if the amount has changed. IF it hasn't then it's not possible to form the amount
};
