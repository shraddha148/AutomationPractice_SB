class PersonDetails {
    name: string
    _age: number
    email: string
 
    constructor(name: string, age: number, email: string)  {
        this.name  = name
        this._age = age
        this.email = email 
    }
 
    // Getter always returns a value, doesn't require any parameter 
    get age() {
        return this._age
    }
 
    set age(value: number) {
        this._age = value
    }
 
    showUsersDetails() {
        console.log("Name :", this.name)
        console.log("Age :", this.age)
        console.log("Email :", this.email)
    }
}
 
 
const NewUser = new PersonDetails("Rahul", 25, "rahul@gmail.com")
NewUser.showUsersDetails()
 
// Set the `age` property using a setter. 
NewUser.age = 30
console.log("--------------------")
NewUser.showUsersDetails()
 
// Get this`_age` value using a getter. 
console.log(NewUser.age)