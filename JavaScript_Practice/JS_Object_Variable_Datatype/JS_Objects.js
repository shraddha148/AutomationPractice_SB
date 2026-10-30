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
console.log("1. User Name using Square Bracket Notation:", UserDetails['name']); //

// 2. Get specific data using dot notation
console.log("2. User Phone using Dot Notation:", UserDetails.name); // Rahul

// Add a new key-value pair to the object
UserDetails.city = "Pune";
console.log("3. User Details After Adding City:", UserDetails); //{name: 'Rahul', email: 'rahul@gmail.com', phone: 789787987778, address: 'Pune, VimanNagar', city: 'Pune'}

// Delete an entry from the object
delete UserDetails.email;
console.log("4. User Details After Deleting Email:", UserDetails); //{name: 'Rahul', phone: 789787987778, address: 'Pune, VimanNagar', city: 'Pune'}

// Update existing data
UserDetails.city = "Mumbai";
console.log("5. User Details After Updating City:", UserDetails); //{name: 'Rahul', phone: 789787987778, address: 'Pune, VimanNagar', city: 'Mumbai'}

// Access objects inside an array
var multipleUser = [
    { name: 'rohit', age: 25, email: 'rohit@gmail.com' },
    { name: 'raghav', age: 35, email: 'raghav@gmail.com' }
];

console.log("6. First User Details:", multipleUser[0]); //{name: 'rohit', age: 25, email: 'rohit@gmail.com'}
console.log("7. Age of Second User:", multipleUser[1].age); //35

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
console.log("9. Object Keys:", Object.keys(studentsData)); // ['name', 'subject', 'address']

// 2. Get an array of all values
console.log("10. Object Values:", Object.values(studentsData)); // ['Mohit', {math: 50, english: 66, physics: 56, chemistry: 78}, 'Mumbai, MH']

// 3. Get an array of all key-value pairs
console.log("11. Object Entries (Key-Value Pairs):", Object.entries(studentsData)); // [['name', 'Mohit'], ['subject', {math: 50, english: 66, physics: 56, chemistry: 78}], ['address', 'Mumbai, MH']]

// 4. Assign method: Copy data from one object to another object > obj1 + obj2
const obj1 = { a: 123, b: 345 };
const obj2 = { p: 777, q: 999 };
const result = Object.assign(obj1, obj2);

console.log("12. Merged Object Using Object.assign():", result); // {a: 123, b: 345, p: 777, q: 999}

console.log("\n############## Object Freeze Method #############");

// 5. Freeze method: Prevents modifications to an object
const BankAccount = {
    accountNo: 7897897987,
    balance: 800000,
    type: "saving"
};

Object.freeze(BankAccount);

// BankAccount.balance = 100000;

console.log("13. Bank Account After Object.freeze():", BankAccount); // {accountNo: 7897897987, balance: 800000, type: 'saving'}
console.log("   Attempt to Delete Balance:", delete BankAccount.balance); // false

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

//add/update/remove a property (will not work)

//TypeError: Cannot delete property 'email' of #<Object>

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


console.log("\n################# Nested Object Destructuring ####################");

const User5 = {
    name: "Rohit",
    age: 30,
    address: {
        city: "Pune",
        state: "MH",
        country: "India"
    }
};

const { name: userName, age: userAge, address: { city, state, country } } = User5;

console.log("29. User Name Extracted Using Nested Destructuring:", userName); // Rohit
console.log("30. User Country Extracted Using Nested Destructuring:", country); // India



console.log("\n################# Object Spread Operator ####################");

const obj7 = { a: 100, b: 200 };
const obj8 = { ...obj7, c: 300 };

console.log("31. Original Object (obj7):", obj7); // { a: 100, b: 200 }
console.log("32. New Object (obj8) Using Spread Operator:", obj8); // { a: 100, b: 200, c: 300 }


console.log("\n################# Object Rest Operator ####################");

const { a, ...rest } = obj8;

console.log("33. Extracted Property 'a':", a); // 100
console.log("34. Remaining Properties Using Rest Operator:", rest); // { b: 200, c: 300 }



console.log("\n################# Object.is() Method ####################");

const obj9 = { x: 10, y: 20 };
const obj10 = { x: 10, y: 20 };

console.log("35. Are obj9 and obj10 the Same Object?", Object.is(obj9, obj10)); // false
console.log("36. Are obj9 and obj9 the Same Object?", Object.is(obj9, obj9)); // true   



console.log("------------------------- OBJECT PROGRAMS -------------------------");

//1. Count the number of properties in an object
const obj11 = { a: 1, b: 2, c: 3, d: 4 };
const propertyCount = Object.keys(obj11).length;

console.log("Prog1. Number of Properties in obj11:", propertyCount); // 4

//2. Write a program to calculate the bill as per the fruit purchased.

var FruitPrice = {Apple: 40, Mango: 50, Lichi: 70, watermelon: 44}
var Fruit_Purchased = {Apple: 10, Mango:20, Lichi: 15, watermelon: 5}
var total_billl = 0

for(var k in FruitPrice) {
    var fruit_name = k
    var fruitprc = FruitPrice[k]
    var fruitqua = Fruit_Purchased[k]
    var fruitbill = fruitprc * fruitqua
    total_billl = total_billl + fruitbill
    console.log(fruit_name, fruitqua, fruitprc, fruitbill)
}

