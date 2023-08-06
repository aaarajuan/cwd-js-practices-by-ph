/* 
function funtionName(parameters){
    // function body
    // return
}

var = returedValues = functionName(parameters value); */

function getAvg(a1, a2, a3){
    const total = a1 + a2 + a3;
    const avg = total / 3;
    return avg;
}

var a1Marks = 58;
var a2Marks = 59;
var a3Marks = 56;

var myAvg = getAvg(a1Marks, a2Marks, a3Marks);
console.log('My average Assignment Marks so far: ', myAvg.toFixed(2));