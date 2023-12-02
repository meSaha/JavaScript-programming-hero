// 21-7 Who is the tallest? Find the max number in an array

function maxInArray(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        // let largest = numbers[0];
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
        // console.log(element);
    }
    return largest;
}
const heights = [167,190,120, 165,137];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);