function slct(arr) {
    for (let i = 0; i < arr.length; i++) {
        var low = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[low]) {
                low = j;
            }
        }
        if (i !== arr[low]) {
            let temp = arr[i]
            arr[i] = arr[low]
            arr[low] = temp
        }
    }
    return arr
}
console.log(slct([6, 1, 7, 2, 8, 4, 9]));



