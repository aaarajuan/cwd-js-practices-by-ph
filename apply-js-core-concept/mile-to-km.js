// km = miles * 1.609
function mileToKm(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}
const dadaMile = 200;
const kiloMeter = mileToKm(dadaMile);
console.log(kiloMeter + 'km');