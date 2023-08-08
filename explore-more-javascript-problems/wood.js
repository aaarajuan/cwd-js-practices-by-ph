/**
 * fixed: per item wood requirements
 * 1. chair - 3cft
 * 2. table - 10cft
 * 3. bed - 50cft
 * vary: quantit
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);

    const totalWoods = chairWood +  tableWood + bedWood;
    return totalWoods;
}

const totalWood = woodCalculator(2, 2, 5);
console.log('Total Wood Required: ', totalWood);

