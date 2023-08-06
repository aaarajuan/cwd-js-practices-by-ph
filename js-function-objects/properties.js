var shoppingCart = {
    books: 3, // key:value, / properties:value,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

// console.log(shoppingCart);