class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        let pointer1, pointer2, pointer3;
        nums.sort((a,b)=> a-b);
        for (let i=0; i<nums.length-2;i++) {
            if (i>0 && nums[i] == nums[i - 1]) continue;
            pointer1 = i;
            pointer2 = i + 1;
            pointer3 = nums.length - 1;
            while (pointer2  < pointer3) {
                
                let sum =  nums[pointer1] + nums[pointer2] + nums[pointer3];
                if (sum == 0) {
                    result.push([nums[pointer1], nums[pointer2], nums[pointer3]]);
                    while (pointer2 < pointer3 && nums[pointer2] == nums[pointer2 + 1]) pointer2 ++;
                    while (pointer2 < pointer3 && nums[pointer3] == nums[pointer3 - 1]) pointer3 --;
                    pointer2 ++;
                    pointer3 --;
                } else if (sum > 0) {
                    pointer3--;
                } else {
                    pointer2++;
                }
            }
        };

        return result;
    }
}
