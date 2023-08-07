// 3! = 3*2**1
// factorial nirnoy:
function multiplicationOfNumbers(numbers){
    let result = 1;
    for(let i = 1; i <= numbers; i++){
        result = result * i;
    }
    return result;
}

const result = multiplicationOfNumbers(9);
console.log(result);