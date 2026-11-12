console.log("------------Inheritance in TypeScript-----------------");


/* Inheritance, where one class acquires the property of another class and it shares data between both classes.
 The class which inherits the properties of another class is called child class or subclass and the class whose properties are inherited is called parent class or superclass. 
 1. Single Inheritance: A child class inherits the properties of a single parent class. Class A -> Class B
 2. Multilevel Inheritance: multiple classes are connceted with each other in a linear manner. Class A -> Class B -> Class C -> Class D
 3. Multiple Inheritance (not achievable): A child class inherits the properties of multiple parent classes. Class A, Class B -> Class C
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
        this.balance = balanceAmount; //1000
    }
    Deposite(amount : number){
        this.balance += amount;     //1000 + 500 = 1500
        console.log("Amount Credited: ", amount);
    }
}

//Child class/ derived class
class SavingsAccount extends BankAccount {// child class extends parent class 
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



console.log("------------Multiple Inheritance-----------------");
//not achievable in TypeScript. It can be achieved using interfaces in TypeScript.

console.log("------------Multi-level Inheritance-----------------");
// Single Inheritance 
// parent class/ base class
class BankAccount1 {
    balance : number
    constructor(balanceAmount: number) {
        this.balance = balanceAmount
    }
 
    Deposit(amount : number) {
        this.balance += amount
        console.log("Amount credited: +",amount)
 
    }
}
 
// child class // drived class
class SavingAccount1 extends BankAccount1 {
    constructor(balanceAmount : number) {
        // Whenever we set up the inheritance between two classes, 
        // the parent class constructor has to be initialized in 
        // the child class using the `super` keyword. 
        super(balanceAmount)
    }
 
    withdrawl(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient Balance")
        } else {
            this.balance -= amount
            console.log("Amount debited from account : -", amount)
        }
    }
 
    CurrentBalance() {
        console.log("Current Balance :", this.balance)
    }
}
 
class CurrentAccount1 extends SavingAccount1 {
    constructor(balanceAmount: number) {
        super(balanceAmount)
    }
 
    CalculateInterestAmount(LoanAmount: number, interate_rate: number, tenure: number) {
        var interestAmount = (LoanAmount*tenure * interate_rate)/100
        console.log("Total interest :", interestAmount)
    }
}
 
const Currentobj = new CurrentAccount1(7000)
Currentobj.Deposit(10000)
Currentobj.CurrentBalance()
Currentobj.CalculateInterestAmount(200000, 7, 2)

console.log("------------Interface-----------------");
//Interface: An interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
// An interface contains only the declaration of the members.   
// But we don't implement any of the values, which are methods or variables. 
// In an interface, the value has to be implemented in the parent class.
 
interface BankAccountInt {
    balance : number
    deposit(amount: number): void
    withdrawal(amount: number) : void   
}
 
class CurrentAccount {
    CalculateInterestAmount(LoanAmount: number, interate_rate: number, tenure: number) {
        var interestAmount = (LoanAmount*tenure * interate_rate)/100
        console.log("Total interest :", interestAmount)
    }
}
 
class SavingAcc extends CurrentAccount implements BankAccountInt {
    balance: number
    constructor(BankBalance: number) {
        super()
        this.balance = BankBalance
    }
 
    deposit(amount: number): void {
        this.balance += amount
        console.log("Amount deposited :+", amount)
    }
 
    withdrawal(amount: number): void {
        this.balance -= amount
        console.log("Amount withdrwal :", amount)
    }
}
 
const SCObj = new SavingAcc(5000)
SCObj.deposit(3000)
SCObj.CalculateInterestAmount(100000, 8, 1)



console.log("----------------- Polymorphism ------------------");

// Polymorphism is basically one particular person doing multiple tasks.
/* 1. Method overriding: when two classes are connected to each other and both classes have the same method name,
                        then child class method will override the parent class method. 

// Method overloading is not allowed in typescript
// 2. Method overloading : when one class has two methods with different names and 
//                         different parameters, then it is called method overriding. But TypeScript does not support method overriding, 
//                         as it does not allow providing any duplicate method name in the same class. 
*/
 
// parent class/ base class
class BankAccountNew {
    balance : number
    constructor(balanceAmount: number) {
        this.balance = balanceAmount
    }
 
    Deposit(amount : number) {
        this.balance += amount
        console.log("Amount credited: +",amount)
 
    }
 
    GreetingFromBank(name: string) {
        console.log(`Hello ${name}, Welcome to SBI`)
    }
 
    // duplicate method names are not allowed in TS.
 
    // addition(n1: number, n2: number) {
    //     console.log("Addition :", n1+n2)
    // }
 
    // addition(n1: number, n2: number, n3: number) {
    //     console.log("Addition :", n1+n2+n3)
    // }
}
 
// child class // drived class
class SavingAccountNew extends BankAccountNew {
    constructor(balanceAmount : number) {
        // Whenever we set up the inheritance between two classes, 
        // the parent class constructor has to be initialized in 
        // the child class using the `super` keyword. 
        super(balanceAmount)
    }
 
    withdrawl(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient Balance")
        } else {
            this.balance -= amount
            console.log("Amount debited from account : -", amount)
        }
    }
 
    CurrentBalance() {
        console.log("Current Balance :", this.balance)
    }
 
    GreetingFromBank(name: string) {
        console.log(`Hello ${name}, Welcome to SBI Saving Account`)
    }
}
 
const objNew = new SavingAccountNew(7000)
objNew.Deposit(5000)
 
objNew.GreetingFromBank('Rahul')