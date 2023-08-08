const shoppingCart = [
    {name: 'Shoe', price: 1200, quantity: 2},
    {name: 'Shirt', price: 2200, quantity: 5},
    {name: 'Pant', price: 3700, quantity: 4},
    {name: 'Belt', price: 600, quantity: 3},
];

function totalCost(products){
    let sum = 0;
    for(i = 0; i < products.length; i++){
        const product = products[i];
        const productTotatl = product.price * product.quantity;
        sum += productTotatl;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total: ', expense);