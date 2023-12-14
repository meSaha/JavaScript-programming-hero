//  23_5-4 (advanced) Find the matching product by searching products
const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
for(const number of numbers){
    console.log(number)
}
const products = [
    {id:1, name:'A01 phone', price:10000},
    {id:2, name:'B01 phone', price:20000},
    {id:3, name:'C01 phone', price:30000},
    {id:4, name:'E01 phone', price:40000},
    {id:5, name:'F01 phone', price:50000},
    {id:6, name:'G01 phone', price:60000},
    {id:7, name:'H01 phone', price:70000},
    {id:8, name:'I01 phone', price:80000},
];
for(const product of products){
    console.log(product)
}