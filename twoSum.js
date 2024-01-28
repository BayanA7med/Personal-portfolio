function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

const nums = [2, 5 , 11 , 7];
const target = 9;
const result = twoSum(nums, target);
console.log(result); 
