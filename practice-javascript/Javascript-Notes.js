// JavaScript syntax is the set of rules, how JavaScript programs are constructed:
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
console.log(z);



// The JavaScript syntax defines two types of values:

// Fixed values
// Variable values
// Fixed values are called Literals.

// Variable values are called Variables.


// JavaScript Literals
// The two most important syntax rules for fixed values are:

// 1. Numbers are written with or without decimals:
// 2. Strings are text, written within double or single quotes:


// JavaScript Variables
// In a programming language, variables are used to store data values.

// JavaScript uses the keywords var, let and const to declare variables.

// An equal sign is used to assign values to variables.

// In this example, x is defined as a variable. Then, x is assigned (given) the value 6:


// The let keyword tells the browser to create variables:

/*let x, y;
  x = 5 + 6;
  y = x * 10;
*/


// The var keyword also tells the browser to create variables:

/*var x, y;
x = 5 + 6;
y = x * 10;
*/

// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.