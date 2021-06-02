const encode = (string)=>{
    let result = ""
    let currentChar = string[0]
    let counter = 0

    for(let i = 0; i < string.length; i++){
        if(string[i] != currentChar){
            result += `${counter}${currentChar}`
            counter = 1
            currentChar = string[i]
        }else{
            counter++
        }
    }

    return result += `${counter}${currentChar}`
}

const decode = (string)=>{
    let result = ""
    let holder = ""

    for(let i = 0; i < string.length; i++){
        if(i === 0 || i % 2 === 0){
            holder = string[i + 1]
            result += holder.repeat(string[i])
        }else{
            continue
        }
    }

    return result
}


console.log(encode('wwwiiuuuu')) // 3w2i4u
console.log(decode('2u3a4o')) // uuaaaoooo 
