let holder = []

function subSets(nums, k, current, index=0){
  if(index >= nums.length){
    if(current.length === k){
      //if my subset has the amount of items that I'm looking for then copy it
      let temp = [...current]
      holder.push(temp)
    }
    return
  }

  current.push(nums[index]) //simulate taking a number
  subSets(nums, k, current, index+1) //moving to the next number
  current.pop() //simulate not taking a number and moving to the next number
  subSets(nums, k, current, index+1)
}

subSets([1,2,3], 1, [])
console.log(holder)
