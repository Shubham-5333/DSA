function bubble(arr){
    for(let i =0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubble([4,2,6,3,9,1]));






// by using swapped flag its making best case scenario of time complexity , below is the code for that.




// function swap(arr){
//     let n = arr.length
//     for(let i =0;i<n-1;i++){
//          let swapped = false
//          for(let j =0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 swapped = true
//             }
//          }
//          if(!swapped ){
//             break;
//          }
//     }
//     return arr
// }

// console.log(swap([4,36,8,21,1,7]));

