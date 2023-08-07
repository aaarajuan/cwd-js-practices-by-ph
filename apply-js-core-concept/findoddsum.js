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

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 55, 91];
getSumOfAnArray(myNumbers);
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumOfAnArray(myNumbers);
console.log(oddNumberSum);