console.log("Prog2. Total bill :", total_billl) // 10*40 + 20*50 + 15*70 + 5*44 = 400 + 1000 + 1050 + 220 = 2670

//3. Grouping of employee by departments.

const employees = {
    emp1: { name: "John", department: "IT" },
    emp2: { name: "Alice", department: "HR" },
    emp3: { name: "David", department: "IT" },
    emp4: { name: "Emma", department: "Finance" },
    emp5: { name: "Theresa", department: "Finance" },
    emp6: { name: "Timcy", department: "Finance" },
};

const DepartmentObject = {}

for(var k in employees) {
    var depart = employees[k].department // IT
    if(Object.hasOwn(DepartmentObject, depart)) {
        DepartmentObject[depart].push(employees[k].name)
    } else {
        DepartmentObject[depart] = [employees[k].name]
    }

}

console.log("Prog3. Grouped Employees by Department:", DepartmentObject)
// { IT: [ 'John', 'David' ], HR: [ 'Alice' ], Finance: [ 'Emma' ] }

//4. // write a proram to calculate the bill as per the fruit purchased.

var FruitPrice = {Apple: 40, Mango: 50, Lichi: 70, watermelon: 44}
var Fruit_Purchased = {Apple: 10, Mango:20, Lichi: 15, watermelon: 5}
var total_billl = 0

for(var k in FruitPrice) {
    var fruit_name = k
    var fruitprc = FruitPrice[k]
    var fruitqua = Fruit_Purchased[k]
    var fruitbill = fruitprc * fruitqua
    total_billl = total_billl + fruitbill
    console.log(fruit_name, fruitqua, fruitprc, fruitbill)
}

console.log("Total bill :", total_billl)

console.log("#######################################")
//12 .  Grouping of employee by departments.

const ITemployees = {
    emp1: { name: "John", department: "IT" },
    emp2: { name: "Alice", department: "HR" },
    emp3: { name: "David", department: "IT" },
    emp4: { name: "Emma", department: "Finance" },
    emp5: { name: "Theresa", department: "Finance" },
    emp6: { name: "Timcy", department: "Finance" },
};

const DepartmentsObject = {}

for(var k in ITemployees) {
    var depart = ITemployees[k].department // IT
    if(Object.hasOwn(DepartmentsObject, depart)) {
        DepartmentsObject[depart].push(ITemployees[k].name)
    } else {
        DepartmentsObject[depart] = [ITemployees[k].name]
    }

}

console.log(DepartmentsObject)
// { IT: [ 'John', 'David' ], HR: [ 'Alice' ], Finance: [ 'Emma' ] }

//4. // write a proram to calculate the bill as per the fruit purchased. Apply 20% discount if total bill is more than 2000.

var FruitPrice = {Apple: 40, Mango: 50, Lichi: 70, watermelon: 44}
var Fruit_Purchased = {Apple: 10, Mango:20, Lichi: 15, watermelon: 5}
var total_bill = 0

for(var k in FruitPrice) {
    var fruit_name = k
    var fruitprc = FruitPrice[k]
    var fruitqua = Fruit_Purchased[k]
    var fruitbill = fruitprc * fruitqua
    total_bill = total_bill + fruitbill
    console.log(fruit_name, fruitqua, fruitprc, fruitbill)
}

console.log("Total bill :", total_bill) // 10*40 + 20*50 + 15*70 + 5*44 = 400 + 1000 + 1050 + 220 = 2670
if (total_bill > 2000){
    total_bill = total_bill - (total_bill * 0.2)
}console.log("Total bill after discount :", total_bill) // 2670 - (2670 * 0.2) = 2136

console.log("#######################################")
//12 .  Grouping of employee by departments.

const employees1 = {
    emp1: { name: "John", department: "IT" },
    emp2: { name: "Alice", department: "HR" },
    emp3: { name: "David", department: "IT" },
    emp4: { name: "Emma", department: "Finance" },
    emp5: { name: "Theresa", department: "Finance" },
    emp6: { name: "Timcy", department: "Finance" },
};

const DepartmentssObject = {}

for(var k in employees1) {
    var depart = employees1[k].department // IT
    if(Object.hasOwn(DepartmentssObject, depart)) {
        DepartmentssObject[depart].push(employees1[k].name)
    } else {
        DepartmentssObject[depart] = [employees1[k].name]
    }

}

console.log(DepartmentssObject)
// { IT: [ 'John', 'David' ], HR: [ 'Alice' ], Finance: [ 'Emma' ] }

//4. Convert an array to an object where even numbers are keys and their sqaure are values and odd numbers are keys and their cube are values.
    
const arr = [5, 6, 8, 12, 13, 15];
const obj12 = {};

for (var v in arr) {
    if (arr[v] % 2 == 0){
        value = arr[v] ** 2;
    } else {
        value = arr[v] ** 3;
    }
}
obj12[arr[v]] = value;

console.log("Prog4. Array to Object Conversion (Even: Square, Odd: Cube):", obj12); // { '5': 125, '6': 36, '8': 64, '12': 144, '13': 2197, '15': 3375 }

//5. Convert an object to an array of key-value pairs
const obj13 = { a: 1, b: 2, c: 3 };
const arr13 = Object.entries(obj13);

console.log("Prog5. Object to Array of Key-Value Pairs:", arr13); // [['a', 1], ['b', 2], ['c', 3]]