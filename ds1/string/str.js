let k="hello world"
let reversedString = "";
console.log(k.length);
for (let i = k.length - 1; i >= 0; i--) {
    // console.log(k[i]);
    reversedString += k[i];
}
console.log(reversedString);