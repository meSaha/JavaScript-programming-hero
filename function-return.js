// 19-4 Everything you need to know about return from a function
/*function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
    //return sum;
    //console.log(sum);
}
//add(45, 15);
var total = add(80,20);
console.log('total', total);


// Example 2  

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
 }
    var myTaka = 150
    var singaras = bringSingara(myTaka);
    console.log('Eating Singaras:', singaras);
*/
// Example 3

/*function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
    const result1 = add(12, 13);
    //console.log(result1);
    const result2 = add(35, 7);
    //console.log(result2);
    const finalResult = add(result1, result2);
*/

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total /3;
    return average;
}
 const assignment1Marks = 60;
 const assignment2Marks = 58;
 const assignment3Marks = 59;

 var myAverage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);
 console.log('my average so far', myAverage);


 function  test(){
    // which return wins?

    return 'one';
    return 'two';
    return 'three';
 }
 