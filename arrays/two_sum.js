
/*
The idea 

*/

var twoSum = function (nums, target) {
    let h = {};
    for (let i = 0; i < nums.length; i++) {
        if (h[target - nums[i]]) {
            h[target - nums[i]].push(i);
            return h[target - nums[i]];
        } else {
            h[nums[i]] = [i];
        }
    }
    return -1;
};