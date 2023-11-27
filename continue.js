// 18-6 (advanced) while and for loop break and continue
// Continue means Go to the next round or skip
var numbers = [45, 87, 89, 56,32,51,25,188,41,25,98];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}