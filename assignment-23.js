/* 
Problem:1  radianToDegree
ফাংশন নেম দিতে হবে radianToDegree । 
এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)।
তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। 
রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
*/ 

function radianToDegree(radian) {
  // Convert radian to degree
  const degree = radian * (180 / Math.PI);

  // Round to two decimal places
  const roundedDegree = Math.round(degree * 100) / 100;

  return roundedDegree;
}
const radianValue = 2.5; // Replace with your radian value
const degreeResult = radianToDegree(radianValue);
console.log(`Radian: ${radianValue} -> Degree: ${degreeResult}`);


/*
Problem:2  isJavaScriptFile 
ফাংশন নেম দিতে হবে isJavaScriptFile । 
এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। 
যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 
*/
function isJavaScriptFile(fileName) {
  // Extract the file extension
  const fileExtension = fileName.split('.').pop();

  // Check if the file extension is 'js'
  return fileExtension.toLowerCase() === 'js';
}
const fileName1 = 'index.js';
const fileName2 = 'styles.css';

console.log(`${fileName1} is a JavaScript file: ${isJavaScriptFile(fileName1)}`);
console.log(`${fileName2} is a JavaScript file: ${isJavaScriptFile(fileName2)}`);



/*
Problem 3: oilPrice
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
ভিডিও ভালো করে দেখবে। 
প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
 */
function oilPrice(litersDiesel, litersPetrol, litersOctane) {
  const pricePerLiterDiesel = 114;
  const pricePerLiterPetrol = 130;
  const pricePerLiterOctane = 135;

  // Calculate total cost for each type of oil
  const costDiesel = litersDiesel * pricePerLiterDiesel;
  const costPetrol = litersPetrol * pricePerLiterPetrol;
  const costOctane = litersOctane * pricePerLiterOctane;

  // Calculate and return the total cost
  const totalCost = costDiesel + costPetrol + costOctane;
  return totalCost;
}


const litersDiesel = 10;
const litersPetrol = 15;
const litersOctane = 5;

const totalCost = oilPrice(litersDiesel, litersPetrol, litersOctane);
console.log(`Total cost for ${litersDiesel} liters of diesel, ${litersPetrol} liters of petrol, and ${litersOctane} liters of octane is ${totalCost} rupees.`);

/*Problem 4: publicBusFare
একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে।
ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। 
এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । 
মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 
উদাহরণ১ঃ
যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । 
বাকি মানুষ পাবলিক বাসে যাবে। 
এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
উদাহরণ২ঃ
যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে।
এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
 */

function publicBusFare(numPassengers) {
  const busCapacity = 50;
  const microbusCapacity = 11;
  const busFarePerPerson = 250;

  // Calculate the number of buses and microbuses needed
  const numBuses = Math.floor(numPassengers / busCapacity);
  const numMicrobuses = Math.floor((numPassengers % busCapacity) / microbusCapacity);

  // Calculate the number of people traveling by public bus
  const remainingPassengers = numPassengers % (busCapacity * microbusCapacity);

  // Calculate and return the total public bus fare
  const totalFare = remainingPassengers * busFarePerPerson;
  return totalFare;
}

// Example usage:
const example1Passengers = 117;
const example2Passengers = 235;

const example1Fare = publicBusFare(example1Passengers);
const example2Fare = publicBusFare(example2Passengers);

console.log(`Total public bus fare for ${example1Passengers} people: ${example1Fare} rupees.`);
console.log(`Total public bus fare for ${example2Passengers} people: ${example2Fare} rupees.`); 




 
/*
Problem 5: isBestFriend
তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । 
তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । 
যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
 */
function isBestFriend(person1, person2) {
  // Check if each person is the best friend of the other
  return person1.bestFriend === person2 && person2.bestFriend === person1;
}

// Example usage:
const personA = { name: 'Alice', bestFriend: null };
const personB = { name: 'Bob', bestFriend: null };

// Set each other as best friends
personA.bestFriend = personB;
personB.bestFriend = personA;

// Check if they are best friends
const areBestFriends = isBestFriend(personA, personB);

console.log(`Are ${personA.name} and ${personB.name} best friends? ${areBestFriends}`);
