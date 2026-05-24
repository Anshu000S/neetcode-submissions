class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set (nums);
        let longestStreak = 0;

        for (let i=0; i< nums.length; i++) {
            let number = nums[i];
            let diff = number - 1;
            let streak = 1;

            if (!set.has(diff)) {
                let flag = true;
                let increment = 1;
                while (flag) {
                    if (set.has(number + increment)) {
                        increment++;
                        streak++;
                    } else {
                        flag = false;
                    }
                }
                if (streak>longestStreak) {
                        longestStreak = streak;
                }
            }   
        }

        return longestStreak;
    }
}
