// array of object
// [45, 21, 6, 98, 56]

const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'Iphone', camera: 15, storage: '32gb', price: 68000, color: 'silver'},
    {name: 'Xiomi', camera: 15, storage: '32gb', price: 28000, color: 'silver'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);