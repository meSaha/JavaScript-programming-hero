//--16-8 (advanced) String Concatenation, type conversion parseInt parseFloat--
//--var price1 = '31'; সংখ্যা যদি '31' সেমি কোলেন এর মধ্যে থাকে তাহলে স্ট্রিং হিসাবে ধরবে।
var price1 = '31';
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice); //output 3110

// convert string to number
// স্ট্রিংকে নম্বরে কনভার্ট করার জন্য parseInt ব্যবহার করা হচ্ছে |
console.log(price1);
var priceNumber = parseInt(price1); // output => 31
console.log(priceNumber);


var gpa = '3.41';
var gpaNumber = parseInt(gpa);
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);

var myAge = "32";
var yourAge = parseInt(myAge);
console.log(yourAge);

var temp = '35.2';
var todayTemp = parseFloat(temp);
console.log(todayTemp);
