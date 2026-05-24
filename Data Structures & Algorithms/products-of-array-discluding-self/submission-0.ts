class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix: Array<number> = [];
        let suffix: Array<number> = [];
        let result: Array<number> = [];
        let leftProduct = 1;
        for (let i=0;i<nums.length;i++) {
            prefix.push(leftProduct);
            leftProduct = leftProduct * nums[i];
        }
        let rightProduct = 1;
        for(let j=nums.length-1; j>=0;j--) {
            suffix[j] = rightProduct;
            rightProduct = rightProduct * nums[j];
        }
        
        for (let k=0; k<nums.length;k++) {
            let product = suffix[k] * prefix[k];
            result.push(product);
        }

        return result;
    }
}
