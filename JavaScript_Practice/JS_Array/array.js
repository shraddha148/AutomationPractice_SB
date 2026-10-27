

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// reverse the array
arr1.reverse();
console.log("Reversed array : ", arr1);
//arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]

//splice method
// splice(start, deleteCount, item1, item2, ...) - removes deleteCount elements from index start and adds item1, item2, ...
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(2, 2, 10, 11, 12); // removes 2 elements from index 2 and adds 10, 11, 12
console.log("Array after splice : ", arr2); 
//arr2 = [1, 2, 10, 11, 12, 5, 6, 7, 8, 9]

//slice method
// slice(start, end) - returns a subarray of an array selected from start to end-1 (end not included)
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr3.slice(2, 5);  //[ 3, 4, 5 ]
console.log("Array after slice : ", newArr);

const newArr1 = arr3.slice(-5, -1); // [ 5, 6, 7, 8 ]
console.log("Array after slice with negative indices : ", newArr1);

const newArr2 = arr3.slice(1, -1); // [ 2, 3, 4, 5, 6, 7, 8 ] removes the first and last elements
console.log("Array after slice (1, -1) : ", newArr2);


//filter method
// filter(callback) - creates a new array with all elements that pass the test implemented by the provided function
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = arr4.filter(num => num % 2 === 0);
console.log("Even numbers : ", evenNumbers); // [2, 4, 6, 8]

//map method
// map(callback) - creates a new array with the results of calling a provided function on every element in the calling array
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squares = arr5.map(num => num * num);
console.log("Squares : ", squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//reduce method
// reduce(callback, initialValue) - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const arr6 = [1, 2, 3, 4, 5];
const sum = arr6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum : ", sum); // 15





//1. write a program to get square of all even numbers from array
//2. write a program to get factorial of all numbers in an array
//3. write a program to get sum of all numbers in an array
//4. write a program to reverse an array using for loop
console.log("-------------------Program 1-------------------");
var a1 = [4, 6, 7, 8, 2, 4, 3, 11, 5, 9];

var evenSquares = [];
for (var i =0; i < a1.length; i++) {
    if (a1[i] % 2 === 0) {
        evenSquares.push(a1[i] * a1[i]);
    }
}  
console.log("Square of all even numbers: ", evenSquares); // [16, 36, 64, 4, 16]

console.log("-------------------Program 2-------------------");

var factorials = a1.map(num => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
});

console.log("Factorials of all numbers: ", factorials);

console.log("-------------------Program 3-------------------");

var a1_sum = a1.reduce((acc, num) => acc + num, 0);
console.log("Sum of all numbers in a1: ", a1_sum); // 59


console.log("-------------------Program 4-------------------");

// Sort the array in ascending order using for loop
for (var i = 0; i< a1.length; i++) {
    for (var j = 0; j < a1.length - i - 1; j++) {
        if (a1[j] > a1[j + 1]) {
            // Swap the elements
            [a1[j], a1[j+1]] = [a1[j+1], a1[j]];
        }
    }
}
console.log("Sorted array : ", a1); // [2, 3, 4, 4, 5, 6, 7, 8, 9, 11]
