const isPangram = (string) => {
    let result = ""
    const updatedString = string.toLowerCase()

    for(let i = 0; i < updatedString.length; i++){
        if(updatedString[i] === " "|| result.includes(updatedString[i])){
            continue
        }else{
            result += updatedString[i]
        }
    }


    if(result.length === 26){
        console.log(true)
    }else{
        console.log(false)
    }
}

isPangram('The quick Brown fox jumps over the lazy DOG')
isPangram('abcdefghijklmnopqrstuvwxyz')
