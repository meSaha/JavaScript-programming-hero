// 22-4 Write foo, bar, foobar if divisible by 3 or 5 or both
/**
 * show output from: 1-50
 * if the number divisible by then of the number show 'foo'
 * if the number is divisible by then instead of the number show 'bar'
 * if the number is divisible by both 3 and then instead of the number show 'foobar'
 */
for(let i = 1; i <= 50; i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log('foobar');
    }
    
    else if(i % 5 === 0){
        console.log('bar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else{
        console.log(i);
    }
}
