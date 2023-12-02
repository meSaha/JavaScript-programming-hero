// 21-8 Reverse a string and Reverse words in a sentence
function reverseString(text){
    // for(let i = 0; i < text.length; i++){
     for(let i = text.length-1; i>0; i--){
        const element = text[i];
        console.log(element);
    }
}
const myString = " I am a good boy";
const reversed = reverseString(myString);
