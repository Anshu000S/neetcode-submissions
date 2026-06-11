class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let high   = nums.length - 1;
        let low    = 0
        let mid;
        while (low <= high) {
            mid = low + Math.floor((high - low) / 2);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low =  mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return - 1

    }
}
