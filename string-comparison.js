// 21-1 String comparison using toLowerCase toUpperCase
const userName = "helloMyBoy";
const userInput ="sandeep";
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleUpperCase());
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user');

}
