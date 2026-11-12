// - Abstraction is something where you provide overview information but don't provide the internal architecture and coding structure of the program. 
// Then it is called abstraction.
// - In abstraction, one class contained an abstract method. It means that method has to be implemented in the child class. 
// - If a class contains one single abstract method, then the entire class is called an abstract class. 
// - An abstract class may contain both non-abstract methods and abstract methods. 

abstract class BankAccountSBI {
    balance : number
    constructor(balanceAmount: number) {
        this.balance = balanceAmount
    }
 
    abstract Deposit(amount : number) : void
 
    greeting() {
        console.log("Welcome to SBI")
    }
}
 
// child class // drived class
class SavingAccountSBI extends BankAccountSBI {
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
 
 
    // Implemented abstract method inside the child class. 
    Deposit(amount: number): void {
        this.balance += amount
    }
}
 
const SBISavingObj = new SavingAccountSBI(60000)
SBISavingObj.CurrentBalance()
console.log("---------------------")
SBISavingObj.Deposit(80000)
console.log("---------------------")
SBISavingObj.CurrentBalance()
console.log("---------------------")
SBISavingObj.withdrawl(35000)
console.log("---------------------")
SBISavingObj.CurrentBalance()



console.log("----------------- Import Class ------------------");
/* create 2 seperate classes in 2 different files and import them in this file and create objects of those classes and call their methods. 
class A {
    methodA() {
        console.log("Method A called");
    }
}

class B {
    methodB() {
        console.log("Method B called");
    }
}

const objA = new A();
objA.methodA();


*/
