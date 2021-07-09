/*
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

 

Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""
*/

var reorganizeString = function(s) {
    let map = {}
    let heap = []
    let result = ""
    
    for(let i = 0; i < s.length; i++){
        map[s[i]] = (map[s[i]] === undefined) ? 1 : map[s[i]]+1
    }
    
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        let obj = {
            "char": keys[i],
            "frequency": map[keys[i]]
        }
        
        insert(heap, obj)
    }
  
    while(heap.length > 1){
        let current = removeElement(heap)
        let next = removeElement(heap)
        result += current['char']
        result += next['char']
        
        current["frequency"]--
        next["frequency"]--
        if(current["frequency"] > 0){
           insert(heap, current)
        }
        
        if(next["frequency"] > 0){
            insert(heap, next)
        }
    }
    if(heap.length > 0){
        let last = removeElement(heap)
        if(last["frequency"] > 1){
           return ""
        }else{
            result += last["char"]
            return result
        }
    }else{
        return result
    }
    return result
};


function insert(heap, obj){
    heap.push(obj)
    let current = heap.length - 1
    let parentIndex = Math.floor((current -1)/2)
    while(parentIndex >= 0 && heap[current]["frequency"] > heap[parentIndex]["frequency"]){
          let temp = heap[current]
          heap[current] = heap[parentIndex]
          heap[parentIndex] = temp
          current = parentIndex 
          parentIndex = Math.floor((current-1)/2)
    }
}

function removeElement(heap){
    let removed = heap.shift()
    if(heap.length === 0){
       return removed
    }
    let lastElement = heap.pop()
    heap.unshift(lastElement)
    
    let current = 0
    let largerChild = current * 2 + 1
    
    while(largerChild < heap.length - 1){
          if(largerChild + 1 < heap.length -1 && heap[largerChild]["frequency"] < heap[largerChild +1]["frequency"]){
             largerChild = largerChild +1
          }
        
          if(heap[current]["frequency"] < heap[largerChild]["frequency"]){
             let temp = heap[current]
             heap[current] = heap[largerChild]
             heap[largerChild] = temp
             current = largerChild 
             largerChild = largerChild * 2 + 1
          }else{
             break 
          }  
    }
    
    return removed
    
}
