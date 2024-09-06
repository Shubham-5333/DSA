    // function bs(arr,elem){
//     let start = 0
//     let end = arr.length -1
//     let middle = Math.floor((start+end)/2)
//     while(arr[middle] !== elem){
//         if(elem<arr[middle]){
//             end = middle -1
//         }else{
//             start = middle + 1
//         }
//         middle = Math.floor((start+end)/2)
//     }
//     return middle
// }



// console.log( bs(["w","a","b","e","c","d"],"c"))



// function bs(arr,target){
//     let start = 0
//     let end = arr.length-1
//     let middle = Math.floor((start+end)/2)
//     while(arr[middle]!==target){
//         if(target < arr[middle]){
//             end = middle-1
//         }else{
//             start = middle+1
//         }
//         middle = Math.floor((start+end)/2)
//     }
//     return middle

// }
// console.log(bs([2,3,4,5,6,8],5));



// function reverse(str){
//     console.log(str);
//     return reverseHelper(0, str).join(" ");
// }

// function reverseHelper(i, str, word = '', arr = []){
//     if(i >= str.length){
//         arr.push(word);
//         return arr;
//     }

//     if(str[i] === ' '){
//         arr.push(word);
//         return reverseHelper((i + 1), str, '', arr);
//     }

//     word = str[i] + word;
//     return reverseHelper((i + 1), str, word, arr);
// }

// console.log(reverse("Shubham patil"));

// output "mahbuhs litap"

// let str = "leetcode"
// // let k = str.split('')
// let count =0
// let m = str.split('')
// let arr=[]
// for(let i=0;i<m.length;i++){
//     count=0
//     for(let j=0;j<m.length;j++){
//         if(m[i]===m[j]){
//             count++
//         }
//     }
//     if(count===1){
//         arr.push(m[i])
//     }
    
// }
// console.log(arr.join(''));
// console.log(m);


// function fact(n){
//     if(n===1){
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(fact(4));

function reverseString(str) {
    if (str === "") // base case: if the string is empty, return it
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0); // recursively reverse the substring starting from the second character, then append the first character
}

// let str = "hello world";
// let reversedStr = reverseString(str).split(' ').reverse().join(' ');
console.log(reverseString("hello world")); // Output: "olleh dlrow"


// function bs(arr,target){
//     let start = 0;
//     let end = arr.length-1
//     let middle = Math.floor((start+end)/2)
//     while(arr[middle] !== target){
//         if(target <arr[middle]){
//             end = middle-1
//         }else{
//             start = middle +1
//         }
//         middle = Math.floor((start+end)/2)
//     }
//     return middle
// }

// console.log(bs([2,3,4,5,6],4));






function binarySearch(arr, elem, start = 0, end = arr.length - 1) {
    // Base case: if start is greater than end, element not found
    if (start > end) {
        return -1;
    }

    // Calculate middle index
    let middle = Math.floor((start + end) / 2);

    // If the middle element is the target element, return its index
    if (arr[middle] === elem) {
        return middle;
    }

    // If the target element is smaller than the middle element,
    // search the left half of the array
    if (elem < arr[middle]) {
        return binarySearch(arr, elem, start, middle - 1);
    }

    // If the target element is larger than the middle element,
    // search the right half of the array
    return binarySearch(arr, elem, middle + 1, end);
}

console.log(binarySearch(["a", "b", "c", "d", "e", "w"], "c")); // Output: 2
