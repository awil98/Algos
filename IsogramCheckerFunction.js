const isIsogram = (string) => {

    const updatedString = string.toLowerCase()
    let holder = ''
    for(let i = 0; i < updatedString.length; i++){
        if(!holder.includes(updatedString[i])){
            holder += updatedString[i]
        }else{
            return false;
        }
    }
    return true;
}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false
