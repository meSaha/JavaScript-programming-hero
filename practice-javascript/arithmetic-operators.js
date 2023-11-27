// The Addition Assignment Operator (+=) adds a value to a variable.
var x = 10;
x += 5;
//= Same As
// x = 10 + 5; 
console.log(x); // output is 15

// String type variable 
var txt1 = "Hello";
var txt2 = "world";
txt1 += "world";
// Same As
// txt1 = "Hello" + "world";
 console.log(txt1);


//  The Subtraction Assignment Operator (-=) subtracts a value from a variable.
 var x = 10;
 x -= 5;
// Same As 
// x = 10 - 5;
 console.log(x);


//  The Multiplication Assignment Operator(*= ) multiplies a variable.

var x = 10;
// x *= 5;
// Same As
x = 10 * 5;
console.log(x);


// The Division Assignment Operator (/=) divides a variable.
var x = 10;
// x /= 5;
// Same AS
x = 10 / 5;
console.log(x);


// The Remainder Assignment Operator (%=)assigns a remainder to a variable.
var x = 10;
x %= 5;
// Same As
x = 10 % 5;
console.log(x);


// The Exponentiation assignment operator ( **=) 
/* The exponentiation assignment (**=) operator performs exponentiation on the two operands and assigns the result to the left operand.*/
var x = 10;
x **= 5;
console.log(x); // 10 X 10 X 10 X 10 X 10 = 100000

var a = 3;
console.log((a **=2)); // output=>3x3 = 9
console.log((a **= 0)); 
console.log((a **= 'hello'));
