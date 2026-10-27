const arr = [4, 2, 6, 1, 9, 3, 5, 8, 7];

// Sort the array in ascending order using for loop
for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the elements
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
console.log("Sorted array : ", arr);