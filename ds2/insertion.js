// function insert(arr){
//     for(let i=1;i<arr.length;i++){
//         var curr = arr[i]
//         console.log("curr",curr);
//         for(var j=i-1;j>=0&& arr[j]>curr;j--){
//             arr[j+1] =arr[j]
//         }
//         arr[j+1] = curr
//     }
//     return arr
// }



function insert(arr){
    for(let i=1;i<arr.length;i++){
        var curr = arr[i]
        for(var j=i-1;j>=0 && arr[j]>curr;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = curr
    }
    return arr
}
console.log(insert([7,1,6,2,5,3,4]));