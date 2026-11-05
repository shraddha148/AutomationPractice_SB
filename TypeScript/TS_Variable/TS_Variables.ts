var a: number = 10;
var b: string = "Hello";
console.log("Value of a:", a);
console.log("Value of b:", b);

var d: boolean = true;

//declare array with different data types
var arr: (string | number)[] = ["Apple", "Banana", "Cherry", 4];
console.log("Array values:", arr);

//Assign value to object data type
const userDetails: {
    username: string,
    email: string,
    phone: number,
    address: string
} = {
    username: "John",
    email: "john@gmail.com",
    phone: 9800291001983,
    address: "123 Main St, City, Country"
}

//get data from object
console.log(userDetails.username);


//create a object with different data types
const employee : any = {
    emp_name: "John Doe",
    emp_age: 30,
    emp_salary: 50000
}
console.log("Employee Name:", employee.emp_name);


console.log("------------Interface Example-----------------");
//interface is a template for creating objects. It defines the structure of an object, including the properties and their types. 
//Interfaces are used to enforce a contract for objects, ensuring that they adhere to a specific shape.
//can be reused in multiple objects and classes, promoting code reusability and maintainability.
interface details {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    phone: number;
}
//user 1 only caintains values interface details
const user1: details = {
    firstname: "Rohit",
    lastname: "Sharma",
    age: 30,
    email: "rohit.sharma@gmail.com",
    phone: 9876543210
}

const user2: details = {
    firstname: "Virat",
    lastname: "Kohli",
    age: 32,
    email: "virat.kohli@gmail.com",
    phone: 9876543211
}
    
console.log("User 1 Details:", user1);
console.log("User 2 Details:", user2);

// User 1 Details: {
//   firstname: 'Rohit',
//   lastname: 'Sharma',
//   age: 30,
//   email: 'rohit.sharma@gmail.com',
//   phone: 9876543210
// }
// User 2 Details: {
//   firstname: 'Virat',
//   lastname: 'Kohli',
//   age: 32,
//   email: 'virat.kohli@gmail.com',
//   phone: 9876543211
// }


