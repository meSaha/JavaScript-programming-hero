// 23_5-3 (optional) Explore what you can do with JavaScript Object
const student = {
    name: "Sourav Das",
    id: 121,
    address:'kolkata',
    isSingle: true,
    friends: ['Apu','Raja','Sanju','Aamir'],
    car:{
        brand:'tesla',
        price: 50000,
        made: 2023, 
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
        }
    }
}
console.log(student.car);


// array
const products = [
    {name: 'phone', price: 20000,},
]
products[0];
products[1];

const product = {
    '0':15,
    '1':56,
    '2':87,

}


//  Arguments
function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);

}
add(12, 13,45,89,78);
