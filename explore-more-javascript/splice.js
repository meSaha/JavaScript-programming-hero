// 22-2 Get part of an array and insert elements using slice, splice
const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 5, 555,9999);
console.log(partial);
console.log(friends);