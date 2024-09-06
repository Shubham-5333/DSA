function bs(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    if (target > arr[mid]) {
        return bs(arr, target, start, mid - 1);
    }
    return bs(arr, target, mid + 1, end);
}

console.log(bs([10, 8, 6, 4, 2], 2));



// let arr = [2, 4, 2, 6, 7, 2]

// let arr2 = []
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     count = 0
//     if (arr[i] === arr[i + 1]) {
//         count++

//         if (count > 1) {
//             arr.pop(arr[i])
//         }
//     }
    
// }
// console.log(arr);


