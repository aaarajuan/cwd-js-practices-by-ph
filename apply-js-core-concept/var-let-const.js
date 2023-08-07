/* 
1. var is a global type variable you can change, redefine or relocate this type of varibale.
2. let and const is block type variable
3. although let is block type variable you can change it's value but you can't redefine let varible.
4. and in const variable you can't change, redefine or relocate variables.
*/
var superMan = '200PW';
var superMan = '300pw';
superMan = '250pw';

let age = 11;
// it won't work because it is a block type vairbale
// let age = 15; 
age = 12;

const countryName = 'Bangladesh';
// it won't work because you can't change const varibale
// countryName = 'chad'; 
console.log(age, countryName);