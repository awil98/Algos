/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

var hasPathSum = function(root, targetSum) {
    if(root === null) return false
    
    function pathSum(node, target){
        if(node.left === null 
           && node.right === null && target-node.val === 0) return true
        
        if(node.left != null){
            if(pathSum(node.left, target-node.val)){
                return true
            }
        }
        
        if(node.right != null){
            if(pathSum(node.right, target-node.val)){
                return true
            }
        }
        
        return false
    }
    
    return pathSum(root,targetSum)
};
