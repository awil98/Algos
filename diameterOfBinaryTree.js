/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

var diameterOfBinaryTree = function(root) {
    let max = 0
    
    function findDiameter(node){
        if(node.left === null && node.right === null) return 0
        
        let leftChildren = null
        let rightChildren = null
        let diameter
        let height
        
        if(node.left != null){
            leftChildren = findDiameter(node.left)    
        }
        
        if(node.right != null){
            rightChildren = findDiameter(node.right)    
        }
        
        if(leftChildren === null){
            if(rightChildren + 1 > max){
                max = rightChildren + 1
            }
            height = rightChildren + 1
            diameter = rightChildren + 1
            return height
        }
        
        if(rightChildren === null){
            if(leftChildren + 1 > max){
                max = leftChildren + 1
            }
            height = leftChildren + 1
            diameter = leftChildren + 1
            return height
        }
        
        if(leftChildren + 1 + rightChildren + 1 > max){
            max = leftChildren + 1 + rightChildren + 1
        }
        
        height = 1 + Math.max(leftChildren, rightChildren)
        diameter = leftChildren + 1 + rightChildren + 1
        return height
    }
    
    findDiameter(root)
    
    return max
};
