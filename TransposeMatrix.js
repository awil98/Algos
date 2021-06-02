const transposeMatrix = (array) => {
    let result = []

    for(let i = 0; i < array.length; i++){
        let holder = []
        for(let j = 0; j < array.length; j++){
            holder.push(array[j][i])
        }
        result.push(holder)
    }
    return result
}


console.log(transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]))
 // [[1,1,1],[2,2,2],[3,3,3]]
