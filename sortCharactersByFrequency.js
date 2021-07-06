/*
Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 105
s consists of English letters and digits.

*/


var frequencySort = function(s) {
    let map = {}
    for(let i = 0; i < s.length; i++){
        map[s[i]] = (map[s[i]] === undefined) ? 1 : map[s[i]]+1
    }

    let heap = []
    let holder = []
    let result = ""

    let keys = Object.keys(map)

    keys.forEach((ele)=>{
        let obj = {
            "char": ele,
            "frequency": map[ele]
        }
        holder.push(obj)
    })

    for(let i = 0; i < holder.length; i++){
        insert(heap, holder[i])
    }

    for(let i = heap.length-1; i >= 0; i--){
        removeEle(heap, i)
    }

    for(let i = heap.length-1; i >=0; i--){
      result = buildResult(heap[i], result)
    }

    return result
};

function insert(heap, ele){
    heap.push(ele)
    let current = heap.length-1

    while(Math.floor((current -1)/2) >= 0 && heap[current]['frequency'] > heap[Math.floor((current -1)/2)]['frequency']){
          let temp =  heap[Math.floor((current -1)/2)]
           heap[Math.floor((current -1)/2)] = heap[current]
           heap[current] = temp
           current = Math.floor((current -1)/2)
    }
}

function removeEle(heap, n){
    let removed = heap[0]
    heap[0] = heap[n]
    let current = 0
    let largerChild = current * 2 + 1

    while(largerChild < n){
        if(largerChild + 1 < n && heap[largerChild]['frequency'] < heap[largerChild +1]['frequency']){
           largerChild = largerChild + 1
        }

        if(heap[current]['frequency'] < heap[largerChild]['frequency']){
            let temp = heap[current]
            heap[current] = heap[largerChild]
            heap[largerChild] = temp
            current = largerChild
            largerChild = largerChild * 2 + 1
        }else{
            break
        }
    }


    heap[n] = removed
    return removed
}


function buildResult(obj, result){
  let char = obj["char"]
  let frequency = obj["frequency"]

  for(let i = 0; i < frequency; i++){
    result += char
  }
  return result
}
