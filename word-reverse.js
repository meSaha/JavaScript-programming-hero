// 21-8 Reverse a string and Reverse words in a sentence
function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    
    for(let i = words.lenght -1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
console.log(result);
const myString = 'I am a good boy';
reverseWords(myString);
