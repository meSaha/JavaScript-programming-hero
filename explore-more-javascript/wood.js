// 22-5 Use add and multiplication to calculate wood requirements
function woodCalulator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    //console.log(chairQuantity, tableQuantity,bedQuantity);
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalulator(1,1,1);
console.log('total wood required', totalWood);