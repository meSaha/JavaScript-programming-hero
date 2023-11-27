//19-2 Declare a Function, call function, function vs loop

function bringSingara(money){
    console.log('Mama Singara Den');
    console.log(money);
}
bringSingara(100);


//19-3 Add Function parameter, handle multiple parameters

function bringSingaras(money){
    console.log('taka disen:',money);
    console.log('ai nen singara');
}
var taka = 300;
bringSingaras(taka);


// Another program handle multiple parameter

function add(num1, num2){
    console.log('going to add:', num1, num2);
}
add(100, 200);


// multiple parameter

function sum(a, b, c, d, e){
    console.log(a,b,c,d,e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(2, 3, 5, 10, 1);