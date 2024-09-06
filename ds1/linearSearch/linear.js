let arr =[10,3,7,8,9]
let count = 0

for(let i=0;i<arr.length;i++){
    if(arr[i]==7){
        console.log(arr[i]);
        count++
    }
}
if(count<1){
    console.log(-1);
}

