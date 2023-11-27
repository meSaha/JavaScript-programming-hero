//19-7 multiple ways to get and set object property
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
/*//when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//console.log(shoppingCart);
// alternative system 
var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);*/

//when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative system 
//when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
//console.log(properties);
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyvalues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyvalues);
//console.log(shoppingCart);
