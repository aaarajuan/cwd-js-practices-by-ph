function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const indEx = i;
        const element = numbers[indEx];
        sum += element;
        console.log(indEx, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32,  45, 91];
getSumOfAnArray(myNumbers);