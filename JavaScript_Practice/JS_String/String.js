/*
- string is immutable in nature, cannot modify an individual character of a string.
- string follows positive and negative indexing.
- string can be defined with single or double quote
*/ 

var username = 'Shraddha'
var age = 25
var email = "shraddha@gmail.com"

//concatenation method: combines two or more strings into one string.
//1. string concatenation with concat method
var result = "Hello my name is ".concat(username, " and age is ", age, ", Email is ", email, ".");
console.log(result) // Hello my name is Shraddha and age is 25, Email is shraddha@gmail.com

//2. string cocatenation with plus operator
var result = "Hello my name is "+username +" and age is " + age + ", Email is " + email + ".";
console.log(result) // Hello my name is Shraddha and age is 25, Email is shraddha@gmail.com.

//3. string concatenation with backtic 
var result2 = `Hello my name is ${username} and age is ${age}, email is ${email}`;
console.log(result2) // Hello my name is Shraddha and age is 25, email is shraddha@gmail.com

console.log("###############################")

// Apply loop on string.
var str1 = "JavaScript Programming"
for (var a of str1) {
    console.log(a) // J a v a S c r i p t   P r o g r a m m i n g
}

console.log("###############################")

for(var i in str1) {
    console.log(i, str1[i]); // 0 J 1 a 2 v 3 a 4 S 5 c 6 r 7 i 8 p 9 t 10   11 P 12 r 13 o 14 g 15 r 16 a 17 m 18 m 19 i 20 n 21 g
}

console.log("###############################")

//length of string
var str1 = "JavaScript Programming"
console.log("Length of string :", str1.length) // Length of string : 22

// String Methods :
// Convert string into upper and lower case
var str1 = "JavaScript Programming"
console.log("String in upper case: ",str1.toUpperCase()) // JAVASCRIPT PROGRAMMING
console.log("String in lower case: ",str1.toLowerCase()) // javascript programming

//charAt method: returns character value at specific index.
console.log("Character at index 0: ",str1.charAt(0)) // J
console.log("Character at index 10: ",str1.charAt(10)) //   (space)
console.log("Character at index 51: ",str1.charAt(51)) //  (empty string)

//at method: returns index position of specific character.
console.log("Index of character at 0: ",str1.at(0)) // J
console.log("Index of character at -1: ",str1.at(-1)) // g
console.log("Index of character at -5: ",str1.at(-5)) // m

console.log("###############################")

// trim method : removes unwated spaces from beginning and end of string.
var str2 = "   JavaScript Programming   "
console.log("Original string: ", str2)
console.log("String after trim: ", str2.trim()) // JavaScript Programming
// remove space from start
console.log("String after trimStart: ", str2.trimStart()) // JavaScript Programming
// remove space from end
console.log("String after trimEnd: ", str2.trimEnd()) //    JavaScript Programming


console.log("###############################")

// replace method: replaces word1 with word2 in given string.

var str3 = "We Are Learning Python and Python is easy to learn"
var r1 = str3.replace("Python", "JavaScript")
console.log("Result after replace: ", r1) // We Are Learning JavaScript and Python is easy to learn

// replace all occurrences
var r2 = str3.replaceAll("Python", '"C++"')
console.log("Result after replaceAll: ", r2) // We Are Learning "C++" and "C++" is easy to learn

var r3 = str3.replaceAll("Python", '"\nC++"')
console.log("Result after replaceAll with newline: ", r3)
/*
We Are Learning "
C++" and "
C++" is easy to learn
*/

console.log("####################################")

// includes method : returns true if the word is available in string.
var s4 = "Learning Programming is Fun"
console.log("Result after includes: ", s4.includes("JavaScript")) // false
console.log("Result after includes: ", s4.includes("is")) // true


console.log("####################################")

// indexOf : returns index position of available char/substring else it will return -1

var s5 = "Welcome to JavaScript"
console.log("Result after indexOf: ", s5.indexOf('to')) // 8
console.log("Result after indexOf: ", s5.indexOf('is')) // -1


console.log("####################################")

//slice method: get a substring from long string.
// slice(start, end index) : output will start index value and exclude the last index value.

var s6 = "India won world cup"
var result = s6.slice(10, 15);
console.log("Sliced result :", result) // world

console.log("Sliced result :", s6.slice(-10, -5)) // world > negative indexing
console.log("Sliced result :", s6.slice(1, -1)) // ndia won world cu > excluse first and last character
console.log("Sliced result :", s6.slice(-10)) // world cup > -10 = start; only one argument returns string from that index to end of string


//sustring method: get a substring from long string.
var s6 = "India won world cup"
var result = s6.substring(10, 15) // 10 is start index and 14 is end index
console.log("Substring result :", result) // world

console.log("####################################")

// split method: splits string from given delimeter/char/space to return an array of words.

var s7 = "We are Learning JavaScript"
var result = s7.split(" ")
console.log("Split result :", result) // [ 'We', 'are', 'Learning', 'JavaScript' ]

var message = "22/02/2026 34:45:34-operation sucessful"
var mr = message.split("-")
console.log("Split result :", mr) // [ '22/02/2026 34:45:34', 'operation sucessful' ]
console.log("Split result [1] :", mr[1]) // operation sucessful


console.log("####################################")
// repeat method : repeats any string given number of times.
var sh = " Hello "
console.log("Repeat result :", sh.repeat(5)) //  Hello  Hello  Hello  Hello  Hello 


console.log("####################################")
//ASCII value
// A- Z : 65- 90
// a-z : 97-122

console.log("A".charCodeAt(0)) // 65
console.log("Z".charCodeAt(0)) // 90
console.log("aBc".charCodeAt(1)) // 66