/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

function maxProfit(prices) {
    let smallest = Number.MAX_SAFE_INTEGER //smallest value
    let smallestIndex = 0
    let largest = -1

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < smallest){
            smallest = prices[i]
            smallestIndex = i
        }
    }

    if(smallestIndex === prices.length -1){
       return 0
    }

    for(let j = smallestIndex + 1; j < prices.length; j++){
        if(prices[j] > largest){
            largest = prices[j]
        }
    }
    return largest - smallest
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,5,4,3,2]))
console.log(maxProfit([7,6,5,4,2,3]))
