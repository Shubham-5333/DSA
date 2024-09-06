function slowHash(key){
    for(let i =0;i<1000;i++){
        console.log("ok");
    }
    return key[0].charCodeAt(0);
}
console.log(slowHash("l"));