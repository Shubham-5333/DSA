// // function bs(arr,target){
// //     let start = 0
// //     let end = arr.length-1
// //     let mid = Math.floor((start+end)/2)
// //     while(target !== arr[mid]){
// //         if(target < arr[mid]){
// //             end = mid -1
// //         }else{
// //             start = mid +1
// //         }
// //         mid = Math.floor((start+end)/2)
// //     }
// //     return mid
// // }
// // console.log(bs([2,10,15,44,74,100],15));




// function bs(arr,target,start =0,end = arr.length-1){
//     if(start > end){
//         return -1
//     }
//     let mid = Math.floor((start+end)/2)

//     if(target === arr[mid]){
//         return mid
//     }
//     if(target<arr[mid]){
//         return bs(arr,target,start,end= mid-1)
//     }
//     return bs(arr,target,start =mid+1,end)
// }
// console.log(bs([2,10,15,44,74,100],15));


function bs(arr,target,start=0,end=arr.length-1){
    if(start>end){
        return -1
    }
    let mid = Math.floor((start+end)/2)

    if(target === arr[mid]){
        return mid
    }

    if(target < arr[mid]){
        return bs(arr,target,start,end=mid-1)
    }
    return bs(arr,target,start=mid+1,end)
}
console.log(bs([3,5,7,33,55,77],55));
