//Class: A blueprint for creating object
//Methods: Functions defined within a class
//Objects: Instances of a class
//constructor: A special method used to initialize objects of a class
//            -> Used to initialize the properties of an object of class when it is created
//            -> It is automatically called when an object of a class is created
//            -> two types of constructor: default constructor and parameterized constructor

//** we use this in POM to refer to the current class object and its properties and methods


class Person {
    //declare properties of class
    firstname: string;
    lastname: string;
    age: number;
    phone: number;

    constructor(firstname: string, lastname: string, age: number, phone: number) {
        console.log("Constructor called");
        //Initialize properties of class in the constructor
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.phone = phone;
    }
    //method to display details of person
    greeting() {
        console.log("Welcome to greeting method");
    }
    ShowUserDetails() {
        //Access the properties of class using this keyword
        console.log("FirstName:", this.firstname);
        console.log("LastName:", this.lastname);
        console.log("Age:", this.age);
        console.log("Phone:", this.phone);
    }
    ShowAddress(address: string) {                 //new method to show address of person
        console.log("Address:", address);          //method can be used only after creating object of class Person
    }
}

//create object of class Person
const person1 = new Person("Rohit", "Sharma", 30, 9876543210);
person1.greeting();
person1.ShowUserDetails();
person1.ShowAddress("Mumbai, India");


console.log("------------Inheritance in TypeScript-----------------");


/* Inheritance, where one class acquires the property of another class and it shares data between both classes.
 The class which inherits the properties of another class is called child class or subclass and the class whose properties are inherited is called parent class or superclass. 
 1. Single Inheritance: A child class inherits the properties of a single parent class. Class A -> Class B
 2. Multilevel Inheritance: multiple classes are connceted with each other in a linear manner. Class A -> Class B -> Class C -> Class D
 3. Multiple Inheritance: A child class inherits the properties of multiple parent classes. Class A, Class B -> Class C
 4. Hierarchical Inheritance: multiple child classes inherit the properties of a single parent class. Class A -> Class B, Class C, Class D
 5. Hybrid Inheritance: A combination of two or more types of inheritance. Class A -> Class B -> Class C, Class D -> Class E
     Hybrid inheritance is in a circle and not recommonded in TypeScript. It can be achieved using interfaces in TypeScript.
 

 */


console.log("------------Single Inheritance-----------------");
//Single Inheritance
//Parent class/ base class
class BankAccount {
    balance : number;
    constructor(balanceAmount: number) {
        this.balance = balanceAmount;
    }
    Deposite(amount : number){
        this.balance += amount
        console.log("Amount Credited: ", amount);
    }
}

//Child class/ derived class
class SavingsAccount extends BankAccount {
    constructor(balanceAmount: number) {
// whenever we set up inheritence between 2 classes, 
// the parent class costructor has to be intinialized in the child class constructor using super() method **

        super(balanceAmount); // Call the parent class constructor

    }
    withdraw (amount : number) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log("Amount Debited: ", amount);
        }
    }
    CurrentBalance() {
        console.log("Current Balance: ", this.balance);
    }
}

//create object of child class SavingsAccount
const obj1 = new SavingsAccount(1000);
obj1.CurrentBalance();
obj1.Deposite(500);
obj1.CurrentBalance();
obj1.withdraw(200);
obj1.CurrentBalance();

console.log("------------ Inheritance Example-----------------");

/* create a company class with these properties - companyname, companyaddress, company revenue
create a child class employee which will inherit from company class
Create three methods:
1. Show employee name
2. Show employee ID
3. Show employee salary
Create an object of the employee class. Provide all the parameters
 of the parent class as well as the class itself. Then, through the child class object,
 access all the methods that we specify in the parent and child classes. 
 */

 class Company {
     companyName: string;
     companyAddress: string;
     companyRevenue: number;
 
     constructor (companyName: string, companyAddress: string, companyRevenue: number){
         console.log("Company Constructor called");
         this.companyName = companyName;
         this.companyAddress = companyAddress;
         this.companyRevenue = companyRevenue;
     }
     showCompanyDetails() {
         console.log("Company Name:", this.companyName);
         console.log("Company Address:", this.companyAddress);
         console.log("Company Revenue:", this.companyRevenue);
     }
 
  }
  class Employee extends Company {
     employeeName: string;
     employeeID: number;
     employeeSalary: number;
 
     constructor(employeeName: string, employeeID: number, employeeSalary: number) {
         super("Rootstock", "San Jose", 1000000); // Call the parent class constructor with company details
         console.log("Employee Constructor called");
         this.employeeName = employeeName;
         this.employeeID = employeeID;
         this.employeeSalary = employeeSalary;
     }
 
     showEmployeeDetails() {
         console.log("Employee Name:", this.employeeName);
         console.log("Employee ID:", this.employeeID);
         console.log("Employee Salary:", this.employeeSalary);
        }
    }
    //creating object of child class Employee and showing data
    const emp = new Employee('John De', 12889, 50000);
    emp.showCompanyDetails();
    emp.showEmployeeDetails();
