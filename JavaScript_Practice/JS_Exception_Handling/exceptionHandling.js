// Exception handling in Javascript is used to manage runtime errors without stopping the entire program.
// it helps to write stable and reliable application.



function try_catch_block(){
    try{
        var a = 10/b;
        console.log("Value of a :", a);
    }catch(error){
        console.log("Error Message :", error.message);
        console.log("Error Name: ", error.name);
    }
    console.log("Execution continue.....")
}
try_catch_block()


function try_catch_finally_block(){
    try{
        var a = 10/b;
        console.log("Value of a :", a);
    }catch(error){
        console.log("Error Message :", error.message);
        console.log("Error Name: ", error.name);
    }finally{
        console.log("Finally block executed.....")
    }
    console.log("Execution continue.....")
}
try_catch_finally_block()



//exceptionPractice()
/*
error name : ReferenceError
message : b is not defined
Execution completed
*/

function exceptionPracticeTypeError() {
    try {
        var a = 10
        var output = a.toUpperCase();
        console.log(output)

    } catch(error) {
        console.log("Error Type :", error.name)
        console.log("message :", error.message)
        
    }
    console.log("Execution completed")
}

//exceptionPracticeTypeError()
/*
name : TypeError
message : a.toUpperCase is not a function
Execution completed
*/


function exceptionPracticeSyntaxError() {
    try {
        JSON.parse("{name: true")

    } catch(error) {
        console.log("Error Type :", error.name)
        console.log("message :", error.message)
        
    }
    console.log("Execution completed")
}

//exceptionPracticeSyntaxError()
/*
Error Type : SyntaxError
message : Expected property name or '}' in JSON at position 1 (line 1 column 2)
Execution completed
*/

function exceptionwithFinally() {
    try {
        var a = 10
        var b = 5
        var output = a*b
        console.log(output)
    } catch(error) {
        console.log("Error Type :", error.name)
        console.log("message :", error.message) 
    } finally {
        // finally block of code will execute in any condition.
        console.log("Code execution successful")
    }
}

//exceptionwithFinally()

function NestedException() {
    try {
        var a = 60
        var b = 6
        console.log("Addition of values :", a+b)
        try {
            JSON.parse("{name: true")
        } catch(error2) {
            console.log("Inner Exception error :", error2.name)
            console.log("Inner Exception Message :", error2.message)
        }

    } catch(error1) {
        console.log("Outer Exception error :", error1.name)
        console.log("outer Exception Message :", error1.message)
    }
}

//NestedException()


console.log("#################################################")
// get unique values using set
const set1 = new Set([6, 7, 8, 3, 4, 5, 6, 7, 3, 4, 5])
console.log(set1) // { 6, 7, 8, 3, 4, 5 }

set1.add(100)
console.log(set1)

// Delete value
set1.delete(8)
console.log(set1)

// clear all the data from set
set1.clear()
console.log(set1) // {}
console.log("##############################################")