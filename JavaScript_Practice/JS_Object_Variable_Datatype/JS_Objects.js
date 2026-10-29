/*
Objects are variables too. But objects can contain many values of different data types.
Objects are written with curly braces {}. Each value is written as a key:value pair, separated by commas.
Objects are mutable, meaning that their properties can be changed, added, and deleted.
In Key-value, key is always a string and value can be any datatype or a function.
The key-value pair is also called a property.
*/

var UserDetails = {
    name: "Rahul",
    email: "rahul@gmail.com",
    phone: 789787987778,
    address: "Pune, VimanNagar"
};

// 1. Get specific data using key in square brackets
console.log("1. User Name using Square Bracket Notation:", UserDetails['name']);

// 2. Get specific data using dot notation
console.log("2. User Phone using Dot Notation:", UserDetails.phone);

// 3. Add a new key-value pair to the object
UserDetails.city = "Pune";
console.log("3. User Details After Adding City:", UserDetails);

// 4. Delete an entry from the object
delete UserDetails.email;
console.log("4. User Details After Deleting Email:", UserDetails);

// 5. Update existing data
UserDetails.city = "Mumbai";
console.log("5. User Details After Updating City:", UserDetails);

// 6. Access objects inside an array
var multipleUser = [
    { name: 'rohit', age: 25, email: 'rohit@gmail.com' },
    { name: 'raghav', age: 35, email: 'raghav@gmail.com' }
];

console.log("6. First User Details:", multipleUser[0]);
console.log("7. Age of Second User:", multipleUser[1].age);

// 7. Access nested object properties
const sudents = {
    name: "Mohit",
    subject: {
        math: 50,
        english: 66,
        physics: 56,
        chemistry: 78
    }
};

console.log("8. Student's Mathematics Marks:", sudents.subject.math);

console.log("\n############## Object Methods #############");

const studentsData = {
    name: "Mohit",
    subject: {
        math: 50,
        english: 66,
        physics: 56,
        chemistry: 78
    },
    address: "Mumbai, MH"
};

// 1. Get an array of all keys
console.log("9. Object Keys:", Object.keys(studentsData));

// 2. Get an array of all values
console.log("10. Object Values:", Object.values(studentsData));

// 3. Get an array of all key-value pairs
console.log("11. Object Entries (Key-Value Pairs):", Object.entries(studentsData));

// 4. Assign method: Copy data from one object to another object
const obj1 = { a: 123, b: 345 };
const obj2 = { p: 777, q: 999 };
const result = Object.assign(obj1, obj2);

console.log("12. Merged Object Using Object.assign():", result);

console.log("\n############## Object Freeze Method #############");

// 5. Freeze method: Prevents modifications to an object
const BankAccount = {
    accountNo: 7897897987,
    balance: 800000,
    type: "saving"
};

Object.freeze(BankAccount);

// BankAccount.balance = 100000;

console.log("13. Bank Account After Object.freeze():", BankAccount);

console.log("\n############## Object Seal Method #############");

// 6. Seal method: Does not allow adding or removing properties
const user = {
    name: 'John',
    age: 25,
    email: 'john@gmail.com',
    phone: 5765675
};

Object.seal(user);

// user.address = '55, Baner Pune';
// console.log(user);

// Update an existing property
user.age = 30;

console.log("14. User Details After Object.seal() and Updating Age:", user);

console.log("\n############## Object.hasOwn() Method #############");

// 7. Check whether an object has a specific property or not
console.log("15. Does User Have an Email Property?", Object.hasOwn(user, 'email'));
console.log("16. Does User Have an Address Property?", Object.hasOwn(user, 'address'));

console.log("\n################# Looping Through Objects ####################");

// Apply a for...in loop to an object
var obj_data = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    phone: 5765675
};

console.log("17. Displaying All Object Keys and Values:");

for (var k in obj_data) {
    console.log("Key:", k, "| Value:", obj_data[k]);
}

console.log("\n################# Copying Objects ####################");

// 1. Reference copy: Changes made through either variable affect the same object
const obj4 = { a: 300, b: 600, c: 400 };
const obj3 = obj4;

console.log("18. Original Object (obj4):", obj4);
console.log("19. Reference Copy (obj3):", obj3);

console.log("-------------------- Updating Reference Copy --------------------");

obj3.a = 700;

console.log("20. obj3 After Updating Property 'a':", obj3);
console.log("21. obj4 After Updating obj3 (Same Object Reference):", obj4);

// 2. Shallow copy: Top-level property changes do not affect the original object
const obj5 = { p: 111, q: 345 };
const obj6 = { ...obj5 };

obj6.p = 500;

console.log("22. Original Object (obj5) After Updating obj6:", obj5);
console.log("23. Shallow Copy (obj6) After Updating Property 'p':", obj6);

obj5.q = 800;

console.log("24. obj5 After Updating Property 'q':", obj5);
console.log("25. obj6 Remains Unchanged After Updating obj5:", obj6);

console.log("\n################# Object Destructuring ####################");

// Object destructuring: Extract property values into separate variables
const User4 = {
    name: "rahul",
    age: 25,
    email: 'rahul@gmail.com'
};

const { name, age, email } = User4;

console.log("26. User Name Extracted Using Destructuring:", name);
console.log("27. User Age Extracted Using Destructuring:", age);
console.log("28. User Email Extracted Using Destructuring:", email);