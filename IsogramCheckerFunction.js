/*
An Isogram is a word, phrase, or sentence in which no letter of the alphabet occurs more than once.
Given a string determine if it is an isogram
*/

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
