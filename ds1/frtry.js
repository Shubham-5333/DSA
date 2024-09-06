// let arr = [2,3,2,3,2,7,9,77]
// let count =0
// let arr2 =[]
// for(let i=0;i<arr.length;i++){
//     count=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]=== arr[j]){
//             count++
//         }
//     }
//     if(count ===1){
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2);



function bs(arr,target,start=0,end = arr.length-1){
    if(start > end){
        return -1
    }

    let mid = Math.floor((start+end)/2)

    if(target === arr[mid]){
        return mid
    }
    if(target < arr[mid]){
        return bs(arr,target,start,mid-1)
    }
    return bs(arr,target,mid+1,end)
}

console.log(bs([2,5,7,8,9,11],9));