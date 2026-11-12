/*
// Encapsulation and data hiding mean binding the data

1. Public: Any variable or method declared as 'Public' can be accessed from anywhere, both inside and outside the class. It is the default access modifier in TypeScript.
2. Private: Any variable or method declared as 'Private' can only be accessed within the class itself. It cannot be accessed from outside the class or by any child classes.

3. Protected: Any variable or method declared as 'Protected' can be accessed within the class itself and by any derived classes, but not from outside the class hierarchy.

4. Readonly: The 'Readonly' modifier is used to make a property read-only. It can only be assigned a value during initialization or in the constructor of the class. Once assigned, its value cannot be changed.

5. Static: The 'Static' modifier is used to define static members of a class. Static members belong to the class itself rather than to any specific instance of the class. They can be accessed using the class name without creating an instance of the class.


*/

class Car {
    public carName: string;
    protected carMilage: number;
    private carCompany: string;
    readonly carPrice: number;
    constructor(carName: string, carMilage: number, carCompany: string, carPrice: number) {
        this.carName = carName;
        this.carMilage = carMilage;
        this.carCompany = carCompany;
        this.carPrice = carPrice;   
    }

    public showcarname() {
        console.log("Car Name: ", this.carName);
    }

    protected showcarmilage() {
        console.log("Car Milage: ", this.carMilage);
    }

    private showcarmake() {
        console.log("Car Company: ", this.carCompany);
    }

    public showcarprice() {
        console.log("Car Price: ", this.carPrice);
    }
}   

class SUV extends Car {
    constructor(carname: string, carMilage: number, carCompany: string, carPrice: number) {
        super(carname, carMilage, carCompany, carPrice);
    }

        showCarDetails() {
            console.log("Public Car Name: ", this.carName); // Accessible
            console.log("Protected Car Milage: ", this.carMilage); // Accessible
            //console.log("Car Company: ", this.carCompany); // Not Accessible
            console.log("Readonly Car Price: ", this.carPrice); // Accessible
        }
    }

const carObj = new Car("Tata Nexon", 20, "Tata Motors", 1000000);
console.log(carObj.carName);
console.log(carObj.carPrice);

const suvObj = new SUV("Tata Safari", 18, "Tata Motors", 1500000);
suvObj.showCarDetails();


