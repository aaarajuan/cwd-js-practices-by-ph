// jodi kono 1ta songkhs 2 diye vag jay ebong kono vagsesh thake na ebong purno songkha pawa jay tahole shei songkhake jor songkha bole

function isEven(num){
    const remainder = num % 2;
    // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumIsEven = isEven(48);
console.log(myNumIsEven);
const myNumIsOdd = isEven(43);
console.log(myNumIsOdd);