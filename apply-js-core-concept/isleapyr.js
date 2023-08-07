// jodi 4 diye vag jay kono songkha tahole sei songkhata leap yr.
function isLeapYear(year){
    const leapYear = year % 4;
    if(leapYear === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYR = isLeapYear(2023);
console.log(leapYR);