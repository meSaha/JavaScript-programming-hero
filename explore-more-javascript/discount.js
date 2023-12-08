// 22-8 (advanced) Multi-layer discount price calculation
/**
 * If ticket numbers is less than 100, per tikcet price: 100
 * If ticket numbers is more than 100, but less than 200, First 100 tickets will be 100/ ticket rest tickets will be 90 taka piece
     first 100 n-->100tk
     rest -----> 90tk
 * if you purchase more than 200 tickets
        first 100 ----> 100 taka
        101-200   ----> 90 Taka
        200+ ---->70tk
 */
    function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(120);
console.log('price:', price);


// function ticketPrice(ticketQuantity){
//     const frist100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;
//     if(ticketQuantity <= 100){
//         const price = ticketQuantity * frist100Rate;
//         return price;
//     }
//     else if(ticketQuantity <= 200);{
//     const first100Price = 100 * frist100Rate;
//     const restTicketQuantity = ticketQuantity - 100;
//     const restTicketPrice = restTicketQuantity * second100Rate;
//     const totalPrice = first100Price + restTicketPrice;
//     return totalPrice;
//     }
//     // else {
//     //     const first100Price = 100 * first100Price;
//     //     const second100Rate = 100 * second100Rate;
//     //     const restTicketQuantity = ticketQuantity-200;
//     //     const restTicketPrice = ticketQuantity * restTicketRate;
//     //     const totalCost = first100Price + second100Price + restTicketRate;
//     //     return totalCost;
//     // }
// }
// const price = ticketPrice(120);
// console.log('price:',price);
    
