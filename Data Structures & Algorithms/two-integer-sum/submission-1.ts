class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hashMap: Map<number, number> = new Map ();
        for (let i = 0; i<nums.length; i++) {
            let num = nums[i];
            let diff = target - num;
            if (hashMap.has(diff)) {
                return [i,hashMap.get(diff)];
            } else {
                hashMap.set(num, i);
            }
        }
        return [];
    }
}
