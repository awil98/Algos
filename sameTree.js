/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

var isSameTree = function(p, q) {
    
    if(p === null && q === null){
       return true
    }
    
    if(p === null || q === null){
       return false
    }
    
    let queue1 = []
    let queue2 = []
    let current1 = p
    let current2 = q
    
    queue1.unshift(current1)
    queue2.unshift(current2)
    
    while(queue1.length != 0 && queue2.length != 0){
        let removed1 = queue1.shift()
        let removed2 = queue2.shift()
        
        if(removed1.val != removed2.val){
            console.log("triggered")
           return false
        }
        
        if(removed1.left != null && removed2.left != null){
           queue1.push(removed1.left)
           queue2.push(removed2.left) 
        }
        if((removed1.left != null && removed2.left === null) || (removed1.left === null && removed2.left != null)){
            return false
        }
        
        if(removed1.right != null && removed2.right != null){
           queue1.push(removed1.right)
           queue2.push(removed2.right) 
        }else if((removed1.right != null && removed2.right === null) || (removed1.right === null && removed2.right != null)){
            return false
        }
    }
    
    
    return
