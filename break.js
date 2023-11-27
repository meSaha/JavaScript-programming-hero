// 18-6 (advanced) while and for loop break and continue
 for(var i = 1; i <= 20; i++){
     console.log(i);
     if(i > 5){
        break;
    }
}


/*var roastGiven = 0;
while(roastGiven < 10){
    console.log('Roast den, gift item anechi');
roastGiven++;
if(roastGiven >4){
    break;
}
}*/


//Display my items but pen item please out
var items =["bottle", "mouse", "sunglass", "pen"];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == "pen"){
        break;
    }
    console.log(item);
}

// // target : display every elements of an array
var numbers = [45, 87, 89, 56,32,51,25];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(numbers > 100){
        break;
    }
    console.log(number);
}