class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const obj = {};
        let containDuplicate: boolean = false;
        nums.forEach ((num)=>{
            if(obj[num]) {
                containDuplicate =  true;
            } else {
                obj[num] = 1;
            }
        })
        return containDuplicate;
    }
}
