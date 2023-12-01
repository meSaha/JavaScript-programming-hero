const text= "JavaScript can also be used to create server-side applications and mobile applications." ;
const parts = text.split(' ');
const sentences = text.split('.')
const chars = text.split('');
// console.log(chars);

// slice
const partial = text.slice(5,8);
// console.log(partial);

// lines 
const newLine = ["Happy New year"];
const lines = newLine.join(':');
console.log(newLine);