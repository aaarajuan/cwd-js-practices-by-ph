var num1 = 13;
var num2 = 79;
var num3 = 45;
// find the lagest number
if (num1 >= num2 && num1 >= num3){
    lagest = num1;
}
else if (num2 >= num1 && num2 >= num3){
    lagest = num2;
}
else{
    lagest = num3;
}
console.log(lagest);

// isosceles or not
var tA = 9;
var tB = 8;
var tC = 9;

if (tA == tB && tB == tC){
    console.log("The triangle is equilateral.");
}   
else if (tA == tB || tA == tC || tB == tC){
    console.log("The triangle is isosceles.");
}
else{
    console.log("The triangle is scalene.");
}
    