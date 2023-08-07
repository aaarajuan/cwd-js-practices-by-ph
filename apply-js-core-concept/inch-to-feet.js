/* 
const myInches = 12;
const myFeet = myInches / 12;
// console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet: ', dadaFeet + 'ft');
*/
// 12 inch = 1ft
function inchToFeet(inches){
    const feet = inches / 12
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet + 'ft');
