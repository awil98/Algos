const toRainLanguage = (number)=>{
    //3 == pling 5 === plang 7 === plong
    let result = ""
    for(let i = 3; i <= 7; i +=2){
        if(number % 3 === 0 && i === 3){
            result += "pling"
        }else if(number % 5 === 0 && i === 5){
            result += "plang"
        }else if(number % 7 === 0 && i === 7){
            result += "plong"
        }
    }
    if(result === ""){
        result = number
    }
    return result
}

console.log(toRainLanguage(3))
console.log(toRainLanguage(21))
console.log(toRainLanguage(35))
console.log(toRainLanguage(1))
