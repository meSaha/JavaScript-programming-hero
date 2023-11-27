//17-8 (advanced) Multi stage condition and nested conditions
var money = 100;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;
if(danishPrice < money){
    console.log('Dasnish Khabo');
}
else if(butterBread <money){
    console('Butter bon Khabo');
}
else if (toastBiscuit < money){
    console.log('Toast Khabo');
}
else{
    console.log('Only Tea khabo');
}