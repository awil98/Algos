var maxDepth = function(root) {
    if(root === null) return null
    
    let max = 1
    
    function getDepth(node){
        if(node.left === null && node.right === null) return 1
        
        let leftChild = null
        let rightChild = null
        
        if(node.left != null){
            leftChild = getDepth(node.left)
        }
        if(node.right != null){
            rightChild = getDepth(node.right)
        }
        
        if(leftChild === null){
            if(rightChild + 1 > max){
               max = rightChild + 1
            }
            return rightChild + 1
        }
        
        if(rightChild === null){
            if(leftChild + 1 > max){
                max = leftChild + 1
            }
            return leftChild + 1
        }
        if(Math.max(leftChild, rightChild) + 1 > max){
            max = Math.max(leftChild, rightChild) + 1 
        }
        return Math.max(leftChild, rightChild) + 1
    }
    
    getDepth(root)
    
    return max
};
