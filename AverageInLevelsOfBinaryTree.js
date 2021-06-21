var averageOfLevels = function(root) {
    let solution = []
    let queue = []
    let current = root
    queue.push(current)
    
    while(queue.length != 0){
        let size = queue.length
        let sum = 0
        for(let i = 0; i < size; i++){
            let element = queue.shift()
            sum += element.val
            if(element.left != null){
               queue.push(element.left)
            }
            if(element.right != null){
               queue.push(element.right)
            }
        }
        solution.push(sum / size)
    }
    return solution
};
