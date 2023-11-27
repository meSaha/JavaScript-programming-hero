// 19-8 (advanced) Looping through an Object and Object summary
//array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendAge = [12, 45,78,32,14];
var friendsAge = {
    raju: 12,
    raja: 45,
    rana: 78,
    rabi: 12,
    roy : 14,

}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    
}
const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i=0; i< keys.length; i++){
    //console.log(keys[i])
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName,value);
}
