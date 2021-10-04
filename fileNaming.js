/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, 
the one which comes later will have an addition to its name in a form of (k), 
where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
*/

function fileNaming(names) {
    /*
    If a filenames isn't already existing simply note it as existing and make it's next occurance = 1
    If it is already exisiting simply keep adding 1 to k until you get to a file that doesn't already exist
    if a and a(1) were both already in map and you came across another a you'd do
    a -> a(1) -> a(2)
    */
    let map = {}
    
    for(let i = 0; i < names.length; i++){
        
        if(!(names[i] in map)){
            map[names[i]] = 1
        }else{
            let base = names[i]
            let k = map[names[i]]
            let res = names[i] + "(" + k + ")"
            
            while(res in map){
                k = ++map[names[i]]
                res = names[i] + "(" + k +")"
            }
            
            names[i] = res
            map[names[i]] = 1
        }
    }
    
    return names
}
