
// Arithematic Operators
var a = 10
var b = 5

// + add operator
console.log("Addition of value :", a+b)
// Addition of value : 15

// * multipl"ication operator
console.log("Multiplication of value:", a*b)
// Multiplication of value: 50

// / division operator
var x = a/b
console.log("Divisionb of values :", x)
// Divisionb of values : 2

// - subtract operator
var y = a-b
console.log("subtraction output :", y)
// subtraction output : 5
console.log(20/3) // 6.666666666666667

// ** exponential operator
console.log("square of a :", a**2) // square of a : 100
console.log("Cube of b :", b**3) // Cube of b : 125

// % remainder operator (modulus)
console.log("20 divide by 3 :", 20%3) // 20 divide by 3 : 2


console.log("##############################################")
// Comparision operator
var a = 10
var b = "10"
var c = 20

// == : equal operator : It check only value not the data type.
console.log("a == b:", a == b) // true

// === : strict equal operator : It checks the value as well as datatype
console.log("a === b:", a === b ) // false

// != : Not equal (It only checks the data)
console.log("a != b:", a != b ) // false

// !== : Strict not equal (It checks data types and values)
console.log("a !== b:", a !== b) // a !== b: true

// > : greater than
console.log("c > a:", c > a)

// < : less than
console.log("c < a:", c < a)

var d = 40
var f = 45
var g = 40
var h = 35
// >= greater equal
console.log("f >= d :", f >= d) // f >= d : true
console.log("f >= g :", f >= g) // f >= g : true

// <= : less than equal
console.log(" h <= g:", h <= g) //   h <= g: true
console.log(" d <= g:", d <= g ) //  d <= g: true


console.log("##############################################")
// AND : && operator
// OR :  OR operator

/*
// AND condition

true && false : false
false && true : false
true && true : true
false && false : false
*/

var x = 10
var y = 20
var z = 30
console.log( x < y && y > z) // false
console.log(x > y && z > y) // false
console.log(z > x && z > y) // true
console.log(z < x && z < y) // false

/*
// || condition

true || false : true
false || true : true
true || true : true
false || false : false
*/

var p = 20
var q = 40
var r = 50
console.log("p < q || p > r:", p < q || p > r) // true
console.log("p > q || p < r:", p > q || p < r) // true
console.log("p < q || p < r:", p < q || p < r) // true
console.log("p > q || p > r:", p > q || p > r) // false


console.log("########################################")
// Assignment operator
//  = : Assignment operator
var x = 50

// += : increase existing value by 10
x += 10 // x = x + 10
console.log("x += 10 value x :", x) // x += 10 value x : 60

// -= : decrease existing value by 5
x -= 5 // x = x - 5
console.log("x -= 5 output :", x) // x -= 5 output : 55

// *= : multiply existing value by 10
x *= 10 // x = x*10
console.log("x *= 10 :", x) // x *= 10 : 550

// /= : divide existing value by 5
x /= 5 // x = x/5
console.log("x /= 5:", x) // x /= 5: 110

console.log("####################################")
// increament ++
var P = 10
console.log(P++) // post increment // 10
console.log(P) // 11
console.log(P+2) // 13
console.log(P)


var Q = 20
console.log(++Q) // pre increment // 21

// Decrement try by your self.