let first = 5;
let second = 7;
console.log(first, second);
/* 
this approch is wrong
first = second;
second = temp; 
*/
// approach:  1 (temporarying)
/* const temp = first;
first = second;
second = temp; */
// approach: 2 (destructuring)
[first, second] = [second, first];
console.log(first, second);