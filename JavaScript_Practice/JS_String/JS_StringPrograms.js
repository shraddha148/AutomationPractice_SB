

// 1. Reverse a String using built-in methods
const str1 = "Shraddha";
const reverseStr1 = str1.split("").reverse().join("");

console.log("1. Reversed String:", reverseStr1);


// 2. Reverse a String using a for...of loop
const str2 = "Shraddha";
let reverseStr2 = "";

for (const char of str2) {
    reverseStr2 = char + reverseStr2;
}

console.log("2. Reversed String using for loop:", reverseStr2);


// 3. Check whether a String is a Palindrome
const str3 = "NAMAN";
const reverseStr3 = str3.split("").reverse().join("");

console.log("3. Is Palindrome:", str3 === reverseStr3);


// 4. Check Palindrome using a for loop
const str4 = "NAMAN";
let reverseStr4 = "";

for (let i = str4.length - 1; i >= 0; i--) {
    reverseStr4 += str4[i];
}

if (str4 === reverseStr4) {
    console.log("4. String is a Palindrome");
} else {
    console.log("4. String is not a Palindrome");
}


// 5. Find all Vowels and Count Vowels in a String
const str5 = "I am learning JavaScript programming";
const vowels = "aeiouAEIOU";
let foundVowels = "";
let vowelCount = 0;

for (const char of str5) {
    if (vowels.includes(char)) {
        foundVowels += char;
        vowelCount++;
    }
}

console.log("5. Vowels:", foundVowels);
console.log("   Vowel Count:", vowelCount);


// 6. Find a Substring in a String
const str6 = "Women";
const subStr6 = "men";

if (str6.includes(subStr6)) {
    console.log("6. Substring found");
} else {
    console.log("6. Substring not found");
}


// 7. String Concatenation
const str7 = "Hello";
const str8 = "World";

console.log("7. Concatenated String:", str7.concat(" ", str8));


// 8. Find All Duplicate Characters in a String
const str9 = "programming";
const charCount9 = {};
let duplicateChars9 = "";

for (const char of str9) {
    charCount9[char] = (charCount9[char] || 0) + 1;
}

for (const char in charCount9) {
    if (charCount9[char] > 1) {
        duplicateChars9 += char + " ";
    }
}

console.log("8. Character Counts:", charCount9);
console.log("   Duplicate Characters:", duplicateChars9.trim());


// 9. Compress a String
// Example: aaabbbbbcccc -> a3b5c4
const str10 = "aaabbbbbcccc";
let compressedStr10 = "";
let count10 = 1;

for (let i = 0; i < str10.length; i++) {
    if (str10[i] === str10[i + 1]) {
        count10++;
    } else {
        compressedStr10 += str10[i] + count10;
        count10 = 1;
    }
}

console.log("9. Compressed String:", compressedStr10);


// 10. Remove Duplicate Words from a String
const str11 = "Rahul Rohit Ram Rohit Raman Rahul Ram";
const words11 = str11.split(" ");
const uniqueWords11 = [...new Set(words11)];

console.log("10. String without Duplicate Words:", uniqueWords11.join(" "));


// 11. Remove Duplicate Characters from a String
const str12 = "Javascript is easy to learn";
let uniqueChars12 = "";

for (const char of str12) {
    if (!uniqueChars12.includes(char)) {
        uniqueChars12 += char;
    }
}

console.log("11. String without Duplicate Characters:", uniqueChars12);


// 12. Count Each Character in a String
const str13 = "Learning javascript is Fun";
const charCount13 = {};

for (const char of str13) {
    if (Object.hasOwn(charCount13, char)) {
        charCount13[char]++;
    } else {
        charCount13[char] = 1;
    }
}

console.log("12. Count of Each Character:", charCount13);


// 13. Duplicate the First and Last Characters of Each Word
// Input:  India China USA
// Output: IIndiaa CChinaa UUSAA
const str14 = "India China USA";

const result14 = str14
    .split(" ")
    .map(word => word[0] + word + word[word.length - 1])
    .join(" ");

console.log("13. First and Last Characters Duplicated:", result14);


// 14. Replace the Second Occurrence of Each Character with $
const str15 = "Learning Programming";
const charCount15 = {};
let output15 = "";

for (const char of str15) {
    charCount15[char] = (charCount15[char] || 0) + 1;

    if (charCount15[char] === 2) {
        output15 += "$";
    } else {
        output15 += char;
    }
}

console.log("14. Second Occurrences Replaced:", output15);
