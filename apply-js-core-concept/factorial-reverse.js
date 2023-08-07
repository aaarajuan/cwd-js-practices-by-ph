// using for loop
/* 
function factorial(nums){
    let result = 1;
    for(let i = nums; i >= 1; i--){
        result *= i;
        console.log(i);
    }
    return result;
}

const fact = factorial(9);
console.log('factorial of: ', fact); 
*/

// using while loop
/* 
function factorial(nums){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result *= num;
        num++;
    }
    return result;
} 

const fact = factorial(9);
console.log('factorial of: ', fact); 
*/

// using while loop reverse way
function factorial(nums){
    let i = nums;
    let result = 1;
    while(i >= 1){
        result *= i;
        i--;
    }
    return result;
}

const fact = factorial(9);
console.log('factorial of: ', fact); 