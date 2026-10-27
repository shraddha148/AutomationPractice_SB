//Reverse a String
const str = "Shraddha"
const reverseStr = ""
console.log("Reversed String: ",(str.split("").reverse().join("")));

//Reverse a String using for loop
let str1 = "Shraddha"
let reverseStr1 = ""
for (let val of str1) {
    reverseStr1 = val + reverseStr1
    console.log(reverseStr1)
}
console.log("Reversed String using for loop: ", reverseStr1)

//Palindrome String
const str2 = "NAMAN"
const reverseStr2 = str2.split("").reverse().join("");
console.log("String is Palindrome: ", str2 === reverseStr2);

//Palindrome using for loop
const str3 = "NAMAN"
let reverseStr3 = ""
for (let i = str3.length -1; i>=0; i--){
    reverseStr3 = reverseStr3 + str3[i];
    console.log(reverseStr3)
}
if (str3 === reverseStr3){
    console.log("String is a Palindrome")
} else {
        console.log("String is not a Palindrome")

}


//Find vowels in a string
const str4 = "I am learning JavaScript programming"
const vowels = "aeiouAEIOU"
let temp = ""
let count = 0
for (let val of str4) {
    if (vowels.includes(val)) {
        temp += val
        count++
    }else {
        continue
    }
}
console.log("Found vowels: ", temp)
console.log("Count of vowels: ", count)


//find a sunstring in a string
const str5 = "Women"
const subStr = "men"
if (str5.includes(subStr)) {
    console.log("Substring found in the string")
}

//string concatenation
const str6 = "Hello"
const str7 = "World"
console.log("Concatenated String: ", str6.concat(" ", str7))

//all duplicate characters in a string
const str8 = "programming";

let dupchar = "";
let count1 = {};

for (let val of str8) {
    count1[val] = (count1[val] || 0) + 1;
}

console.log(count1);

for (let val in count1) {
    if (count1[val] > 1) {
        dupchar += val + " ";
    }
}

console.log("Duplicate characters in a string:", dupchar);

//compressing a string aaabbbbbcccc
const str9 = "aaabbbbbcccc"
let compressedStr = ""
let count2 = 1
for (let i = 0; i < str9.length; i++){
    if (str9[i] === str9[i]){

    }
}