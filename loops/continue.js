var num = [45, 87, 89, 56, 32, 51, 25];

for(var i = 0; i < num.length; i++){
    var nums = num[i];
    if(nums > 50){
        continue;
    }
    console.log(nums);
}