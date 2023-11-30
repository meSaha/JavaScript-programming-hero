// 20-4 Check wheather a year is a Leap Tear or not 
// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         console.log('Your year is leap year',year);
//     }
//     else{
//         console.log('Your year is not a leap year',year);
//     }

// } 
// isLeapYear(2023);
// isLeapYear(2024);
// isLeapYear(2025);
// isLeapYear(2026);
// isLeapYear(2027);
// isLeapYear(2028);
// isLeapYear(2029);
// isLeapYear(2030);

// Another example 

function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}
const isMyLeapYear = isLeapYear(2024);
console.log('my year:', isMyLeapYear);