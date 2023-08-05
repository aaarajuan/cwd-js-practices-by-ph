// array replacement

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[1] = 'Mango';
console.log(bananaIndex);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
