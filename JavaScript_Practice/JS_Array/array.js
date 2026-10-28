
/*
// Properties of array
- array can hold different types of data types, duplicate values, other arrays and objects as well
- array is mutable and ordered, we can change the values of array & access the values of array using index
*/

// Apply loop of array
var arr = [65, 27, 38, 19, 22]
for (var val of arr) {
    console.log(val)
}

// Apply loop using in operator
for(var i in arr) {
    console.log(i, ":", arr[i])
}

console.log("################# Array Methods ##############")

// push method: this method add data to array at the end.

arr.push(10);
console.log("Array updated last element:", arr);
//[ 65, 27, 38, 19, 22, 10 ]

// add mulitple values.
arr.push(100, 200, 300);
console.log("Array updated last element:", arr );
//[ 65, 27, 38, 19, 22, 10, 100, 200, 300 ]

// add value a begining of array.
// unshift method : This method add data at beginning of array.
arr.unshift(500)
console.log("Array updated first element :", arr)
//[ 500, 65, 27, 38, 19, 22, 10, 100, 200, 300 ]

// shift method :  this method removes first element of array.
arr.shift();
console.log("Array after removing first element :", arr)
//[ 65, 27, 38, 19, 22, 10, 100, 200, 300 ]

// pop method : this method removes last element of array.
arr.pop();
console.log("Array after removing last element :", arr)
//[ 65, 27, 38, 19, 22, 10, 100, 200 ]

//search element in array
arr.find(function(value) {
    if(value === 65) {
        console.log("Element found in array :", value);
    }
})
//Element found in array : 65

// includes method : this method checks whether the array contains a specific element or not.
console.log(arr.includes(65)); // true
console.log(arr.includes(1000)); // false


//indexof method : returns the first index of a specific element. If the element is not found, it returns -1.

console.log(arr.indexOf(22)); // 4
console.log(arr.indexOf(1000)); // -1

console.log("---------------------")

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// reverse method
arr1.reverse();
console.log("Reversed array : ", arr1);
//arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]

//sort method 
//1. Sort ascending order
arr1.sort((a, b) => a - b);
console.log("Sorted array in ascending order : ", arr1);
//arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//2. Sort descending order
arr1.sort((a, b) => b - a);
console.log("Sorted array in descending order : ", arr1);
//arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]

//concat method
//combines arr0 and arr1 into a new array
const arr0 = [10, 11, 12, 13, 14];
const combinedArr = arr0.concat(arr1);
console.log("Combined array : ", combinedArr);
//combinedArr = [10, 11, 12, 13, 14, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//join method
//converts an array into a string, with elements separated by a specified separator
const arrString = arr1.join(", ");
console.log("Array as string : ", arrString); // "9, 8, 7, 6, 5, 4, 3, 2, 1"

//splice method
// splice(start, deleteCount, item1, item2, ...) - removes deleteCount elements from index start and adds item1, item2, ...
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(2, 1, 10, 11, 12); // removes 1 element from index 2 and adds 10, 11, 12
console.log("Array after splice : ", arr2);     
//arr2 = [1, 2, 10, 11, 12, 4, 5, 6, 7, 8, 9]

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
//gets specific elements from an array based on a condition
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = arr4.filter(num => num % 2 === 0);
console.log("Even numbers : ", evenNumbers); // [2, 4, 6, 8]

//forEach method
//Executes a function for each element
arr4cube = [];
arr4.forEach(num => arr4cube.push(num**3)); //using push to add elements to arr4cube; forEach does not return a new array
console.log("Original Array : ", arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9] (original array remains unchanged)
console.log("Cube of each element using forEach : ", arr4cube); // [1, 8, 27, 64, 125, 216, 343, 512, 729]

//map method
// Map : method creates an array by applying a function to every single value of array.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squares = arr5.map(num => num * num);
console.log("Squares : ", squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//reduce method ??
// reduce(callback, initialValue) - Calculates a combined result
const arr6 = [1, 2, 3, 4, 5];
const sum = arr6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum : ", sum); // 15


/*the difference between forEach(), map(), and filter():
- forEach() — perform an action for every element.
- map() — transform every element and return a new array.
- filter() — return only elements that satisfy a condition.
*/


//1. write a program to get square of all even numbers from array
//2. write a program to get factorial of all numbers in an array
//3. write a program to get sum of all numbers in an array
//4. write a program to reverse an array using for loop
//5. write a program to get 2 numbers whose sum is 10
//6. write a program to get all prime numbers from an array with function

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


console.log("-------------------Program 5-------------------");

//i = 0, j = 1
for (var i = 0; i < a1.length; i++) {
    for (j=i+1; j < a1.length; j++) {
        if (a1[i] + a1[j] === 10) {
            console.log("Sum is 10: ", a1[i], a1[j]);
        }
    }
}


console.log("-------------------Program 6-------------------");

var a1 = [4, 6, 7, 8, 2, 4, 3, 11, 5, 9];
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            var prime = false;
            break
        }
    }
    if (prime === false) {
        console.log(num, "is not a prime number"); // 4 is not a prime number
}
    return prime !== false;
}

isPrime(a1);
var primeNumbers = a1.filter(isPrime);
console.log("Prime numbers in the array: ", primeNumbers); // [7, 3, 11, 5]


//7. write a program to remove duplicate numbers from an array
//8. writw a program to generate output = [[4, 'even'], [6, 'even'], [7, 'odd'], [8, 'even'], [2, 'even'], [4, 'even'], [3, 'odd'], [11, 'odd'], [5, 'odd'], [9, 'odd']]
//9. write a program to generate fibonacci series of n numbers
//10. write a program to find second largest number in an array


console.log("-------------------Program 7-------------------");

var a1 = [4, 6, 7, 8, 2, 4, 3, 11, 5, 9];
var uniqueNumbers = [...new Set(a1)];
console.log("Unique numbers in the array: ", uniqueNumbers); // [4, 6, 7, 8, 2, 3, 11, 5, 9]

//unique elements using filter method

console.log("-------------------Program 8-------------------");

for (var v in a1) {
    if (a1[v] % 2 === 0) {
        console.log([a1[v], 'even']);
    } else {
        console.log([a1[v], 'odd']);
    }
}

console.log("-------------------Program 9-------------------");

function fibonacciSeries(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}

console.log(fibonacciSeries(10));

console.log("-------------------Program 10-------------------");

var a1 = [4, 6, 7, 8, 2, 4, 3, 11, 5, 9];
var maxValue = 0;
var secMaxValue = 0;

for (var v of a1){
    if (a1[v] > maxValue) {
        secMaxValue = maxValue;
        maxValue = a1[v];
    } else if (a1[v] > secMaxValue) {
        secMaxValue = a1[v];
    }
}
console.log("Largest number in the array: ", maxValue); // 11
console.log("Second largest number in the array: ", secMaxValue); // 9