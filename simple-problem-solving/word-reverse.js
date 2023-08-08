function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length - 1; i >= 0; i--){
        const indexElements = words[i];
        result.push(indexElements);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a good boy';
const finalResult = reverseWords(myString);
console.log(finalResult);