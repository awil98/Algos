/*
GREEDY Method:
***Important to note data array is sorted highest profits to lowest
1) Look at higherst dealine and that'll be the
size of the array that'll contain result so in case 3 is the
largetst deadline array[0,0,0]
2) start at location of deadline and place it at that incex in result
array[0, J1, 0]
3)iterate to next value in input array and try to inset it at dealine value -1 and
move backwards while counter > 0 and result[counter] != 0
*/

function jobSequencing(data){
  let maxDeadline = 0 //this will determine the amount of jobs that i can do
  for(let i = 0; i < data.length; i++){
    if(data[i]['deadline'] > maxDeadline){
      maxDeadline = data[i]['deadline']
    }
  }
  let result = []
  //Initialize array with desired number of zeros
  for(let i = 0; i < maxDeadline; i++){
    result.push(0)
  }

  for(let i = 0; i < data.length; i++){
    //if there is nothing taking the slot then insert job at that slot
    if(result[data[i]['deadline'] - 1] === 0){
        result[data[i]['deadline'] -1] = data[i]
    }
    //work backwards to the next open slot
    else{
      let counter = data[i]['deadline'] - 1
      while(counter >= 0){
          if(result[counter] === 0){
            result[counter] = data[i]
            break
          }
          counter--
      }
    }
  }
  return result
}

let input = [
  {'profit': 20, 'deadline': 2},
  {'profit': 15, 'deadline': 2},
  {'profit': 10, 'deadline': 1},
  {'profit': 5, 'deadline': 3},
  {'profit': 1, 'deadline': 3}
]

let input2 = [
  {'profit': 35, 'deadline': 3},
  {'profit': 30, 'deadline': 4},
  {'profit': 25, 'deadline': 4},
  {'profit': 20, 'deadline': 2},
  {'profit': 15, 'deadline': 3},
  {'profit': 12, 'deadline': 1},
  {'profit': 5, 'deadline': 2}
]

console.log(jobSequencing(input))
console.log(jobSequencing(input2))
