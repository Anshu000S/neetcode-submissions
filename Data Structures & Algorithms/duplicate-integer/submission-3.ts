class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seenNums = new Set<number>;

        for(const num of nums) {
            if(seenNums.has(num)) {
                return true;
            } else {
                seenNums.add(num);
            }
        }
        return false;
    }
}
