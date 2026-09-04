//Reverse a String
const str = "Shraddha"
const reverseStr = ""
console.log("Reversed String: ",(str.split("").reverse().join("")));

//Reverse a String using for loop
let str1 = "Shraddha"
let reverseStr1 = ""
for (let val of str1) {
    reverseStr1 = val + reverseStr1
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