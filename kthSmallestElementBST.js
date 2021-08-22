/*
Given the root of a binary search tree, and an integer k, 
return the kth (1-indexed) smallest element in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
*/

var kthSmallest = function(root, k) {
    let values = []
    inorder(values, root)
    return values[k-1]
};

function inorder(values, root){
    if(root === null){
        return 
    }
    
    inorder(values,root.left)
    values.push(root.val)
    inorder(values,root.right)
}
