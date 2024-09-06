function isEven(n){
    if(n===0){
        return "even"
    }
    if(n===1){
        return "odd"
    }
    return isEven(n-2)
}

console.log(isEven(6));


