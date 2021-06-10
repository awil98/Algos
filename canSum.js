
function canSum(target, numbers, values=[]){

  if(target < 0){
    values.pop()
    return null
  }
  if(target === 0){
    return values
  }

  for(let i = 0; i < numbers.length; i++){

    let updatedTarget = target - numbers[i]

    values.push(numbers[i])

    if(canSum(updatedTarget, numbers, values) != null){
      return values
    }

  }
  values.pop() //finishing the for loop means i tried every combo and I now need to remove the node and go back a level

  return null
}

console.log(canSum(7, [5,3,4,7]))
console.log(canSum(7, [2,3]))
