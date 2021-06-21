var minDepth = function(root) {
    
    if(root === null) return 0
    
    function findMiniDepth(node){
        if(node.left === null && node.right === null) return 1
        
        let l = 0
        let r = 0
        
        if(node.left != null){
            l = findMiniDepth(node.left)
        }
        if(node.right != null){
            r = findMiniDepth(node.right)
        }
        
        if(node.left === null || node.right === null){
            return Math.max(l,r) + 1
        }else{
            return Math.min(l,r) + 1
        }
    }
    
    return findMiniDepth(root)
    
};
