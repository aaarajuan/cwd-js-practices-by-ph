function sumOfNumbers(numbers){
    let sum = 0;
    for(let i = 1; i <= numbers.length; i++){
        sum += i;
        console.log(i, sum);
    }
    return sum;
}

sumOfNumbers(7);