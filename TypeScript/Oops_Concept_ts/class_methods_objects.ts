//Class: A blueprint for creating object
//Methods: Functions defined within a class
//Objects: group related values together under one name, property: a key and a value.
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

    //initialize properties of class using constructor
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

