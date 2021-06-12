function sum(n){
  if(n === 0){
    return [[]]
  }

  let holder = []

  for(let i = 1; i <= n; i++){
    let newN = n - i
    let sumWays = sum(newN)
    let upSumWays = sumWays.map(el => [i, ...el])
    holder.push(...upSumWays)
  }

  return holder
}

console.log(sum(4))
