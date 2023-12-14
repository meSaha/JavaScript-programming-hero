//  23_5-1 Understand recursion using sum of numbers
let sum = 0;
for(let i = 5; i > 1; i--){
    sum = sum + 1
}
console.log(sum);

function sum(i){
    console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);

// 23_5-2 Explore Factorial Recursion using a for loop concept
function sum(i){
    // console.log(i);
    if(i == 1){
        return 1;
    }
    return i + sum(i-1);
}
const results = sum(5);
console.log(result);

/**
 * Recursion
 * 5 + sum (4)
 * 5 + 4 + sum (3)
 * 5 + 4 + 3 + sum (2)
 * 5 + 4 + 3 + 2 + 1
 */