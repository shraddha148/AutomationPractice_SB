console.log("Hello world!!");

// 3 ways to decalre a variable
//  var, let , const

/*
//  var variable properties.
// 1. var variable can re-declare and re-assign
// 2. it has functional scope across the module.
// 3. can be declare without initialization.
*/

var a = 10;
console.log("value of a :", a)

// var : type of variable
// a : variable name
// = : assignment operator
// 10 : value to assign to the variable

// re-assign value to variable
a = 20;
console.log("re-assigned value of a:", a);

//re-declare the variable
var a = 30
console.log("re-decalre variable :", a)

// declare variable without assignment.
var b
console.log("variable b :", b)
// variable b : undefined

b = 40 // initialize
console.log("variable b :", b)
// variable b : 40


console.log("######################################")
// Let variables 
/*
1.  Let variable can be re-assigned.
2.  let variable can't re-decalration.
3.  it is block scope variable.
*/

let x=20;
console.log("value of x :", x)

// re-assign value
x = 30
console.log("value of x :", x)

// re-declaration of let variable is not allowed.
// let x = 50
// console.log("value of x :", x)
// Identifier 'x' has already been declared

if(true) {
    //if condition block
    var p = 100
    let m = 400
    console.log("var variable p inside scope :", p)
    console.log("let variable m inside scope :", m)
}

console.log("var variable p outside scope :", p)
// console.log("let variable m outside scope :", m) // ReferenceError: m is not defined

// block scope let variable can re-declare outside of block scope
let m = 500
console.log("Variable m:", m)
// Variable m: 500


console.log("#####################################")
/*
// const variable properties.
1. const can not re-declare.
2. const can not re-assign.
3. const has to initialize while declaring the variable.
4. const has block scope.
*/

// declare variable with out initialization
//const f
//console.log("value of f ")
// SyntaxError: Missing initializer in const declaration


// re-assign val to const variable
const P = 500
console.log("Variable P :", P)
//P = 600
//console.log("variable P :", P)
//TypeError: Assignment to constant variable


// re-decalre const variable : Its not allowed to declare const variable
const Q = 700
console.log("value of Q :", Q)

// const Q = 800
// console.log("value of Q :", Q)
// Identifier 'Q' has already been declared


if (true) {
    // if condition block
    var W = 50
    let G = 60
    const H = 70
    console.log("var W inside block:", W )
    console.log("let G inside block:", G)
    console.log("const H inside block:", H)
}

console.log("var W outside block:", W )
//console.log("let G outside block:", G) // ReferenceError: G is not defined
//console.log("const H outside block:", H) // ReferenceError: H is not defined