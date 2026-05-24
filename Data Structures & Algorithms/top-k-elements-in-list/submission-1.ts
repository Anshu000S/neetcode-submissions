class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap: Map<number, number> = new Map();
        for(let i = 0; i<nums.length; i++) {
            if (hashMap.has(nums[i])) {
                hashMap.set(nums[i], hashMap.get(nums[i]) + 1 );
            } else {
                hashMap.set(nums[i],  1);
            }
        }
        let result: Array<number> = [];
        let temp = Array.from(hashMap);
        temp.sort((a,b) => b[1]-a[1]);
        for (let j=0; j<k; j++) {
            result.push(temp[j][0]);
        }
        return result
    }
}
