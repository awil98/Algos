function permutations(nums){
    if(nums.length === 0){
      return [[]]
    }

    let holder = []

    for(let i = 0; i < nums.length; i++){
      let num = nums.shift()
      let result = permutations(nums)
      let updatedResult = result.map(ele => [num, ...ele])
      holder.push(...updatedResult)
      nums.push(num)
    }

    return holder
}
console.log(permutations([1,2,3]))
