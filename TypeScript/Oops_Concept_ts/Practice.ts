//Inheritance 

class BankAccount {
    balance: number;
    constructor(balanceAmount: number){
        this.balance = balanceAmount;
    }
}


class SavingsAccount extends BankAccount{
    constructor (balanceAmount: number){
        super(balanceAmount);
    }

    deposite(amount: number){
            this.balance += amount;
            console.log("Amount Credited: ", amount);
        }
    withdrawl(cash: number){
        if (this.balance < cash){
            console.log("Insufficient Balance");
        } else {
            this.balance -= cash;
        }
    }

    CurrentBalance(){
        console.log("Current Balance: ", this.balance);
    }
}
const obj = new SavingsAccount(1000);
obj.CurrentBalance();
obj.deposite(500);
obj.CurrentBalance();
obj.withdrawl(200);
obj.CurrentBalance();
