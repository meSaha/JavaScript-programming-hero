//--16-9 Variable types, toFixed, parseFloat and remainder
//----typeof ----
var price = 100;
console.log(typeof price); //Number type

var age = '32';
console.log(typeof age); //String type because '32' is umber semicolon.

var isHappy = true;
console.log(typeof isHappy); //boolean type

var hello;
console.log(typeof hello); // undefined type


//---- toFixed ----
//advanced
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
//sum = parseFloat(sum);
console.log(sum);


//Remainder modulas
var mangoes = 19;
var person = 7;
var remainder = mangoes % person;
// / this means vagfol 
// % this means vagses
console.log(remainder);
