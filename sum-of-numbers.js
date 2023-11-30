// 20-7 calculate factorial of a number using for loop 
let sum = 0;
for(let i = 1; i <= 7; i++){
    sum = sum + i;
    console.log(i);
}


// convert in function 
function sumOfNumbers(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum = sum + i;
        console.log(i,sum);
    }
    return sum;

}


// multiplication 
function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationOfNumbers(9);
console.log(result);
