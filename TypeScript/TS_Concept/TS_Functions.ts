function addition(a: number, b: number): number {
    console.log("Addition of a and b:", a + b);
}
addition(10, 20);

// array function
var result = (n: number)=> {
    var fact =1
    for(var i=n; i>0; i--) {
        fact = fact*i
    }
 
    console.log(`fact of ${n}: ${fact}`)
 
}
 
result(5)

console.log("------------Fibonacci series-----------------");

function fib(count: number): number[] {
    
    const series: number[] = [];
    for (let i = 0, previous = 0, current = 1; i < count; i++) {
        series.push(previous);
        [previous, current] = [current, previous + current];   //1, 2 = 2, 3; 2 , 3 = 3, 5; 3, 5 = 5, 8
    }
    return series; // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
}

console.log(`Fibonacci series: ${fib(10)}`); // Output: Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34