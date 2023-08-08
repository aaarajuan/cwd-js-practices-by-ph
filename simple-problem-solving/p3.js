function maxInArray(nums){
    let largest = nums[0];
    for(let i = 0; i < nums.length; i++){  
        const index = i;
        const element = nums[index];
        if(element > largest){
            largest = element;
        }
        else{
            console.log('there is a error occured please enter numbers to get max nums!');
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest);