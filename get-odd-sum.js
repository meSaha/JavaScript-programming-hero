// ================**issue not understand**=========================//
// 20-6 Get odd numbers of an array and get odd sum of an array
function getSumOfAnArray(numbers){
    const oddNumbers = [];
    //let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        //console.log(index, element,sum);
    }
    return sum;
}
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index,element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12,65,45,78,32,45,91];
// console.log(oddNumbers);
const oddNumbers = getSumOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumberSum);

// getSumOfAnArray(myNumbers);

